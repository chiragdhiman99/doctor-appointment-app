import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Alldoctors({ data, setdocdata }) {
  const [doctorname, setdoctorname] = useState("");
  const [selecteddoctor, setdoctor] = useState("");
  const [check, checked] = useState(false);
  const doctorsGridRef = useRef(null);

  const spec = [
    {
      id: 1,
      name: "General physician",
    },
    {
      id: 2,
      name: "Gynecologist",
    },
    {
      id: 3,
      name: "Dermatologist",
    },
    {
      id: 4,
      name: "Pediatricians",
    },
    {
      id: 5,
      name: "Neurologist",
    },
    {
      id: 6,
      name: "Gastroenterologist",
    },
  ];

  const filter = data.filter((dat) => dat.speciality === doctorname);

  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Speciality Filter */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <h2 className="text-gray-600 text-base mb-4 font-normal">
                Browse through the doctors specialist.
              </h2>

              <div className="flex flex-col gap-2">
                {spec.map((doctor, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setdoctorname(doctor.name);
                      checked(true);
                      setdoctor(doctor.name);
                      if (window.innerWidth < 1022) {
    doctorsGridRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
                    }}
                    className={`w-full cursor-pointer  ${selecteddoctor == doctor.name ? " text-indigo-600 border-indigo-500" : "bg-white"}   text-left px-4 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-normal hover:bg-indigo-50   transition-all duration-200`}
                  >
                    {doctor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Doctors Grid */}
            <div className="flex-1" ref={doctorsGridRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {check
                  ? filter.map((doctor) => (
                      <div
                        key={doctor.id}
                        className="bg-white rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-500"
                      >
                        {/* Doctor Image */}
                        <div className="relative bg-indigo-50 pt-[100%]">
                          <Link to={`/doctor/${doctor.id}`}>
                            <img
                              onClick={() =>
                                setdocdata({
                                  name: doctor.name,
                                  speciality: doctor.speciality,
                                  image: doctor.image,
                                  experience: doctor.experience,
                                  consultationFee: doctor.consultationFee,
                                })
                              }
                              src={doctor.image}
                              alt={doctor.name}
                              className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                          </Link>
                        </div>

                        {/* Doctor Info */}
                        <div className="p-4">
                          {/* Available Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-green-600 text-sm font-normal">
                              Available
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {doctor.speciality}
                          </p>
                        </div>
                      </div>
                    ))
                  : data.map((doctor) => (
                      <div
                        key={doctor.id}
                        className="bg-white rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-500"
                      >
                        {/* Doctor Image */}
                        <div className="relative bg-indigo-50 pt-[100%]">
                          <Link to={`/doctor/${doctor.id}`}>
                            <img
                              onClick={() =>
                                setdocdata({
                                  name: doctor.name,
                                  speciality: doctor.speciality,
                                  image: doctor.image,
                                  experience: doctor.experience,
                                  consultationFee: doctor.consultationFee,
                                })
                              }
                              src={doctor.image}
                              alt={doctor.name}
                              className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                          </Link>
                        </div>

                        {/* Doctor Info */}
                        <div className="p-4">
                          {/* Available Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-green-600 text-sm font-normal">
                              Available
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {doctor.speciality}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.93-6.88-5.03-6.88-9.32V7.88L12 4.38l6.88 3.5v2.8c0 4.29-3.01 8.39-6.88 9.32z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Prescripto</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                GET IN TOUCH
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600">+91 9805239692</li>
                <li className="text-gray-600">dhimanchirag99@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-300 pt-8">
            <p className="text-center text-gray-600 text-sm">
              Copyright 2024 @ Prescripto.com - All Right Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Alldoctors;
