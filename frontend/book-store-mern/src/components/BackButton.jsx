import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = () => {
  return (
    <div className='mb-6'>
      <Link
        to='/'
        className='inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50'
      >
        <BsArrowLeft className='text-base' />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
