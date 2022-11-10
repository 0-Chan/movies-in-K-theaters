import {
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialList } from './store/actions';

import Header from './components/Header';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import DetailsPage from './pages/DetailsPage';

import { convertDateFormat } from './utils';

export default function App() {
  const dispatch = useDispatch();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayInString = convertDateFormat(yesterday);

  useEffect(() => {
    dispatch(loadInitialList(yesterdayInString));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/boxoffice/:rank" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
