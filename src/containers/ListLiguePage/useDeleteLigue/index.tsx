import { useMutation } from '@apollo/client';

import { DELETE_LIGUE_MUTATION } from './DELETE_LIGUE_MUTATION';

export const useDeleteLigueMutation = () => {
  const [deleteLigue] = useMutation(DELETE_LIGUE_MUTATION);
  return { deleteLigue };
};
