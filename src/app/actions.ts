'use server';

import { revalidatePath } from 'next/cache';
import { getSupabase } from '@/db';
import { FRIENDS, type FriendId } from '@/lib/friends';

export type ExpenseFormState = {
  status: 'idle' | 'error' | 'success';
  message?: string;
  errors?: {
    label?: string;
    amount?: string;
    payer?: string;
  };
};

function parseAmountInCents(value: string) {
  const normalized = value.trim().replace(',', '.');

  if (!/^\d{1,6}(?:\.\d{1,2})?$/.test(normalized)) {
    return null;
  }

  const [euros, decimals = ''] = normalized.split('.');
  return Number(euros) * 100 + Number(decimals.padEnd(2, '0'));
}

export async function addExpense(
  _previousState: ExpenseFormState,
  formData: FormData,
): Promise<ExpenseFormState> {
  const label = String(formData.get('label') ?? '').trim();
  const amount = String(formData.get('amount') ?? '');
  const payer = String(formData.get('payer') ?? '');
  const amountCents = parseAmountInCents(amount);
  const allowedPayers = new Set<string>(FRIENDS.map((friend) => friend.id));

  const errors: NonNullable<ExpenseFormState['errors']> = {};

  if (label.length < 2 || label.length > 80) {
    errors.label = 'Indiquez un achat entre 2 et 80 caractères.';
  }

  if (amountCents === null || amountCents <= 0 || amountCents > 100000000) {
    errors.amount = 'Saisissez un montant positif, avec deux décimales maximum.';
  }

  if (!allowedPayers.has(payer)) {
    errors.payer = 'Choisissez la personne qui a payé.';
  }

  if (Object.keys(errors).length > 0 || amountCents === null) {
    return { status: 'error', errors };
  }

  const { error } = await getSupabase().from('friend_expenses').insert({
    label,
    amount_cents: amountCents,
    payer: payer as FriendId,
  });

  if (error) {
    return {
      status: 'error',
      message: 'La dépense n’a pas pu être enregistrée. Réessayez dans un instant.',
    };
  }

  revalidatePath('/');
  return { status: 'success', message: 'Dépense ajoutée et soldes recalculés.' };
}
