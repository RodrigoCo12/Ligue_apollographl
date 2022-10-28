import Link from 'next/link';
import { useState } from 'react';

import styles from './styles.module.scss';
import { useDeleteLigueMutation } from './useDeleteLigue';
import { useGetLiguesQuery } from './useGetLiguesQuery';
import { useUpdateLigueMutation } from './useUpdateLigueMutation';

export const ListLiguePage = () => {
  const { ligues, loading, error, refetch } = useGetLiguesQuery();
  const [_id, set_id] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { updateLigue, err } = useUpdateLigueMutation();
  const { deleteLigue } = useDeleteLigueMutation();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelect = (ligue: any) => {
    setTitle(ligue.title);
    setDescription(ligue.description);
    set_id(ligue._id);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await updateLigue({ variables: { _id, title, description } });
      await refetch();
      set_id('');
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      await deleteLigue({ variables: { _id } });
      await refetch();
      set_id('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {_id && (
        <>
          <div className={styles.popUp}>
            <button className={styles.close} onClick={() => set_id('')}>
              x
            </button>
            <form onSubmit={handleSubmit}>
              <p>id: {_id}</p>
              <input
                type="text"
                defaultValue={title}
                required
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                defaultValue={description}
                required
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className={styles.buttons}>
                <button disabled={loading} type="submit">
                  Save
                </button>
                <button disabled={loading} onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>

          <div className={styles.overlay} />
        </>
      )}
      <div className={styles.root}>
        <div className={styles.header}>
          <h1 className={styles.titleText}>Ligues</h1>
          <Link href="/ligue/form">
            <a>
              <button className={styles.button}>New</button>
            </a>
          </Link>
        </div>

        <ul className={styles.list}>
          {ligues.map((ligue: any) => (
            <button key={ligue.title} onClick={() => handleSelect(ligue)}>
              <li className={styles.card} key={ligue.title}>
                <p className={styles.cardTitle}>{ligue.title}</p>
                <p className={styles.cardDescription}>{ligue.description}</p>
              </li>
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};
