import { atom } from "recoil"; 
import { recoilPersist } from "recoil-persist";
import { adminType } from "../types/admin";
import { adminAlbumType } from "../types/adminAlbum";

const { persistAtom } = recoilPersist();

const initialAdminState = {
  admin: {
    id: '',
    email: ``,
    password: ``,
  } as adminType
}

const initalAdminAlbumState = {
  adminAlbum: [] as adminAlbumType[]
}

export const adminState = atom<adminType>({
  key: "adminState",
  default: initialAdminState.admin,
  effects_UNSTABLE: [persistAtom],
})

export const adminAlbumState = atom<adminAlbumType[]>({
  key: "adminAlbumState",
  default: initalAdminAlbumState.adminAlbum,
  effects_UNSTABLE: [persistAtom],
})