export const isValidEmail = (email: string): boolean => {
  const regEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!email) return false;
  return regEmail.test(email);
};
