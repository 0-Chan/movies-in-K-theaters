export default async function fetchBoxoffice({ targetDate }) {
  const API_KEY = process.env.KOBIS_API_KEY;
  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    + `key=${API_KEY}&targetDt=${targetDate}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
