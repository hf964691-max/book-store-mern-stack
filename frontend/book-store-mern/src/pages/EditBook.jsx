import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    if (!title || !author || !publishYear) {
      enqueueSnackbar('Please fill in all fields', { variant: 'warning' });
      return;
    }

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error updating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-8 md:px-8'>
      <div className='mx-auto max-w-3xl'>
        <BackButton />

        <div className='glass-panel overflow-hidden'>
          <div className='border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-8'>
            <h1 className='text-3xl font-bold text-slate-900'>Edit Book</h1>
          </div>

          <div className='p-6 md:p-8'>
            {loading ? (
              <Spinner />
            ) : (
              <div className='space-y-5'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>Title</label>
                  <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='field-input'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>Author</label>
                  <input
                    type='text'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className='field-input'
                  />
                </div>

                <div>
                  <label className='mb-2 block text-sm font-medium text-slate-700'>Publish Year</label>
                  <input
                    type='number'
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    className='field-input'
                  />
                </div>

                <button className='primary-btn w-full' onClick={handleEditBook}>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook