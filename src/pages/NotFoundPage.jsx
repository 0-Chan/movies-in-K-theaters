import notFoundImage from '../assets/images/404.jpeg';

export default function NotFoundPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div>
        <img
          src={notFoundImage}
          alt="404 not found"
        />
      </div>
      <div className="text-2xl">
        404 Not Found
      </div>
    </div>
  );
}
