import UserListItem from "./ListItem";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/router";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "First name",
    width: 150,
  },
  {
    field: "username",
    headerName: "Username",
  },
  {
    field: "phone",
    headerName: "Phone",
  },
  {
    field: "website",
    headerName: "Website",
  },
];

const UserList = ({ list }) => {
  const router = useRouter();
  return (
    <DataGrid
      onRowClick={(row) => router.push(`/users/${row.id}`)}
      autoHeight
      rows={list}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default UserList;
