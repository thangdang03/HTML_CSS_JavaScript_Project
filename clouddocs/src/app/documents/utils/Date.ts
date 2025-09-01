const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${months[date.getMonth()]}, ${date.getDate()}, ${date.getFullYear().toString().slice(-2)}`;
}

export {
    formatDate
}