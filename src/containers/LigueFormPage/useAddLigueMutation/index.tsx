import { useMutation } from '@apollo/client';
import { ADD_LIGUE_MUTATION } from './ADD_LIGUE_MUTATION';

export const useAddLigueMutation = () => {
  const [saveLigue, { loading, error }] = useMutation(ADD_LIGUE_MUTATION);
  return { saveLigue, loading, error };
};
