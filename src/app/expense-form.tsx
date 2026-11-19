'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { addExpense, type ExpenseFormState } from './actions';
import { FRIENDS } from '@/lib/friends';

const initialExpenseFormState: ExpenseFormState = { status: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-ink px-5 py-3 font-semibold text-white transition hover:bg-accent disabled:cursor-wait disabled:opacity-60"
    >
      {pending ? 'Enregistrement…' : 'Ajouter la dépense'}
    </button>
  );
}

export function ExpenseForm() {
  const [state, formAction] = useActionState(addExpense, initialExpenseFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      <div>
        <label htmlFor="label" className="mb-2 block text-sm font-semibold text-ink">
          Qu’est-ce qu’on a acheté ?
        </label>
        <input
          id="label"
          name="label"
          type="text"
          required
          minLength={2}
          maxLength={80}
          placeholder="Ex. Courses du week-end"
          aria-describedby={state.errors?.label ? 'label-error' : undefined}
          className="min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base shadow-sm placeholder:text-subtle"
        />
        {state.errors?.label && (
          <p id="label-error" className="mt-2 text-sm font-medium text-danger">
            {state.errors.label}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="amount" className="mb-2 block text-sm font-semibold text-ink">
          Montant
        </label>
        <div className="relative">
          <input
            id="amount"
            name="amount"
            type="text"
            inputMode="decimal"
            required
            placeholder="0,00"
            aria-describedby={state.errors?.amount ? 'amount-error' : 'amount-help'}
            className="min-h-12 w-full rounded-2xl border border-line bg-white px-4 py-3 pe-12 text-base shadow-sm placeholder:text-subtle"
          />
          <span className="pointer-events-none absolute inset-y-0 end-4 flex items-center font-semibold text-muted">€</span>
        </div>
        {state.errors?.amount ? (
          <p id="amount-error" className="mt-2 text-sm font-medium text-danger">
            {state.errors.amount}
          </p>
        ) : (
          <p id="amount-help" className="mt-2 text-sm text-muted">Le montant sera partagé entre trois.</p>
        )}
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-ink">Qui a payé ?</legend>
        <div className="grid grid-cols-3 gap-2">
          {FRIENDS.map((friend, index) => (
            <label key={friend.id} className="cursor-pointer">
              <input
                type="radio"
                name="payer"
                value={friend.id}
                defaultChecked={index === 0}
                className="peer sr-only"
              />
              <span className="flex min-h-12 items-center justify-center rounded-2xl border border-line bg-white px-2 py-3 text-sm font-semibold transition peer-checked:border-accent peer-checked:bg-accent-soft peer-checked:text-accent peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {friend.name}
              </span>
            </label>
          ))}
        </div>
        {state.errors?.payer && <p className="mt-2 text-sm font-medium text-danger">{state.errors.payer}</p>}
      </fieldset>

      <SubmitButton />

      {state.message && (
        <p
          role="status"
          className={`rounded-2xl px-4 py-3 text-sm font-medium ${
            state.status === 'success' ? 'bg-success-soft text-success' : 'bg-danger-soft text-danger'
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
