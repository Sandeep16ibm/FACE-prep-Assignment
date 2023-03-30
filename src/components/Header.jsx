import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md mb-4">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            <a className="text-indigo-500">MyApp</a>
          </div>
          <button
            onClick={handleLogout}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
