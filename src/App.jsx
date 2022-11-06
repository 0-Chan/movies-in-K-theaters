import { useEffect } from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadInitialList } from './store/actions';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialList());
  });
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
