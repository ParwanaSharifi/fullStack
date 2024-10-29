import { useParams } from "react-router-dom";
import FetchRecipeById from "./FetchRecipeById";

const Detail = () => {
  const { id } = useParams(); // Extracting the 'id' parameter from the URL using useParams

  return (
    <div>
      <FetchRecipeById id={id} />
    </div>
  );
};

export default Detail;
