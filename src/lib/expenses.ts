import 'server-only';
import { getSupabase } from '@/db';
import { FRIENDS, type FriendId } from '@/lib/friends';

export { FRIENDS } from '@/lib/friends';

export type Expense = {
  id: number;
  label: string;
  amount_cents: number;
  payer: FriendId;
  created_at: string;
};

export async function getExpenses(): Promise<Expense[]> {
  const { data, error } = await getSupabase()
    .from('friend_expenses')
    .select('id, label, amount_cents, payer, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Impossible de lire les dépenses : ${error.message}`);
  }

  return (data ?? []) as Expense[];
}

export function calculateBalances(expenses: Expense[]) {
  const balances: Record<FriendId, number> = { lina: 0, noe: 0, sam: 0 };

  for (const expense of expenses) {
    balances[expense.payer] += expense.amount_cents;

    const baseShare = Math.floor(expense.amount_cents / FRIENDS.length);
    const remainder = expense.amount_cents % FRIENDS.length;

    FRIENDS.forEach((friend, index) => {
      balances[friend.id] -= baseShare + (index < remainder ? 1 : 0);
    });
  }

  return balances;
}

export function formatEuros(cents: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}
