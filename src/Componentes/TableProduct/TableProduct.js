import { Stars } from "Componentes/Stars/Stars";
import React from "react";
import { Table } from "rsuite";
import * as XLSX from "xlsx";

export function TableProduct({ data }) {
  const { Column, HeaderCell, Cell } = Table;
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, "Listado de Productos.xlsx");
  };

  return (
    <>
      <Table
        height={400}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>SKU</HeaderCell>
          <Cell dataKey="SKU_seller" />
        </Column>

        <Column  resizable width={150}>
          <HeaderCell>Categoría</HeaderCell>
          <Cell dataKey="categoria" />
        </Column>

        <Column width={150}>
          <HeaderCell>Marca Producto.</HeaderCell>
          <Cell dataKey="marca" />
        </Column>

        <Column width={100}>
          <HeaderCell>Genero</HeaderCell>
          <Cell dataKey="imagen1" />
        </Column>

        <Column width={100}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={150}>
          <HeaderCell>Postcode</HeaderCell>
          <Cell dataKey="postcode" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column width={80} fixed="right">
          <HeaderCell>...</HeaderCell>
          <Cell>
            {(rowData) => (
              <span>
                <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
              </span>
            )}
          </Cell>
        </Column>
        <Column width={100} fixed="right">
          <HeaderCell>Estrellas</HeaderCell>

          <Cell>
            {(rowData) => (
              <Stars stars={rowData.stars} />
            )}
          </Cell>
        </Column>
      </Table>

      <button
        onClick={() => {
          downloadExcel(data);
        }}
      >
        Descargar Excel
      </button>
    </>
  );
}
