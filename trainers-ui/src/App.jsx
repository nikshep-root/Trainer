import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { TrainerList } from "./components/TrainerList";
import { SearchTrainer } from "./components/SearchTrainer";
import { AddTrainer } from "./components/AddTrainer";
import { EditTrainer } from "./components/EditTrainer";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && (
        <div className="bg-warning p-2 fw-bold d-flex justify-content-end ">
          <ul className="nav bg-light rounded-5 me-5">
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
      )}
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/trainers" element={<TrainerList />}></Route>
          <Route path="/search" element={<SearchTrainer />}></Route>
          <Route path="/add" element={<AddTrainer />}></Route>
          <Route path="/edit/:id" element={<EditTrainer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;