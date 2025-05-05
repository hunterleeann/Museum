import React, { useEffect } from "react";
import { useState } from "react";
import { useGetDepartmentsQuery } from "./GallerySlice";
import "./Gallery.css";

const Gallery = () => {
  const {
    data: departmentData,
    isLoading,
    isSuccess,
  } = useGetDepartmentsQuery(); //get department data
  const [department, setDepartment] = useState();

  useEffect(() => {
    if (isSuccess) {
      setDepartment(departmentData.departments);
    }
  }, [isSuccess, departmentData]); //runs only when isSuccess or if departmentData changes

  return (
    <div>
      <h2 className="DepartmentList">Browse by Department</h2>
      {isLoading && <p>Loading departments...</p>}
      <ul className="DepartmentDisplay">
        {department &&
          department.map((departments) => (
            <li key={departments.departmentId}>
              <h3>{departments.displayName}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Gallery;
