import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import FetchRecipeById from "./FetchRecipeById";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Saved = () => {
  const { savedRecipe, deleteRecipe } = useContext(AppContext); // Accessing saved recipes and delete function from context
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (confirmDelete) {
      try {
        await deleteRecipe(id);
        toast.success("Recipe deleted successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } catch (error) {
        toast.error("Failed to delete recipe. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="row container mx-auto my-3">
        {savedRecipe?.map((data) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4" key={data._id}>
            <div className="card bg-dark text-light border border-warning my-2 transition-card">
              <FetchRecipeById id={data.recipe} />
              <div className="card-body d-flex justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(data._id)} // Use unique identifier for deletion
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;
