import { basehub } from '.basehub';

export const basehubClient = basehub({ next: { revalidate: 43200 } });
