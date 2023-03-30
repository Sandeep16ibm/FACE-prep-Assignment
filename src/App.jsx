import "./App.css";
import LoginPage from "./components/LoginPage";

import PrivateRoute from "./context/PrivateRoute";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
