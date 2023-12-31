"use client";

import TablePagination from "@mui/material/TablePagination";
import { useRouter } from "next/navigation";

interface Props {
  page: any;
  take: any;
  url: any;
  total: any;
  takeQuery?: string;
  pageQuery?: string;
}

export default function NextTablePagination({
  page,
  take,
  url,
  total,
  takeQuery = "take",
  pageQuery = "page",
}: Props) {
  const router = useRouter();

  const handleChangePage = (event: any, newPage: number) => {
    router.push(`${url}?${pageQuery}=${newPage}`);
  };

  const handleChangeRowsPerPage = (event: any) => {
    router.push(`${url}?${takeQuery}=${parseInt(event.target.value, 10)}`);
  };

  return (
    <>
      {total > 0 && (
        <TablePagination
          className="pagination"
          component="div"
          count={+total}
          dir="ltr"
          labelRowsPerPage={"تعداد آیتم ها"}
          page={+page}
          onPageChange={handleChangePage}
          rowsPerPage={+take}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </>
  );
}
