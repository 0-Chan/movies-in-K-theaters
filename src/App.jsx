import Header from './components/Header';

import fetchBoxoffice from './services/api';

export default function App() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  const targetDate = YYYY + MM + DD;

  const boxoffice = fetchBoxoffice({ targetDate });
  console.log('🚀 | boxoffice', boxoffice);
  return (
    <>
      <Header />
      Hello, React!
    </>
  );
}
