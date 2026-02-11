"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AddCollectionContextType = {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  titleValue: string;
  setTitleValue: Dispatch<SetStateAction<string>>;
  handleSelect: (value: string) => void;
  handleChange: (value: string) => void;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  canCreate: boolean;
  setCanCreate: Dispatch<SetStateAction<boolean>>;
};

export const AddCollectionContext =
  createContext<AddCollectionContextType | null>(null);

type ChildrenProps = {
  children: ReactNode;
};

export default function AddCollectionProvider({ children }: ChildrenProps) {
  const [selectValue, setSelectValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [canCreate, setCanCreate] = useState(false);

  const handleSelect = (selection: string) => {
    setSelectValue(selection);
  };

  const handleChange = (value: string) => {
    setTitleValue(value);
  };

  return (
    <AddCollectionContext.Provider
      value={{
        selectValue,
        setSelectValue,
        titleValue,
        setTitleValue,
        handleSelect,
        handleChange,
        errorMessage,
        setErrorMessage,
        canCreate,
        setCanCreate,
      }}
    >
      {children}
    </AddCollectionContext.Provider>
  );
}
