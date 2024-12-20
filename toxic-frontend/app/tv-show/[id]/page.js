'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchTvShow } from '@/lib/themoviedb';
import ShowDetailed from '@/app/components/ShowDetailed/ShowDetailed';

export default function TvShow() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTvShow(id);
        setShow(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!show) {
    return <p>Loading</p>;
  }

  return (
    <>
      <ShowDetailed show={show} />
    </>
  );
}
