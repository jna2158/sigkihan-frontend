export const clearStorageAndRedirect = () => {
  localStorage.clear();
  window.location.href = "/";
};
