export default async function fetchDailyBoxOffice() {
  const API_KEY = process.env.KOBIS_API_KEY;

  const date = new Date();
  date.setDate(date.getDate() - 1);
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  const targetDate = YYYY + MM + DD;

  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    + `key=${API_KEY}&targetDt=${targetDate}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.boxOfficeResult.dailyBoxOfficeList;
}
