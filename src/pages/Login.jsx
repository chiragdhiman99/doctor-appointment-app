import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";



function Login({upstore}){
      const [focused, setFocused] = useState(null);
      const navigate = useNavigate();

      const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const [error, setError] = useState("");

function handlechange(e){

    const {name,value} = e.target;

    setFormData({...formData,
        [name]:value,

    });

    setError("");
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.password) {
    setError("All fields are required");
    return;
  }

  if (!formData.email.includes("@")) {
    setError("Enter a valid email");
    return;
  }

  if (formData.password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  
localStorage.setItem("user",JSON.stringify({
    name:formData.name,
    email:formData.email,

}))
upstore({name:formData.name,email:formData.email});


  setError("");
  toast.success("User logged in successfully ✅");
  navigate("/Home");

};

console.log(formData.name);
    return(
        <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md px-8 py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Create Account</h1>
        <p className="text-gray-500 text-sm mb-7">Please sign up to book appointment</p>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            placeholder=""
            name="name"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            value={formData.name}
            onChange={handlechange}
            className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 text-sm outline-none transition-all duration-200 ${
              focused === "name"
                ? "border-blue-500 ring-2 ring-blue-100"
                : "border-gray-300"
            }`}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder=""
                        name="email"

            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
             value={formData.email}
            onChange={handlechange}
            className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 text-sm outline-none transition-all duration-200 ${
              focused === "email"
                ? "border-blue-500 ring-2 ring-blue-100"
                : "border-gray-300"
            }`}
          />
        </div>

        {/* Password */}
        <div className="mb-7">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Password
          </label>
          <input
            type="password"
            placeholder=""
                        name="password"

            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
             value={formData.password}
            onChange={handlechange}
            className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 text-sm outline-none transition-all duration-200 ${
              focused === "password"
                ? "border-blue-500 ring-2 ring-blue-100"
                : "border-gray-300"
            }`}
          />
                   {error && <p className="text-red-500 mt-2">{error}</p>}

        </div>


        {/* Create account button */}
        <button onClick={handleSubmit} className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold text-base py-3 rounded-lg transition-colors duration-150 cursor-pointer">
          Create account 
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 underline underline-offset-2 transition-colors duration-150"
          >
            Login here
          </a>
        </p>
      </div>
    </div>

    </div>
    )
}

export default Login;