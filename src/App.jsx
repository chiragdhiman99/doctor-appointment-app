import Home from "./pages/Home";
import Alldoctors from "./pages/Alldoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctordetails from "./pages/Doctordetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Appointmentcard from "./pages/Appointmentcard.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./pages/Scrolltotop.jsx";


function App() {
  const [data, setdata] = useState([]);
  const [docdata, setdocdata] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [store, upstore] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const [savedUser,upsavedUser] = useState(
    JSON.parse(localStorage.getItem("userdata")));


  useEffect(() => {
    geturl();
  }, []);

  const geturl = async () => {
    const url = "http://localhost:3000/doctors";
    let response = await fetch(url);
    response = await response.json();
    setdata(response);

    console.log(response);
  };
  return (
    <div>
      <nav className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Prescripto
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <li className="cursor-pointer hover:text-blue-600">
              {" "}
              <Link to="/Home">HOME</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              {" "}
              <Link to="/alldoctors">All doctors</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              {" "}
              <Link to="/about">About us</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              {" "}
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>

        

          {/* Button */}
          <div className="hidden md:block">
            {store ? (
              <div className="relative cursor-pointer">
                {/* Avatar + Chevron */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-1.5"
                >
                  <img
  src= "/assets/assets_frontend/user.png"
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 object-cover"
                  />
                  <span
                    className={`text-gray-500 text-xl transition-transform duration-200 cursor-pointer inline-block ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2">
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600 border-b border-gray-100"
                    >
                      <Link to="/profile">My profile</Link>
                    </a>
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600 border-b border-gray-100"
                    >
                      <Link to="/appointment">My appointments</Link>
                    </a>
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                <Link to="/signup">Create account</Link>{" "}
              </button>
            )}
          </div>

            {/* mobile links */}
          <div>
      {/* Mobile Menu Dropdown */}
      
      {isMenuOpen && (
        <div className="md:hidden min-h-screen fixed top-16  left-0 w-full bg-white shadow-lg z-40">
          <ul className="flex flex-col items-center py-4 text-sm font-medium text-gray-600">
            <li className="w-full text-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 py-3">
              <Link to="/Home" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            </li>
            <li className="w-full text-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 py-3">
              <Link to="/alldoctors" onClick={() => setIsMenuOpen(false)}>All doctors</Link>
            </li>
            <li className="w-full text-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 py-3">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
            </li>
            <li className="w-full text-center cursor-pointer hover:text-blue-600 hover:bg-blue-50 py-3">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact us</Link>
            </li>
          </ul>
      <div className="flex justify-center py-4">
            {store ? (
              <div className="relative cursor-pointer">
                {/* Avatar + Chevron */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-1.5"
                >
                  <img
  src= "/assets/assets_frontend/user.png"
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-gray-300 object-cover"
                  />
                  <span
                    className={`text-gray-500 text-xl transition-transform duration-200 cursor-pointer inline-block ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>

                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2">
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600 border-b border-gray-100"
                    >
                      <Link to="/profile" onClick={() => setIsMenuOpen(false)}>My profile</Link>
                    </a>
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600 border-b border-gray-100"
                    >
                      <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>My appointments</Link>
                    </a>
                    <a
                      onClick={() => setIsOpen(!isOpen)}
                      href="#"
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:text-blue-600"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                <Link to="/signup">Create account</Link>{" "}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl p-2"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

    </div>
        </div>
      </nav>
      {/* Home page */}
      <ScrollToTop />
      <Routes>

        <Route
          path="/Home"
          element={<Home data={data} setdocdata={setdocdata} />}
        />
        <Route
          path="/doctor/:id"
          element={<Doctordetails docdata={docdata} />}
        />
        <Route
          path="/alldoctors"
          element={<Alldoctors setdocdata={setdocdata} data={data} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Login upstore={upstore} />} />
        <Route path="/profile" element={<Profile store={store} upstore={upstore} upsavedUser={upsavedUser} />} />
        <Route path="/appointment" element={<Appointmentcard />} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
