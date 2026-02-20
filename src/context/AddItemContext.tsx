import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type AddItemContextType = {
  visualContent: File[];
  setVisualContent: Dispatch<SetStateAction<File[]>>;
  titleValue: string;
  setTitleValue: Dispatch<SetStateAction<string>>;
  authorValue: string;
  setAuthorValue: Dispatch<SetStateAction<string>>;
  collectionValue: string;
  setCollectionValue: Dispatch<SetStateAction<string>>;
  statusValue: string;
  setStatusValue: Dispatch<SetStateAction<string>>;
  tomeValue: string;
  setTomeValue: Dispatch<SetStateAction<string>>;
  genreValue: string;
  setGenreValue: Dispatch<SetStateAction<string>>;
  noteValue: string;
  setNoteValue: Dispatch<SetStateAction<string>>;
  handleCollection: (value: string) => void;
  handleStatus: (value: string) => void;
  handleGenre: (value: string) => void;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

export const AddItemContext = createContext<AddItemContextType | null>(null);

type ChildrenProps = {
  children: ReactNode;
};

export default function AddItemProvider({ children }: ChildrenProps) {
  const [visualContent, setVisualContent] = useState<File[]>([]);
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [collectionValue, setCollectionValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [tomeValue, setTomeValue] = useState("");
  const [genreValue, setGenreValue] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCollection = (selection: string) => {
    setCollectionValue(selection);
    console.log("handleCollection : ", selection);
  };
  const handleStatus = (selection: string) => {
    setStatusValue(selection);
    console.log("handleStatus :", selection);
  };
  const handleGenre = (selection: string) => {
    setGenreValue(selection);
  };

  return (
    <AddItemContext.Provider
      value={{
        visualContent,
        setVisualContent,
        titleValue,
        setTitleValue,
        authorValue,
        setAuthorValue,
        collectionValue,
        setCollectionValue,
        statusValue,
        setStatusValue,
        tomeValue,
        setTomeValue,
        genreValue,
        setGenreValue,
        noteValue,
        setNoteValue,
        handleCollection,
        handleStatus,
        handleGenre,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AddItemContext.Provider>
  );
}
