import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTrainers, updateTrainer } from "../api";

export const EditTrainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    technology1: "",
    technology2: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await getTrainers();
      const trainerArray = response;
      console.log(trainerArray);
      const found = trainerArray.find((t) => t.id === Number(id));
      console.log(found);
      if (found) {
        setTrainer(found);
      } else {
        console.log("Trainer data is not found");
        navigate("/trainers");
      }
    } catch (error) {
      console.error("Trainer data is not loading...", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTrainer(id, trainer);
      alert("Trainer added successfully...");
      navigate("/trainers");
    } catch (error) {
      console.error("Trainer not added", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer({ ...trainer, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 w-100 ">
        <div className="bg-body-secondary w-75 rounded-3 p-3">
          <h2 className="text-center text-success">Add Trainers</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Trainer name"
                value={trainer.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="Trainer location"
                value={trainer.location}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email address"
                value={trainer.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="number"
                name="phone"
                placeholder="Phone number"
                value={trainer.phone}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="technology1"
                placeholder="Technology 1"
                value={trainer.technology1}
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="technology2"
                placeholder="Technology 2"
                value={trainer.technology2}
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};