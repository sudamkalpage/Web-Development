import React from "react";
import { Link } from "react-router-dom";

const ComponentA = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/DataTable">DataTable</Link>
        </li>
        <li>
          <Link to="/DenseTable">DenseTable</Link>
        </li>
        <li>
          <Link to="/CollapaseTable">CollapaseTable</Link>
        </li>
        <li>
          <Link to="/TableWithFilter">TableWithFilter</Link>
        </li>
      </ul>
    </div>
  );
};

export default ComponentA;
