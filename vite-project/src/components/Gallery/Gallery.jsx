import React, { useEffect } from "react";
import { useState } from "react";
import {
  useGetDepartmentsQuery,
} from "./GallerySlice";
import "./Gallery.css";
import SelectedDepartment from "./SelectedDepartment";

const Gallery = () => {
  const {
    data: departmentData,
    isLoading,
    isSuccess,
  } = useGetDepartmentsQuery(); //get department data
  const [department, setDepartment] = useState([]); 
  const [isSelected, setIsSelected] = useState(false);
  // const [randomObject, setRandomObject] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(null); //will hold departmentId #

  useEffect(() => {
    if (isSuccess) {
      setDepartment(departmentData.departments);
    }
  }, [isSuccess]); //runs only when isSuccess or if departmentData changes

  return (
    <div>
      <h2 className="DepartmentList">Browse by Department</h2>
      {isLoading && <p>Loading departments...</p>}
      <div className="DepartmentDisplay">
      {/* <ul className="DepartmentDisplay"> */}
        {department &&
          department.map((dept) => (
            // <li key={dept.departmentId}>
            <div className="items"> 
              <button key={dept.departmentId} class="btn btn-primary" onClick={() => setSelectedDepartment(dept.departmentId)}>
                {dept.displayName}
              </button>
              </div> 
            // </li>
            
          ))}
          </div>
      {/* </ul> */}
      {console.log("selected: ", selectedDepartment)}
      {/* Show object from selected department */}
      {selectedDepartment && (
        <SelectedDepartment selectedDepartment={selectedDepartment} />
      )}
      {console.log("selected: ", selectedDepartment)}
    </div>
  );
};

export default Gallery;
