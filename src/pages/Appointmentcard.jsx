import { useEffect, useState } from "react";
import {toast} from "react-toastify";

function Appointmentcard() {
  const [docdata, setdocdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  



  async function getdata() {
    const url = "http://localhost:3000/appointments";
    let response = await fetch(url);
    response = await response.json();
   

setdocdata(response);
  }

   




  const upappcancel = async (id)=>{

  await fetch(`http://localhost:3000/appointments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "cancelled" }),
  });

  
    setdocdata(prev=>
      prev.map(item=>
        item.id === id ?
        {...item,status:"cancelled"}:item

    )
  )

toast.success("Appointment cancelled ✅");
  }


  
  return (
    <div>
      <div  className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            My appointments
          </h1>

          {docdata.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
              {/* Left Section - Doctor Info */}
              <div className="flex gap-4 sm:gap-6 flex-1 w-full sm:w-auto">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden flex items-end justify-center">
                    <img
                      src={doctor.image}
                      alt="Dr. Richard James"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="flex flex-col justify-center space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{doctor.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600">{doctor.speciality}</p>

                  <div className="mt-3 space-y-1">
                    <p className="text-sm font-medium text-gray-700">
                      Address:
                    </p>
                    <p className="text-sm text-gray-600">24 main street</p>
                    <p className="text-sm text-gray-600">10 clause road</p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Date & Time:</span>{" "}
                      <span className="text-gray-600">
                        {doctor.date}/4/2026 | {doctor.time}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Status Button */}
            { doctor.status === "cancelled"  ? <div  className="w-full sm:w-auto flex flex-col gap-6 justify-end">
  <button className="w-full sm:w-auto px-8 py-2.5 border-2 border-red-500 text-red-500 rounded-lg font-medium ">
                  Appointment cancelled
                </button>
</div>:

             <div  className="w-full sm:w-auto flex flex-col gap-6 justify-end">
                 <button onClick={()=>upappcancel(doctor.id)}
      className=" cursor-pointer
        px-6 py-2
        border border-gray-300
        rounded-lg
        text-gray-700
        font-medium
        transition-all duration-300 ease-in-out
        hover:bg-red-500
        hover:text-white
        hover:border-red-500
      "
    >
      Cancel appointment
    </button>
    
                <button className="w-full sm:w-auto px-8 py-2.5 border-2 border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  Completed
                </button>
              </div>
}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appointmentcard;
