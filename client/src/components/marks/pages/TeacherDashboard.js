import React, { useRef, useState } from "react";
import "./TeacherDashboard.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Button, TextField } from "@mui/material";

const Marks = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [agGridAPI, setAgGridAPI] = useState(null);
  const [agGridColumnAPI, setAgGridColumnAPI] = useState(null);
  const [subjects, setSubjects] = useState([
    {
      sem: 1,
      name: "Data Structures",
      students: 40,
      department: "Computer Science",
      student_name: "Sumanjit Kuity",
      roll: "T91/CSE/2002",
    },
    {
      sem: 1,
      name: "Algorithm",
      students: 50,
      department: "Computer Science",
      student_name: "Chirag Banerjee",
      roll: "T91/CSE/2003",
    },
    {
      sem: 1,
      name: "Algorithm",
      students: 50,
      department: "Computer Science",
      student_name: "Chirag Banerjee",
      roll: "T91/CSE/2004",
    },
  ]);
  const agGridRef = useRef(null);
  const handleAgGridReady = (params) => {
    // eslint-disable-next-line no-unused-vars
    const { api, columnApi } = params;
    setAgGridAPI(Object.assign({}, agGridAPI, api));
    setAgGridColumnAPI(columnApi);
  };

  const handleFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
    params.columnApi.setColumnWidth("action", "100%", true);
    const { api, columnApi } = params;
    api.sizeColumnsToFit();
  };
  const menuItems = [
    {
      text: "Dashboard",
      icon: "./icons/grid.svg",
    },
    {
      text: "Teacher Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Messages",
      icon: "icons/message.svg",
    },
    {
      text: "Analytics",
      icon: "icons/pie-chart.svg",
    },
    {
      text: "File Manager",
      icon: "icons/folder.svg",
    },
    {
      text: "Orders",
      icon: "icons/shopping-cart.svg",
    },
    {
      text: "Saved Items",
      icon: "icons/heart.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];

  const handleSeeDetailsClick = () => {};

  return (
    <div style={{ display: "flex" }}>
      <div
        className={
          isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpanded && (
              <div className="nav-brand">
                <img src="icons/Logo.svg" alt="" srcset="" />
                <h2>Teacher Dashboard</h2>
              </div>
            )}
            <button
              className={
                isExpanded
                  ? "hamburger hamburger-in"
                  : "hamburger hamburger-out"
              }
              onClick={() => setExpendState(!isExpanded)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="nav-menu">
            {menuItems.map(({ text, icon }) => (
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <img className="menu-item-icon" src={icon} alt="" srcset="" />
                {isExpanded && <p>{text}</p>}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-footer">
          {isExpanded && (
            <div className="nav-details">
              <img
                className="nav-footer-avatar"
                src="icons/admin-avatar.svg"
                alt=""
                srcset=""
              />
              <div className="nav-footer-info">
                <p className="nav-footer-user-name"></p>
                <p className="nav-footer-user-position">Teacher</p>
              </div>
            </div>
          )}
          <img
            className="logout-icon"
            src="icons/logout.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ display: "flex", gap: 20, marginLeft: 100, marginTop: 50 }}
        >
          <div style={{ marginTop: 15 }}>Name:</div>
          <div>
            <TextField label="marks" value={"Sumanjit Kuity"} disabled style={{ marginLeft: 125 }} />
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 20, marginLeft: 100, marginTop: 50 }}
        >
          <div style={{ marginTop: 15 }}>Roll:</div>
          <div>
            <TextField label="Roll" value={"T91/CSE/2002"} disabled style={{ marginLeft: 140 }}/>
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 20, marginLeft: 100, marginTop: 50 }}
        >
          <div style={{ marginTop: 15 }}>Semester:</div>
          <div>
            <TextField label="Semester" value={"1"} disabled style={{ marginLeft: 100 }} />
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 20, marginLeft: 100, marginTop: 50 }}
        >
          <div style={{ marginTop: 15 }}>Department:</div>
          <div>
            <TextField label="Department" value={"Computer Science"} disabled style={{ marginLeft: 80 }} />
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 20, marginLeft: 100, marginTop: 50 }}
        >
          <div style={{ marginTop: 15 }}>Add Marks:</div>
          <div>
            <TextField label="marks" style={{ marginLeft: 90 }}/>
          </div>
        </div>
        <Button sx={{ width: 200 }} style={{ marginLeft: 290, marginTop: 50 }} onClick={() => alert("Succesfully Added Marks")} color="primary" variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default Marks;
