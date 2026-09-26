import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border-separate border-spacing-y-2'>
        <thead>
          <tr>
            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>No</th>
            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Title</th>
            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 max-md:hidden'>Author</th>
            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 max-md:hidden'>Publish Year</th>
            <th className='px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className='rounded-xl bg-slate-50 shadow-sm'>
              <td className='rounded-l-xl border border-slate-200 px-4 py-3 text-slate-700'>{index + 1}</td>
              <td className='border border-slate-200 px-4 py-3 font-medium text-slate-800'>{book.title}</td>
              <td className='border border-slate-200 px-4 py-3 text-slate-600 max-md:hidden'>{book.author}</td>
              <td className='border border-slate-200 px-4 py-3 text-slate-600 max-md:hidden'>{book.publishYear}</td>
              <td className='rounded-r-xl border border-slate-200 px-4 py-3'>
                <div className='flex items-center gap-3'>
                  <Link to={`/books/details/${book._id}`} className='rounded-lg bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100'>
                    <BsInfoCircle className='text-lg' />
                  </Link>
                  <Link to={`/books/edit/${book._id}`} className='rounded-lg bg-amber-50 p-2 text-amber-700 transition hover:bg-amber-100'>
                    <AiOutlineEdit className='text-lg' />
                  </Link>
                  <Link to={`/books/delete/${book._id}`} className='rounded-lg bg-rose-50 p-2 text-rose-700 transition hover:bg-rose-100'>
                    <MdOutlineDelete className='text-lg' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
