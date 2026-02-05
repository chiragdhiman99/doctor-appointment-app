
import { useState } from "react";
import {Link} from "react-router-dom";

function Home({data,setdocdata}){

 
    return(
        <div>


    {/* Hero section */}
     <section className="w-[80%] mx-auto mt-5  bg-[#5f74f1] rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Book Appointment <br /> With Trusted Doctors
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/90 max-w-md">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>

          {/* avatars + text */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/assets/assets_frontend/doc1.png"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/assets/assets_frontend/doc2.png"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="/assets/assets_frontend/doc3.png"
                alt=""
              />
            </div>
            <span className="text-sm text-white/90">
              Trusted by thousands of patients
            </span>
          </div>

          {/* button */}
          <button className="mt-8 bg-white text-[#5f74f1] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
            Book appointment →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./assets/assets_frontend/header_img.png"
            alt="Doctors"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>

    {/* doctor specialization */}
    <div>
       <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Find by Speciality
        </h2>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Simply browse through our extensive list of trusted doctors,
          schedule your appointment hassle-free.
        </p>

        {/* Icons Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          
          {/* Card */}
          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center  cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <GeneralPhysicianIcon />
            </div>
            <p className="text-sm text-gray-700">General physician</p>
          </div>

          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center  cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <GynecologistIcon />
            </div>
            <p className="text-sm text-gray-700">Gynecologist</p>
          </div>

          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center  cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <DermatologistIcon />
            </div>
            <p className="text-sm text-gray-700">Dermatologist</p>
          </div>

          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center  cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <PediatricianIcon />
            </div>
            <p className="text-sm text-gray-700">Pediatricians</p>
          </div>

          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center   cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <NeurologistIcon />
            </div>
            <p className="text-sm text-gray-700">Neurologist</p>
          </div>

          <div className="flex flex-col hover:-translate-y-5  transition-transform duration-300 items-center  cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <GastroIcon />
            </div>
            <p className="text-sm text-gray-700">Gastroenterologist</p>
          </div>

        </div>
      </div>
    </section>
    </div>

    {/* doctors section */}

 <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4">
          Browse through the doctors specialist.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-normal">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {  data.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-500"
                >
                  {/* Doctor Image */}
                  <div className="relative bg-indigo-50 pt-[100%]">
                    <Link to={`/doctor/${doctor.id}`}
><img
                      src={doctor.image} onClick={()=>setdocdata({
                        name:doctor.name,
                        speciality:doctor.speciality,
                        image:doctor.image,
                        experience:doctor.experience,
                        consultationFee:doctor.consultationFee,

                      })}
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
                      <span className="text-green-600 text-sm font-normal">Available</span>
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

    {/* footer section */}
     <div className="w-full max-w-6xl mx-auto my-8 px-4">
      <div className="relative bg-indigo-600 rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Book Appointment
              <br />
              With 100+ Trusted Doctors
            </h1>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-normal text-sm hover:bg-gray-50 transition-all duration-300 shadow-sm">
              Create account
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img 
              src="/assets/assets_frontend/appointment_img.png" 
              alt="Doctor" 
              className="w-[50%] h-[60%] object-cover object-bottom"
            />
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
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.87-.93-6.88-5.03-6.88-9.32V7.88L12 4.38l6.88 3.5v2.8c0 4.29-3.01 8.39-6.88 9.32z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Prescripto</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6">GET IN TOUCH</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">
                +91 9805239692
              </li>
              <li className="text-gray-600">
                dhimanchirag99@gmail.com
              </li>
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
    )
}

export default Home;


function GeneralPhysicianIcon() {
  return (
 <img src="/assets/assets_frontend/General_physician.svg" alt="Doctor" />

  );
}



function GynecologistIcon() {
  return (
   <img src="/assets/assets_frontend/Gynecologist.svg" alt="Doctor" />

  );
}


function DermatologistIcon() {
  return (
    <img src="/assets/assets_frontend/dermatologist.svg" alt="Doctor" />

  );
}



function PediatricianIcon() {
  return (
    <img src="/assets/assets_frontend/Pediatricians.svg" alt="Doctor" />

  );
}



function NeurologistIcon() {
  return (
    <img src="/assets/assets_frontend/Neurologist.svg" alt="Doctor" />

  );
}


function GastroIcon() {
  return (
    <img src="/assets/assets_frontend/Gastroenterologist.svg" alt="Doctor" />

  );
}
