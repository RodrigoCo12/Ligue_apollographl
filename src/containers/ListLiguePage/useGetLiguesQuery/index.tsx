import { useQuery } from '@apollo/client';
import { GET_LIGUES_QUERY } from './GET_LIGUES_QUERY';

export const useGetLiguesQuery = () => {
  const { data, loading, error, refetch } = useQuery(GET_LIGUES_QUERY);
  const ligues = data?.getLigues || [];
  return { ligues, loading, error, refetch };
};
