import { useUsuarioList } from "@/services/UsuarioService";
import { Pagination } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export function UsuariosTablePagination() {
  const { data } = useUsuarioList();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function changePage(page?: number) {
    const params = new URLSearchParams(searchParams);
    if (page) {
      params.set("page", (page - 1).toString());
      console.log(params.toString());
    } else {
      params.set("page", "0");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Pagination
      className="mt-5"
      shape="rounded"
      color="primary"
      page={Number(searchParams.get("page")) + 1}
      onChange={(e, page) => changePage(page)}
      count={data?.data.totalPages}
    />
  );
}
