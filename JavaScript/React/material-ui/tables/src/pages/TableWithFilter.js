import * as React from "react";
import { useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function BasicExampleDataGrid() {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 10,
  });

  useEffect(() => {
    // each time resourcetype changed
    console.log("first", data.columns[0]);
    data.rows = [{ id: "aa" }];
  }, []);

  console.log(data);
  console.log("cols", data.columns);
  console.log("rows", data.rows);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
    </div>
  );
}
