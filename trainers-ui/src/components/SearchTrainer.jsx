import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchTrainer = () => {
  const [filters, setFilters] = useState({
    name: "",
    location: "",
    technology: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    navigate(`/trainers?${query}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="bg-body-secondary p-5 rounded-3 w-75">
          <h2>Search Trainers</h2>
          <form onSubmit={handleSubmit}>
            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Search by name"
                value={filters.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="Search by location"
                value={filters.location}
                onChange={handleChange}
              ></input>
            </div>
            <div className=" mb-3">
              <input
                className="form-control"
                type="text"
                name="technology"
                placeholder="Search by technology"
                value={filters.technology}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-warning btn-btn-outline-success "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};