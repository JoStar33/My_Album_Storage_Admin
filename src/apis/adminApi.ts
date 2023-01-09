import { customAxios } from "./axios/customAxios";

const login = async (email: string, password: string) => 
await customAxios.post('/admin/login', {
  email: email,
  password: password
})

const logout = () => {
  return customAxios.get('/admin/logout')
};

export { login, logout }; 