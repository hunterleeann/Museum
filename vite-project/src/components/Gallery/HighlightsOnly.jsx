import React, { useEffect, useState } from "react";
import {
  useGetHighlightedArtQuery,
} from "./GallerySlice";
import SelectedDepartment from "./SelectedDepartment"; 
import SingleHighlight from "./SingleHighlight";

export default function HighlightsOnly({ deptName }) {
  const [highlightedArt, setHighlightedArt] = useState([]);
  const { data: highlightedWork, isSuccess } =
    useGetHighlightedArtQuery(deptName);

  useEffect(() => {
    if (isSuccess && highlightedWork?.objectIDs) {
      setHighlightedArt(highlightedWork.objectIDs.slice(0, 10));
    }
  }, [isSuccess, highlightedWork]);

  return (
    <div>
      {highlightedArt.map((objectID) => (
        <SingleHighlight key={objectID} objectID={objectID} />
      ))}
    </div>
  );
}
