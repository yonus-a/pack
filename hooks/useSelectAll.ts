import { useState } from "react";

export default function useSelectAll(items: any) {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<any>([]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(items.map(({ id }: any) => id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleSelect = ({ target }: any) => {
    const { id, checked } = target;
    setIsCheck([...isCheck, +id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item: any) => item !== +id));
    }
  };

  return {
    isCheckAll,
    isCheck,
    handleSelect,
    handleSelectAll,
  };
}
