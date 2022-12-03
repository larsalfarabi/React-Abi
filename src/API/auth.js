import clientLogin, {syncToken} from "./baseUrl";
// import axios from "./baseUrl";

export async function loginProses(payload) {
  return clientLogin.post(`/login`, payload)
}
export async function registerProses(payload) {
  return clientLogin.post(`/register`, payload);
}

export function authMeProcess() {
  syncToken();
  return clientLogin.get("/authme");
}
