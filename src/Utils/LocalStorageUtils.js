export const getAllUsersFromStorage = () => {
  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  return users;
};

export const saveAllUpdatedUser = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};
