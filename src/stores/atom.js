import { atom } from "recoil";

export const trendDataState = atom({
  key: "trendDataState", // Unique ID
  default: { keywords: "", startDate: "", endDate: "" }, // Default state
});

export const instaDataState = atom({
  key: "instaDataState", // Unique ID
  default: { keywords: "" },
});
