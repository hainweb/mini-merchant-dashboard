export const setUserEmail = (email) => {
  localStorage.setItem("userEmail", email);
};

export const getUserEmail = () => {
  return localStorage.getItem("userEmail");
};

export const removeUserEmail = () => {
  localStorage.removeItem("userEmail");
};
