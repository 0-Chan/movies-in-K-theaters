import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header role="banner">
        <Link to="/">
          <svg>
            <rect width="480" height="240" fill="#3d87fb" />
          </svg>
        </Link>
      </header>
      <nav role="navigation">
        헤더
      </nav>
    </>
  );
}
