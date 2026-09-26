import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksCard = ({ books }) => {
  return (
    <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
      {books.map((book) => (
        <div key={book._id} className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
          <div className='mb-4 flex items-center justify-between'>
            <span className='inline-flex rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700'>Book</span>
            <span className='text-xs text-slate-500'>#{book.publishYear}</span>
          </div>

          <div className='space-y-3'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Title</p>
              <p className='mt-1 text-lg font-semibold text-slate-800'>{book.title}</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Author</p>
              <p className='mt-1 text-slate-700'>{book.author}</p>
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Publish Year</p>
              <p className='mt-1 text-slate-700'>{book.publishYear}</p>
            </div>
          </div>

          <div className='mt-5 flex items-center justify-end gap-3'>
            <Link to={`/books/details/${book._id}`} className='rounded-lg bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100'>
              <BsInfoCircle className='text-xl' />
            </Link>
            <Link to={`/books/edit/${book._id}`} className='rounded-lg bg-amber-50 p-2 text-amber-700 transition hover:bg-amber-100'>
              <AiOutlineEdit className='text-xl' />
            </Link>
            <Link to={`/books/delete/${book._id}`} className='rounded-lg bg-rose-50 p-2 text-rose-700 transition hover:bg-rose-100'>
              <MdOutlineDelete className='text-xl' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
