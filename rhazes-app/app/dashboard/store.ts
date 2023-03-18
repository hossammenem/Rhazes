import { atom } from "jotai";
import { matchType } from "../components/Schedule";

export const initMatch = {
  ourRes: "",
  OppRes: "",
  date: "",
  tournament: "",
  matchType: "Bo1" as matchType,
  OppName: "",
  OppLogo: "",
};

export const matchAtom = atom(initMatch);
