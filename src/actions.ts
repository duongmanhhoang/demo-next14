"use server";

export const fetchUsers = async () => {
  const res = await fetch("https://5e942ac1c7393c0016de4ed4.mockapi.io/users");

  return res.json();
};
