import httpService from "./httpService";

const tokenKey = "token";

export function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", tokenKey);
}

export async function createUser(user) {
  return await httpService.post("/createUser", user);
}

export async function login(user) {
  const { data } = await httpService.post("/login", user);
  localStorage.setItem(tokenKey, data.token);
  setTokenHeader();
  return;
}
