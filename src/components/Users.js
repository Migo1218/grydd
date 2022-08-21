import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Typography } from "@mui/material";

export default function Users() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        // Obtenemos los datos
        setRows(response.data);
        // dispatch(setlistProyectosADI(response.data))
      })
      .catch((e) => {
        // Capturamos los errores
      });
  };
  return (
    <>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>users</Typography>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Number Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.nombres}</TableCell>
                <TableCell>{row.apellidos}</TableCell>
                <TableCell>{row.empresa}</TableCell>
                <TableCell>{row.telefono}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                        color: "skyblue",
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
