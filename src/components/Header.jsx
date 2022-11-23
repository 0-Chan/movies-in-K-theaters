import { Link } from 'react-router-dom';

import Dropdowns from './Dropdowns';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-2 h-16">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-black no-underline tracking-wider font-mono text-sm sm:text-base">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <polygon
              points="20,25 80,25 70,95 30,95"
              fill="#ff4122"
            />
            <path
              d="M 20 25 Q 5 5 20 10 Q 25 0 30 10 Q 40 3 40 15 C 60 0 60 20 55 15 C 70 0 70 30 65 15 A 6 5 0 1 1 80 26"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="6"
            />
          </svg>
          Movies-in-k-theater
        </Link>
      </div>

      <nav className="flex items-center">
        <Link to="/about" className="p-2 text-indigo-200 bg-indigo-500 rounded hover:text-indigo-100">About</Link>
        <span className="px-2">｜</span>
        <div>
          <Dropdowns>
            <ul className="absolute bg-white py-1 text-sm text-gray-700 text-center">
              <li>
                <a href="http://www.cgv.co.kr/ticket/" target="_blank" rel="noreferrer" className="block py-2 px-4 hover:bg-gray-100">CGV</a>
              </li>
              <li>
                <a href="https://www.lottecinema.co.kr/NLCHS/Ticketing" target="blank" rel="noreferrer" className="block py-2 px-4 hover:bg-gray-100 ">롯데시네마</a>
              </li>
              <li>
                <a href="https://www.megabox.co.kr/booking" target="blank" rel="noreferrer" className="block py-2 px-4 hover:bg-gray-100 ">메가박스</a>
              </li>
            </ul>
          </Dropdowns>
        </div>
      </nav>
    </header>
  );
}
