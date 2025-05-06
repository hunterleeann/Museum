import React, { useEffect } from "react";
import { useState } from "react";
import {
  useGetSelectedDepartmentQuery,
  useGetRandomObjectQuery,
} from "./GallerySlice";
import "./Gallery.css";

export default function SelectedDepartment({ selectedDepartment }) {
  const {
    data: selectedData,
    isSuccess,
    isLoading,
  } = useGetSelectedDepartmentQuery(selectedDepartment); //get selected department data
  const [randomObject, setRandomObject] = useState(0);
  const [randObjData, setRandObjData] = useState([]); // hold the randomly selected object ID from the department

  const {
    data: objectData,
    isLoading: loading,
    isSuccess: success,
  } = useGetRandomObjectQuery(randomObject); //get object data

  // console.log("num: ", selectedData?.total);

  useEffect(() => {
    if (isSuccess && selectedData?.total != null) {
      const randIndex =
        selectedData.objectIDs[
          Math.floor(Math.random() * selectedData.objectIDs.length)
        ];
      setRandomObject(randIndex);
    }
  }, [isSuccess, selectedData]);

  useEffect(() => {
    if (success && randomObject != null) {
      setRandObjData(objectData);
    }
  }, [success, randomObject, objectData]);

  {
    console.log("info: ", randObjData);
  }

  return (
    <div>
      {loading ? (
        <p>Loading object...</p>
      ) : ( 
        <>
          <div className="randomObjectArt">
            {/* {objectData && <p>Loaded...</p>} */}
            <h2>Name: {randObjData.title}</h2>
            <img src={randObjData.primaryImage} alt="Object" width="400" />
            <h2>Description: {randObjData.artistDisplayBio}</h2>
            <h2>Artist: {randObjData.artistDisplayName}</h2>
          </div>
        </>
      )}
    </div>
  );
}
