import { useGetHighObjectQuery } from "./GallerySlice";

export default function SingleHighlight({ objectID }) {
  const { data, isLoading, isSuccess } = useGetHighObjectQuery(objectID);

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <p>Failed to load</p>;

  return (
    <div className="singleHighlighted">
      <div className="individual">
      <h3>{data.title}</h3>
      <img src={data.primaryImageSmall} alt={data.title} width="200" />
      </div>
    </div>
  );
}
