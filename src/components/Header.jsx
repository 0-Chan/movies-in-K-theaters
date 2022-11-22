import { Link } from 'react-router-dom';

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
      <nav role="navigation" className="flex items-center">
        <Link to="/about" className="p-2 text-indigo-200 bg-indigo-500 rounded hover:text-indigo-100">About</Link>
        <span className="px-2">｜</span>
        <div className="border-2 border-black rounded">
          <select className="border-r-2 border-black">
            <option selected disabled defaultValue>예매 하러가기</option>
            <option value="http://www.cgv.co.kr/ticket/">CGV</option>
            <option value="https://www.lottecinema.co.kr/NLCHS/Ticketing">롯데시네마</option>
            <option value="https://www.megabox.co.kr/booking">메가박스</option>
          </select>
          <svg height="16" viewBox="0 0 24 24" className="inline-block mx-1">
            <path fill="none" d="M0 0h24v24H0z" />
            <path fillRule="evenodd" d="M18 20H4V6h10V4H2v18h18V10h-2v10z" />
            <path fillRule="evenodd" d="M16 0v2h4.59L9.29 13.29l1.42 1.42L22 3.41V8h2V0h-8z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
