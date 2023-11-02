import React, { useRef, useState } from "react";
import "./TeacherDashboard.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TeacherStudent = () => {
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
    roll: "T91/CSE/2002"
	},
	{
		sem: 1,
		name: "Algorithm",
		students: 50,
		department: "Computer Science",
    student_name: "Chirag Banerjee",
    roll: "T91/CSE/2003"
	},
  {
		sem: 1,
		name: "Algorithm",
		students: 50,
		department: "Computer Science",
    student_name: "Chirag Banerjee",
    roll: "T91/CSE/2004"
	},
  ])
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
  const history = useHistory();
  const handleSeeDetailsClick = () => {
    history.push("/marks");
  };

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
	  <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        ref={agGridRef}
        rowData={subjects}
        onGridReady={handleAgGridReady}
        onFirstDataRendered={handleFirstDataRendered}
        animateRows
        paginationPageSize={6}
        defaultColDef={{
          filter: "agTextColumnFilter",
          floatingFilter: true,
          resizable: true,
          //floatingFilterComponentParams: { suppressFilterButton: true }
        }}
        enableCellChangeFlash={true}
        defaultColGroupDef={{ marryChildren: true }}
        rowSelection={"single"}
      >
        <AgGridColumn
          field="roll"
          headerName="Roll"
          //suppressSizeToFit
          //checkboxSelection={true}
          //floatingFilterComponentParams={{ suppressFilterButton: true }}
          // floatingFilterComponentParams={{
          // 	suppressFilterButton: true
          // }}
          onCellClicked={handleSeeDetailsClick}
          cellStyle={() => {
            return { cursor: "pointer" };
          }}
        ></AgGridColumn>
        <AgGridColumn
          field="student_name"
          headerName="Student Name"
          //suppressSizeToFit
          //checkboxSelection={true}
          //floatingFilterComponentParams={{ suppressFilterButton: true }}
          // floatingFilterComponentParams={{
          // 	suppressFilterButton: true
          // }}
          onCellClicked={handleSeeDetailsClick}
          cellStyle={() => {
            return { cursor: "pointer" };
          }}
        ></AgGridColumn>
		<AgGridColumn
          field="department"
          headerName="Department"
          //suppressSizeToFit
          //checkboxSelection={true}
          //floatingFilterComponentParams={{ suppressFilterButton: true }}
          // floatingFilterComponentParams={{
          // 	suppressFilterButton: true
          // }}
          onCellClicked={handleSeeDetailsClick}
          cellStyle={() => {
            return { cursor: "pointer" };
          }}
        ></AgGridColumn>
        <AgGridColumn
          field="sem"
          headerName="Semester"
          //suppressSizeToFit
          //floatingFilterComponentParams={{ suppressFilterButton: true }}
          onCellClicked={handleSeeDetailsClick}
          cellStyle={() => {
            return { cursor: "pointer" };
          }}
         // cellRendererFramework="hanldeTextCellRenderer"
        ></AgGridColumn>
        <AgGridColumn
          field="name"
          headerName="Subject"
          //suppressSizeToFit
          //floatingFilterComponentParams={{ suppressFilterButton: true }}
          onCellClicked={handleSeeDetailsClick}
          cellStyle={() => {
            return { cursor: "pointer" };
          }}
        ></AgGridColumn>
      </AgGridReact>
	  </div>
    </div>
  );
};

export default TeacherStudent;
