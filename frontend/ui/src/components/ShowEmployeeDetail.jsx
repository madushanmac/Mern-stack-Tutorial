import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ShowEmployeeDetail() {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(() => {
        console.log("Error from ShowBookDetails");
      });
  }, [id]);

  const TableItem = (
    <div>
      <table classNameName="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>ID-</td>
            <td>{employees.employeeID}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>NAME-</td>
            <td>{employees.name}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ADDRESS-</td>
            <td>{employees.address}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>NIC-</td>
            <td>{employees.nic}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div classNameName="showEmployeeDetails">
      <div classNameName="col-md-10 m-auto">
        <br />
        <Link to={"/"} classNameName="btn btn-outline-danger float-right">
          Back to main
        </Link>
      </div>

      <br />
      <div classNameName="col-md-8 m-auto">
        <h1 classNameName="display-6-bold text-center ">Employee Detail</h1>
        <p classNameName="text-center">This is full detail of employee</p>
        <hr />
        <br />
      </div>
      <div classNameName="col-md-10 m-auto">{TableItem}</div>
      <div classNameName="col-md-6 m-auto">
        <Link
          to={`/updatedetails/${employees._id}`}
          classNameName="btn btn-outline-info btn-lg btn-block d-flex justify-content-center"
        >
          Edit Employee
        </Link>
      </div>
    </div>
  );
}

export default ShowEmployeeDetail;
