import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-8 md:px-8'>
      <div className='mx-auto max-w-2xl'>
        <BackButton />

        <div className='glass-panel overflow-hidden'>
          <div className='border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-8'>
            <h1 className='text-3xl font-bold text-slate-900'>Delete Book</h1>
          </div>

          <div className='p-6 md:p-8'>
            {loading ? (
              <Spinner />
            ) : (
              <div className='space-y-6 text-center'>
                <div className='rounded-2xl bg-rose-50 p-5 text-rose-700'>
                  <h3 className='text-xl font-semibold'>Are you sure you want to delete this book?</h3>
                </div>

                <button
                  className='primary-btn w-full bg-rose-600 hover:bg-rose-700 hover:shadow-rose-200'
                  onClick={handleDeleteBook}
                >
                  Yes, Delete it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;