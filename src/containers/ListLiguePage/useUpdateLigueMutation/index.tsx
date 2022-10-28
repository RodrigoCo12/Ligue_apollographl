import { useMutation } from '@apollo/client';

import { UPDATE_LIGUE_MUTATION } from './UPDATE_LIGUE_MUTATION';

export const useUpdateLigueMutation = () => {
  const [updateLigue, error] = useMutation(UPDATE_LIGUE_MUTATION);
  return { updateLigue, err: error };
};
