import { useRef, useState } from "react";
import { toast } from "react-toastify";


function Profile({ upsavedUser}) {
  const [edit, upedit] = useState(false);
  const fileRef = useRef(null);

  const [userdata, setuserdata] = useState({
    image:"",
    email:"" ,
    phone: "0000000",
    address: "ladoh panchrukhi",
    gender: "male",
    birthday: "3/6/2005",
  });

  const [getdata,upgetdata] = useState( JSON.parse(localStorage.getItem("userdata")) || null,
);

const [store, upstore] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

function handleImage(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setuserdata({ ...userdata, image: reader.result });
    setImage(reader.result);
    upimagecheck(true);
  };

  reader.readAsDataURL(file);
}

  function setlocaldata() {
    localStorage.setItem(
      "userdata",
      JSON.stringify({
        image:userdata.image ,
        email: userdata.email || store.email,
        phone: userdata.phone,
        address: userdata.address,
        gender: userdata.gender,
        birthday: userdata.birthday,
      }),
    );
    upgetdata(userdata);
    upsavedUser(userdata);
      toast.success("profile updated ✅");

  }

function handlebutton(){
    setuserdata({
                 image: getdata?.image || "",
    email: getdata?.email || store.email,
    phone: getdata?.phone || "0000000",
    address: getdata?.address || "",
    gender: getdata?.gender || "male",
    birthday: getdata?.birthday || "",
              })
}
  return (
    <div className="min-h-screen bg-white flex justify-center  px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="relative">
        {/* Avatar */}
      { edit && <input
  type="file"
  ref={fileRef}
  hidden
  onChange={handleImage}
/>
}
<img
  onClick={() => edit && fileRef.current.click()}
  src={getdata?.image || "/assets/assets_frontend/user.png"}
  className="w-28 h-28 cursor-pointer object-cover rounded-sm border"
/>

{edit ? 
<i   onClick={() => fileRef.current.click()} className="fa-regular absolute top-10 left-9 text-indigo-600 text-3xl  fa-camera"></i>:null}
</div>

        {/* Name + Divider */}
        <h1 className="text-2xl font-semibold text-gray-800 mt-5 pb-3 border-b border-gray-200">
          {store.name}
        </h1>

        {/* Contact Information */}
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mt-5 mb-3">
          Contact Information
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex">
            <span className="w-24 text-sm font-semibold text-gray-600">
              Email id:
            </span>
            {edit ? (
              <input
                type="text"
                className="text-sm bg-blue-100 px-5   text-blue-500"
                value={store.email}
                onChange={(e) => {
                  setuserdata({ ...userdata, email: e.target.value });
                  upstore({ ...store, email: e.target.value });
                }}
              />
            ) : (
 <span className="text-sm text-blue-500">  {getdata ? getdata.email :store.email}
</span>            )}
          </div>
          <div className="flex">
            <span className="w-24 text-sm font-semibold text-gray-600">
              Phone:
            </span>
            {edit ? (
              <input
                type="number"
                className="text-sm bg-blue-100 px-5   text-blue-500"
                value={userdata.phone}
                onChange={(e) => {
                  setuserdata({ ...userdata, phone: e.target.value });
                  upstore({ ...store, phone: e.target.value });
                }}
              />
            ) : (
              <span className="text-sm text-blue-500">  {getdata ? getdata.phone :"0000000"}
</span>
            )}{" "}
          </div>
          <div className="flex">
            <span className="w-24 text-sm font-semibold text-gray-600">
              Address:
            </span>
            <div>
              {edit ? (
                <input
                  type="text"
                  className="text-sm bg-blue-100 px-5   text-blue-500"
                  value={userdata.address}
                  onChange={(e) => {
                    setuserdata({ ...userdata, address: e.target.value });
                    upstore({ ...store, address: e.target.value });
                  }}
                />
              ) : (
              <span className="text-sm text-blue-500">  {getdata ? getdata.address :"0000000"}</span>
              )}{" "}
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mt-6 mb-3">
          Basic Information
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex">
            <span className="w-24 text-sm font-semibold text-gray-600">
              Gender:
            </span>
            {edit ? (
              <input
                type="text"
                className="text-sm bg-blue-100 px-5   text-blue-500"
                value={userdata.gender}
                onChange={(e) => {
                  setuserdata({ ...userdata, gender: e.target.value });
                  upstore({ ...store, gender: e.target.value });
                }}
              />
            ) : (
              <span className="text-sm text-blue-500">  {getdata ? getdata.gender :"male"}</span>
            )}{" "}
          </div>
          <div className="flex">
            <span className="w-24 text-sm font-semibold text-gray-600">
              Birthday:
            </span>
            {edit ? (
              <input
                type="date"
                className="text-sm bg-blue-100 px-5   text-blue-500"
                value={userdata.birthday}
                onChange={(e) => {
                  setuserdata({ ...userdata, birthday: e.target.value }); 
                  upstore({ ...store, birthday: e.target.value });
                }}
              />
            ) : (
              <span className="text-sm text-blue-500">  {getdata ? getdata.birthday :"3/6/2005"}</span>
            )}{" "}
          </div>
        </div>

        {/* Edit Button */}
        {edit ? (
          <button
            onClick={() => {
              upedit(!edit);
              setlocaldata();
               handlebutton();
              
            }}
            className="mt-8 cursor-pointer px-6 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            save information
          </button>
        ) : (
          <button
            onClick={() =>{upedit(!edit)
              handlebutton();
            }
            }
            
            className="mt-8 cursor-pointer px-6 py-1.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
