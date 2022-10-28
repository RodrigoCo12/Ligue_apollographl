import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useGetLiguesQuery } from '../ListLiguePage/useGetLiguesQuery';
import styles from './styles.module.scss';
import { useAddLigueMutation } from './useAddLigueMutation';

export const LigueFormPage: NextPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { saveLigue, loading, error } = useAddLigueMutation();
  const { refetch } = useGetLiguesQuery();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await saveLigue({ variables: { title, description } });
      await refetch();
      router.push('/ligue/list');
    } catch (e) {
      console.error(e);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.root}>
      <Link href="/ligue/list">
        <a>
          <button className={styles.button}>List</button>
        </a>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" required placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <button disabled={loading} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
