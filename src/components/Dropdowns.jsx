import { useState, useEffect, useRef } from 'react';

export default function Dropdowns({ children }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdowns = (e) => {
      if (e.path[0] !== btnRef.current) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropdowns);

    return () => document.body.removeEventListener('click', closeDropdowns);
  }, []);

  return (
    <>
      <button ref={btnRef} type="button" onClick={() => setOpen(!open)} className={`text-white bg-blue-600 hover:bg-blue-700 transition duration-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ${open ? 'bg-blue-700' : ''}`}>
        예매하러 가기
        <svg className="w-4 h-4 ml-1 mt-0.5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
        {open && children }
      </div>
    </>
  );
}
