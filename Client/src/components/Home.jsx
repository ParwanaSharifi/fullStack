import React, { useContext } from "react";
import { AppContext } from "../context/App_Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

// Defining Home functional component
const Home = () => {
  const navigate = useNavigate();
  const { recipe, savedRecipeById } = useContext(AppContext);

  const saved = async (id) => {
    const result = await savedRecipeById(id);
    toast.success(result.data.message, {
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
  };

  return (
    <>
      <ToastContainer />

      <div
        className="text-center mx-auto"
        style={{ maxWidth: "1200px", padding: "0px 15px" }}
      >
        <h1 className="my-4">
          Simple recipes made for real, actual, everyday life
        </h1>{" "}
        <div className="row d-flex justify-content-center align-items-center">
          {recipe.map((data) => (
            <div key={data._id} className="col-12 col-sm-6 col-md-4 my-3">
              <div className="card bg-dark text-light border border-warning my-2 transition-card">
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imgurl}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      maxWidth: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <div className="my-3">
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() => saved(data._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`/${data._id}`)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
