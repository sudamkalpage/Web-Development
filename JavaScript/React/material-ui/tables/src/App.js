import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DataTable from "./pages/DataTable";
import DenseTable from "./pages/DenseTable";
import CollapaseTable from "./pages/CollapaseTable";
import TableWithFilter from "./pages/TableWithFilter";
import DataGrid from "./pages/DataGrid";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/DataTable" element={<DataTable />} />
          <Route exact path="/DenseTable" element={<DenseTable />} />
          <Route exact path="/CollapaseTable" element={<CollapaseTable />} />
          <Route exact path="/TableWithFilter" element={<TableWithFilter />} />
          <Route exact path="/DataGrid" element={<DataGrid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
