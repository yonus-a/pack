import { NestedMenuItem } from "mui-nested-menu";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./styles.scss";

const RecursiveComponent = ({ open, data }: any) => {
  return (
    <>
      {data.map((item: any) => (
        <>
          {item.other_product_category &&
          item.other_product_category.length > 0 ? (
            <NestedMenuItem
              key={item.id}
              label={item.name}
              parentMenuOpen={open}
            >
              <RecursiveComponent
                data={item.other_product_category}
                open={open}
              />
            </NestedMenuItem>
          ) : (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          )}
        </>
      ))}
    </>
  );
};

export default function RecursiveSelect({ data }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    return setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Select
      className="recussive-select"
      onClose={handleClose}
      onOpen={handleClick}
      open={open}
    >
      <RecursiveComponent data={data} open={open} />
    </Select>
  );
}
