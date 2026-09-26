import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='min-h-screen bg-slate-100 px-4 py-8 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-6xl'>
        <div className='glass-panel overflow-hidden'>
          <div className='border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-8'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <p className='text-sm font-medium uppercase tracking-[0.2em] text-sky-600'>Library</p>
                <h1 className='mt-1 text-3xl font-bold text-slate-900 md:text-4xl'>Books List</h1>
              </div>

              <div className='flex items-center gap-3'>
                <div className='inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm'>
                  <button
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      showType === 'table' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    onClick={() => setShowType('table')}
                  >
                    Table
                  </button>
                  <button
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                      showType === 'card' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                    onClick={() => setShowType('card')}
                  >
                    Card
                  </button>
                </div>

                <Link to='/books/create' className='primary-btn gap-2'>
                  <MdOutlineAddBox className='text-xl' />
                  Add Book
                </Link>
              </div>
            </div>
          </div>

          <div className='p-6 md:p-8'>
            {loading ? (
              <Spinner />
            ) : showType === 'table' ? (
              <BooksTable books={books} />
            ) : (
              <BooksCard books={books} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;