import { useState, useEffect, useRef } from 'react';

export default function Dropdowns() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [btnRef]);

  return (
    <>
      <button data-testid="dropdown-button" ref={btnRef} type="button" onClick={() => setOpen(!open)} className={`text-white bg-blue-600 hover:bg-blue-700 transition duration-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ${open ? 'bg-blue-700' : ''}`}>
        예매하러 가기
        <svg className="w-4 h-4 ml-1 mt-0.5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div data-testid="dropdown-content" className="block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
        {open
        && (
        <ul className="ml-8 absolute bg-blue-500 py-1 text-sm text-gray-100 text-center z-10 rounded-b-md">
          <li>
            <a href="http://www.cgv.co.kr/ticket/" target="blank" rel="noreferrer" className="block py-2 px-4 font-black hover:underline">CGV</a>
          </li>
          <li>
            <a href="https://www.lottecinema.co.kr/NLCHS/Ticketing" target="blank" rel="noreferrer" className="block py-2 px-4 font-thin hover:underline">롯데시네마</a>
          </li>
          <li>
            <a href="https://www.megabox.co.kr/booking" target="blank" rel="noreferrer" className="block py-2 px-4 font-thin hover:underline">메가박스</a>
          </li>
        </ul>
        )}
      </div>
    </>
  );
}
