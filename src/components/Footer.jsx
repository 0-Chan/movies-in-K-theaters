import { GitHub, FileText } from 'react-feather';

export default function Footer() {
  return (
    <footer>
      <div className="wrapper flex border-solid border-t-2 border-gray-600 justify-between items-center text-black py-2">
        <div className="text-gray-800 text-2xl ml-4">© 2022 0-Chan.</div>
        <div className="flex justify-end space-x-1 py-2 mr-4">
          <a href="https://github.com/0-chan/" target="_blank" rel="noreferrer">
            <GitHub
              className="p-2 hover:text-purple-500 transition duration-500 text-gray-700"
              size="46px"
            />
          </a>
          <a href="https://www.0-chan.com" target="_blank" rel="noreferrer">
            <FileText
              className="p-2 hover:text-purple-500 transition duration-500 text-gray-700"
              size="46px"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
