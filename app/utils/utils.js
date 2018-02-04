export const newUrl = (url) => {
  const stringParam = '_220x220_1';
  return url.replace(/(.+)(\.(jpg|png|tif))/i, '$1' + stringParam + '$2')
};