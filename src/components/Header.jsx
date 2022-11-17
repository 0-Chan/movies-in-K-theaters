import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-indigo-700 p-1 flex justify-between items-center">
      <header
        className="flex items-center"
        role="banner"
      >
        <Link to="/">
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
        </Link>
        <h1 className="text-white text-2xl">
          Movies-in-k-theater
        </h1>
      </header>
      <nav role="navigation" className="block">
        <Link to="/" className="p-2 text-indigo-200 bg-indigo-500 rounded hover:text-indigo-100 mr-2">Home</Link>
        <Link to="/about" className="p-2 text-indigo-200 bg-indigo-500 rounded hover:text-indigo-100">About</Link>
      </nav>
    </div>
  );
}
