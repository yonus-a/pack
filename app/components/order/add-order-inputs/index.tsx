"use client";

import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { TextField } from "@mui/material";
import "./styles.scss";

interface Props {
  monthlyBudget: any;
  item: any;
  idx: any;
  stock: any;
}

export default function AddOrderInput({
  item,
  idx,
  monthlyBudget,
  stock,
}: Props) {
  return (
    <Tr>
      <Td>{idx + 1}</Td>
      <Td>{item.id}</Td>
      <Td>{item.name}</Td>
      <Td>{monthlyBudget}</Td>
      <Td>{(monthlyBudget / 24).toFixed(2)}</Td>
      <Td>{stock.amount}</Td>
      <Td>{item.weight}</Td>
      <Td>
        {/* <TextField type="number" onChange={() => handleFactorChange(item.id)} /> */}
      </Td>
      <Td>{item.product_unit.name}</Td>
      <Td>0</Td>
      <Td>0</Td>
      <Td>0</Td>
    </Tr>
  );
}
