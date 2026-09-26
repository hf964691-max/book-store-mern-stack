import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-8 md:px-8'>
      <div className='mx-auto max-w-3xl'>
        <BackButton />

        <div className='glass-panel overflow-hidden'>
          <div className='border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-8'>
            <h1 className='text-3xl font-bold text-slate-900'>Book Details</h1>
          </div>

          <div className='p-6 md:p-8'>
            {loading ? (
              <Spinner />
            ) : (
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>ID</p>
                  <p className='mt-2 break-all text-slate-800'>{book._id}</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Title</p>
                  <p className='mt-2 text-slate-800'>{book.title}</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Author</p>
                  <p className='mt-2 text-slate-800'>{book.author}</p>
                </div>

                <div className='rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Publish Year</p>
                  <p className='mt-2 text-slate-800'>{book.publishYear}</p>
                </div>

                <div className='md:col-span-2 rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Created At</p>
                  <p className='mt-2 text-slate-800'>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</p>
                </div>

                <div className='md:col-span-2 rounded-2xl bg-slate-50 p-4'>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Last Updated</p>
                  <p className='mt-2 text-slate-800'>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;