import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TrainerList } from "./TrainerList";
import { SearchTrainer } from "./SearchTrainer";

export const Home = () => {
  return (
    <>
      {/* <div>
        <ul class="nav">
          <li className="nav-item">
            <Link className="nav-link " to="/trainers">
              Trainer List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/search">
              Trainer search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/add">
              Add Trainer
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/trainers" element={<TrainerList />}></Route>
            <Route path="/search" element={<SearchTrainer />}></Route>
            <Route path="/add" element={<AddTrainer />}></Route>
          </Routes>
        </BrowserRouter>
      </div> */}
    </>
  );
};