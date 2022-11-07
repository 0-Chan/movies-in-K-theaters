import {
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialList } from './store/actions';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  const targetDate = YYYY + MM + DD;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialList(targetDate));
  }, []);

  return (
    <>
      <Header />
      Hello, React!
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
