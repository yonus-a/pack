import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

function RecursiveComponent({ data, open }: any) {
  return (
    <>
      <MenuItem value={data.id}>{data.name}</MenuItem>
      {data.map((item: any) => (
        <NestedMenuItem key={item.id} label={item.name} parentMenuOpen={open}>
          {item.other_product_category &&
            item.other_product_category.length && (
              <RecursiveComponent data={item.other_product_category} />
            )}
        </NestedMenuItem>
      ))}
    </>
  );
}

export default function RecursiveSelect({ data }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log(data);

  const handleClick = (event: any) => {
    return setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Select open={open} onOpen={handleClick} onClose={handleClose}>
      <RecursiveComponent data={data} open={open} />
    </Select>
  );
}
