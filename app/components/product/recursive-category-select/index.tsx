import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function RecursiveComponent({ data }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    return setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Select open={open} onOpen={handleClick} onClose={handleClose}>
      <MenuItem value={data.id}>{data.name}</MenuItem>
      {data.map((item: any) => (
        <NestedMenuItem key={item.id} label={item.name} parentMenuOpen={open}>
          {item.other_product_category &&
            item.other_product_category.length > 0 && (
              <RecursiveComponent data={item.other_product_category} />
            )}
        </NestedMenuItem>
      ))}
    </Select>
  );
}
