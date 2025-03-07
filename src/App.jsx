import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ModalPopup from './modelpopup';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Crud() {
  const [tableData, setTableData] = useState(null);

  const [newdata,setnewdata] = useState({})
  // Modal State
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = (data) =>{

  setShow(true);
  setnewdata(data)
  }

  useEffect(() => {
    fetch("https://67723b92ee76b92dd49181cc.mockapi.io/trail/data", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((tasks) => {
        setTableData(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
    <>
      <Container fluid className="p-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="fs-5 text-center">
              <th> S.No </th>
              <th> Name </th>
              <th> EmailID </th>
              <th> Phone No </th>
              <th> Qualification </th>
              <th> Location </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
           
            
            {tableData &&
              tableData.map((item) => (
                <tr className="fs-6 text-center">
                  <td> {1} </td>
                  <td> {item.name} </td>
                  <td> {item.email} </td>
                  <td> {item.phoneNo} </td>
                  <td> {item.qualification} </td>
                  <td> {item.location} </td>
                  <td>
                    <Button variant="success" className='me-3 fw-semibold' onClick={()=>handleShow(item)}> Edit </Button>
                    <Button variant="danger" className='fw-semibold'> Delete </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>

      <ModalPopup status={show} close={handleClose} data={newdata} updatedata={setnewdata}/>
    </>
  );
}