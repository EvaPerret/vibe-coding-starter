export const FRIENDS = [
  { id: 'lina', name: 'Lina', initials: 'LI' },
  { id: 'noe', name: 'Noé', initials: 'NO' },
  { id: 'sam', name: 'Sam', initials: 'SA' },
] as const;

export type FriendId = (typeof FRIENDS)[number]['id'];
