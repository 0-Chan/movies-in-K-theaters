import { Link } from 'react-router-dom';

import Dropdowns from './Dropdowns';

export default function Header() {
  return (
    <header>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg width="70" height="70" viewBox="0 0 100 100" className="ml-2 mt-2">
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
            <h1 className="text-2xl md:text-3xl font-bold mt-[52px] -ml-4 bg-gray-300 bg-clip-text text-transparent">
              K-Theater
            </h1>
          </Link>
        </div>

        <nav>
          <ol className="flex text-sm">
            <Link to="/about">
              <li className="mt-6 px-4 py-1.5 text-lg mx-3 sm:mx-4 my-5 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-500 font-medium">
                About
              </li>
            </Link>
            <div className="mt-6">
              <Dropdowns>
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
              </Dropdowns>
            </div>
          </ol>
        </nav>

      </div>
    </header>
  );
}
