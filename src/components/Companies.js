
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { Typography } from "@mui/material";
const Companies = () => {

    const [rows, setRows] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost:4000/api/companies")
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
    <div>
        <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>Companies</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>NIT</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>email</TableCell>
            <TableCell>nombreEmpresa</TableCell>
            <TableCell>pais</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.NIT}</TableCell>
                <TableCell>{row.Dirección}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.nombreEmpresa}</TableCell>
                <TableCell>{row.pais}</TableCell>
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
    </div>
  )
}

export default Companies