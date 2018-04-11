export const NEW = 'new';
export const IN_PROGRESS = 'in_progress';
export const DONE = 'done';

export const statusTranslations = {
  [NEW]: 'Commencer',
  [IN_PROGRESS]: 'En cours',
  [DONE]: 'Terminé'
};
export const statuses = [NEW, IN_PROGRESS, DONE];

export const nextStatus = {
  [NEW]: IN_PROGRESS,
  [IN_PROGRESS]: DONE,
  [DONE]: DONE
};
