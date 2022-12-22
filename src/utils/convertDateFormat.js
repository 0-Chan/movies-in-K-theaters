/* eslint-disable import/prefer-default-export */
export function convertDateFormat(date) {
  const YYYY = date.getFullYear().toString();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');

  return YYYY + MM + DD;
}
