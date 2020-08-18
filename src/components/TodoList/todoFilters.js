export const values = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED'
};

export const filters = {
  [values.COMPLETED]: it => !!it.completed
}
