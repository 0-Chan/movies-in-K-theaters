import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header role="banner">
        <Link to="/">
          <svg>
            <polygon
              points="10,25 90,25 80,120 20,120"
              fill="#ff4122"
            />
            <path
              d="M 15 25 Q 5 5 20 10 Q 25 0 30 10 Q 40 3 40 15 C 60 0 60 20 55 15 C 70 0 70 30 65 15 A 6 5 0 1 1 85 25"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="6"
            />
          </svg>
        </Link>
      </header>
      <nav role="navigation">
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}
