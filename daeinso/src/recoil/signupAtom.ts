import { atom } from "recoil";

export const signupEmailAtom = atom<string>({
  key: "singupEmailAtom",
  default: "",
});

export const signupPasswordAtom = atom<string>({
  key: "singupPasswordAtom",
  default: "",
});

export const signupNameAtom = atom<string>({
  key: "singupNameAtom",
  default: "",
});

export const signupAgeAtom = atom<number>({
  key: "singupAgeAtom",
  default: 0,
});

export const signupStackAtom = atom<string>({
  key: "singupStackAtom",
  default: "",
});
