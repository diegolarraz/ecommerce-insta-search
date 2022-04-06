import { ListContext } from "../contexts/ListContext";
import { useContext } from "react";

export const useList = () => {
  return useContext(ListContext);
};