import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { ToWords } from 'to-words';
import isDate from 'date-fns/isDate';

const myNewDate = data => {
  let mydate = data.split('.');
  return ` ${mydate[0]}/${mydate[1]}/${mydate[2]}`;
};

export default function distanceBetweenDateAndNowWords(birthdate) {
  const toWords = new ToWords();

  const pattern =
    /^((0?[1-9]|1[012])[.](0?[1-9]|[12][0-9]|3[01])[.](19|20)?[0-9]{2})*$/;
  let result = birthdate.match(pattern);
  const newNewDate = myNewDate(birthdate);

  if (isDate(new Date(newNewDate)) && !!result) {
    const ageArr = formatDistanceStrict(
      Date.now(),
      Date.parse(newNewDate)
    ).split(' ');
    return [toWords.convert(ageArr[0]), ageArr[1]].join(' ');
  }
  return '';
}
