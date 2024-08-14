import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(() => {
        console.log("Error while getting data");
      });
  }, []);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3000/api/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((employee) => employee._id !== id));
      })
      .catch((err) => {
        console.log("delete erorr", err);
      });
  };

  const employeesList =
    employees.length === 0
      ? "no employees found !"
      : employees.map((employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
            onDelete={onDeleteClick}
          />
        ));

  return (
    <div className="Show_EmployeeList">
      <div className="container">
        <div className="list">{employeesList}</div>
      </div>
    </div>
  );
};

export default EmployeeList;
