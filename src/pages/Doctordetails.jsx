import { useState } from "react";
import { useNavigate } from "react-router";
import {toast} from "react-toastify";

function Doctordetails({ docdata }) {
  const [selectedDay, setSelectedDay] = useState("WED");
  const [selectedTime, setSelectedTime] = useState(null);


  const navigate = useNavigate();

  async function handleclick(){
      
    if(selectedTime == null){
          toast.error("please enter time details ");
          return;
    }


    const setdoctordata = {
      image:docdata.image,
      name:docdata.name,
       speciality:docdata.speciality,
      date:selectedDay,
      time:selectedTime,
       status: "active" 


    }

    const url ="http://localhost:3000/appointments";
    let response =await fetch(url,{
      method:'Post',
      body:JSON.stringify(setdoctordata)

    });
    response = await response.json();
    console.log(response);

    toast.success("Appointment booked ✅")

    navigate("/appointment");
  }

    


  const days = [
    { day: "WED", date: 4 },
    { day: "THU", date: 5 },
    { day: "FRI", date: 6 },
    { day: "SAT", date: 7 },
    { day: "SUN", date: 8 },
    { day: "MON", date: 9 },
    { day: "TUE", date: 10 },
  ];

  const timeSlots = [
    "05:00 pm",
    "06:00 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
    "08:30 pm",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 ">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-[#5f7cff] rounded-xl p-6 w-[90%] flex justify-center">
                <img
                  src={docdata.image}
                  alt="doctor"
                  className="h-55 object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3 border rounded-xl p-5">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {docdata.name}
                <span className="text-blue-500 text-sm">✔</span>
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                MBBS - {docdata.speciality}
                <span className="ml-2 px-2 py-0.5 text-xs border rounded-full">
                   {docdata.experience}
                </span>
              </p>

              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Dr. Davis has a strong commitment to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies. Dr. Davis has a strong
                commitment to delivering comprehensive medical care.
              </p>

              <p className="mt-4 font-medium">
                Appointment fee: {docdata.consultationFee}
              </p>
            </div>
          </div>
    

        {/* Booking Section */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Booking slots
          </h2>

          {/* Day Selection */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {days.map((item) => (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`flex-shrink-0 w-20 h-20 rounded-full flex flex-col items-center justify-center font-semibold transition-all duration-300 ${
                  selectedDay === item.day
                    ? "bg-blue-500 text-white shadow-lg scale-110"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-sm">{item.day}</span>
                <span className="text-xl mt-1">{item.date}</span>
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mb-8">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedTime === time
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Book Button */}
          <button onClick={handleclick} className="w-full sm:w-auto px-12 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Doctordetails;
