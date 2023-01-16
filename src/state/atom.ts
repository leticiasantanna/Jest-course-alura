import { atom } from "recoil";

export const participantsListState = atom<String[]>({
  key: "participantsListState",
  default: [],
});
