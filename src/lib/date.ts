const uzMonths = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
const ruMonths = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (locale === 'uz') return `${day}-${uzMonths[month]}, ${year}`;
  if (locale === 'ru') return `${day} ${ruMonths[month]} ${year}`;
  return `${enMonths[month]} ${day}, ${year}`;
}
