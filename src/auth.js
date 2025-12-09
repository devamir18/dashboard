export function login(userData) {
  
  const users = JSON.parse(localStorage.getItem("users")) || [];

  
  const userExists = users.some((u) => u.staff === userData.staff);
  if (userExists) {
    throw new Error("User with this staff already exists");
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  
  localStorage.setItem("currentUser", JSON.stringify(userData));

  return userData;
}


export function login(staff,password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.staff === staff && u.password === password
  );

  if (!user) {
    throw new Error("Invalid staff or password");
  }


  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
}


export function logout() {
  localStorage.removeItem("currentUser");
}


export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}
