import { createContext, ReactNode, useState } from "react";

type MembersType = {
  user_id: string;
  can_edit: boolean;
};

type ValueType = {
  _id: string;
  title: string;
  type: string;
  owner_id: string;
  members: MembersType[];
  is_public: boolean;
};

type ItemHeaderContextType = {
  collection: ValueType | null;
  handleClick: (value: ValueType) => void;
};

export const ItemHeaderContext = createContext<ItemHeaderContextType | null>(
  null,
);

type childrenProps = {
  children: ReactNode;
};

export default function ItemHeaderProvider({ children }: childrenProps) {
  const [collection, setCollection] = useState<ValueType | null>(null);

  const handleClick = (value: ValueType) => {
    console.log("click : ", value);
    setCollection(value);
  };
  return (
    <ItemHeaderContext.Provider value={{ collection, handleClick }}>
      {children}
    </ItemHeaderContext.Provider>
  );
}
