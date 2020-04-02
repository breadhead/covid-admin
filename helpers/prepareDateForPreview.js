export const prepareDateForPreview = dateString => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString().replace(/\//g, '.');
};
