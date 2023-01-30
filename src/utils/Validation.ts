export const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && emailRegex.test(email)) {
    return true;
  }
  return false;
};

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (password !== "" && passwordRegex.test(password)) {
    return true;
  }
  return false;
};
