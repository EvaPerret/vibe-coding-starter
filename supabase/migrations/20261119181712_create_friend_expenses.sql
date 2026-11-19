create table public.friend_expenses (
  id bigint generated always as identity primary key,
  label text not null,
  amount_cents integer not null,
  payer text not null,
  created_at timestamptz not null default now(),
  constraint friend_expenses_label_length check (
    char_length(btrim(label)) between 2 and 80
  ),
  constraint friend_expenses_amount_positive check (
    amount_cents between 1 and 100000000
  ),
  constraint friend_expenses_payer_allowed check (
    payer in ('lina', 'noe', 'sam')
  )
);

create index friend_expenses_created_at_idx
  on public.friend_expenses (created_at desc);

alter table public.friend_expenses enable row level security;

revoke all on table public.friend_expenses from anon, authenticated;
revoke all on sequence public.friend_expenses_id_seq from anon, authenticated;

grant select, insert on table public.friend_expenses to anon;
grant usage, select on sequence public.friend_expenses_id_seq to anon;

create policy "Les visiteurs voient les dépenses du groupe"
  on public.friend_expenses
  for select
  to anon
  using (true);

create policy "Les visiteurs ajoutent une dépense valide"
  on public.friend_expenses
  for insert
  to anon
  with check (true);
