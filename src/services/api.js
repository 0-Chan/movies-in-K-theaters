export default async function fetchDailyBoxOffice(targetDate) {
  const API_KEY = process.env.KOBIS_API_KEY;

  const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
  + `key=${API_KEY}&targetDt=${targetDate}`;
  console.log('🚀 | url', url);
  const response = await fetch(url);
  const data = await response.json();
  console.log('🚀 | data', data);

  return data.boxOfficeResult.dailyBoxOfficeList;
}
