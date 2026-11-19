import { ExpenseForm } from './expense-form';
import { calculateBalances, formatEuros, FRIENDS, getExpenses } from '@/lib/expenses';

export const dynamic = 'force-dynamic';

function BalanceCard({ friendId, amount }: { friendId: (typeof FRIENDS)[number]['id']; amount: number }) {
  const friend = FRIENDS.find((item) => item.id === friendId)!;
  const status = amount > 0 ? 'récupère' : amount < 0 ? 'doit' : 'à jour';

  return (
    <article className="rounded-3xl border border-line bg-white p-5 shadow-card">
      <div className="flex items-center gap-3">
        <span className={`avatar avatar-${friend.id}`} aria-hidden="true">
          {friend.initials}
        </span>
        <div>
          <h3 className="font-semibold text-ink">{friend.name}</h3>
          <p className="text-sm text-muted">{status}</p>
        </div>
      </div>
      <p className={`mt-5 text-2xl font-bold tracking-tight ${amount < 0 ? 'text-danger' : 'text-success'}`}>
        {amount === 0 ? '—' : formatEuros(Math.abs(amount))}
      </p>
    </article>
  );
}

export default async function Home() {
  let expenses = [] as Awaited<ReturnType<typeof getExpenses>>;
  let loadError = false;

  try {
    expenses = await getExpenses();
  } catch {
    loadError = true;
  }

  const balances = calculateBalances(expenses);
  const totalCents = expenses.reduce((total, expense) => total + expense.amount_cents, 0);

  return (
    <main className="min-h-svh">
      <header className="border-b border-line bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-ink text-xl text-white" aria-hidden="true">
              ↗
            </span>
            <div>
              <p className="font-bold tracking-tight">Les bons comptes</p>
              <p className="text-xs text-muted">Lina · Noé · Sam</p>
            </div>
          </div>
          <span className="rounded-full bg-success-soft px-3 py-1.5 text-xs font-semibold text-success">
            Groupe partagé
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <section className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Dépenses entre amis</p>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl">
            Partagez les frais,
            <span className="block text-accent">pas les calculs.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Ajoutez ce que vous avez acheté. La part de chacun et les soldes se mettent à jour automatiquement.
          </p>
        </section>

        <section aria-labelledby="balances-title" className="mb-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 id="balances-title" className="text-xl font-bold tracking-tight sm:text-2xl">
                Où en est-on ?
              </h2>
              <p className="mt-1 text-sm text-muted">Total partagé : {formatEuros(totalCents)}</p>
            </div>
            <p className="hidden text-xs text-muted sm:block">Arrondis répartis dans l’ordre Lina, Noé, Sam.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {FRIENDS.map((friend) => (
              <BalanceCard key={friend.id} friendId={friend.id} amount={balances[friend.id]} />
            ))}
          </div>
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <section aria-labelledby="add-title" className="rounded-[2rem] border border-line bg-panel p-6 shadow-card sm:p-8">
            <p className="text-sm font-bold text-accent">Nouvelle dépense</p>
            <h2 id="add-title" className="mt-1 text-2xl font-bold tracking-tight">
              Ajouter un achat
            </h2>
            <p className="mb-7 mt-2 text-sm leading-6 text-muted">Une saisie suffit, le partage est toujours égal.</p>
            <ExpenseForm />
          </section>

          <section aria-labelledby="history-title" className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-accent">Historique</p>
                <h2 id="history-title" className="mt-1 text-2xl font-bold tracking-tight">
                  Les dépenses
                </h2>
              </div>
              <span className="rounded-full bg-canvas px-3 py-1.5 text-sm font-semibold text-muted">
                {expenses.length} {expenses.length > 1 ? 'achats' : 'achat'}
              </span>
            </div>

            {loadError ? (
              <div className="rounded-2xl bg-danger-soft p-4 text-sm font-medium text-danger" role="alert">
                Les dépenses ne sont pas disponibles pour le moment. Actualisez la page dans un instant.
              </div>
            ) : expenses.length === 0 ? (
              <div className="grid min-h-64 place-items-center rounded-3xl border border-dashed border-line bg-canvas/60 p-8 text-center">
                <div>
                  <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent-soft text-2xl text-accent" aria-hidden="true">
                    +
                  </span>
                  <h3 className="mt-4 font-bold">Aucune dépense pour l’instant</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                    Ajoutez le premier achat pour voir apparaître les soldes du groupe.
                  </p>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-line">
                {expenses.map((expense) => {
                  const payer = FRIENDS.find((friend) => friend.id === expense.payer)!;
                  return (
                    <li key={expense.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className={`avatar avatar-small avatar-${payer.id}`} aria-hidden="true">
                          {payer.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-ink">{expense.label}</p>
                          <p className="mt-0.5 text-sm text-muted">Payé par {payer.name}</p>
                        </div>
                      </div>
                      <p className="shrink-0 font-bold tabular-nums text-ink">{formatEuros(expense.amount_cents)}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
