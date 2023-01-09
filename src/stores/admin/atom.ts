import { atom } from "recoil"; 
import { adminType } from "../../types/admin";

const initialState = {
  admin: {
    id: '',
    email: ``,
    password: ``,
  } as adminType
}

export const adminState = atom({
  key: "adminState",
  default: initialState
})