function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center py-16 px-4 md:px-20 bg-white">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-10">
          CONTACT <span className="font-bold">US</span>
        </h2>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-5">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/assets_frontend/contact_image.png" // apni image ka path yaha de
              alt="Doctor with patient"
              className="w-[90%] h-[20%] rounded-lg shadow-md"
            />
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {/* Our Office */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                OUR OFFICE
              </h3>
              <p className="text-gray-500">
                54709 Willms Station
                <br />
                Suite 350, Washington, USA
              </p>
              <p className="text-gray-500 mt-2">
                Tel: (415) 555-0132
                <br />
                Email: greatstackdev@gmail.com
              </p>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                CAREERS AT PRESCRIPTO
              </h3>
              <p className="text-gray-500 mb-4">
                Learn more about our teams and job openings.
              </p>
              <button className="px-6 py-2 border border-gray-700 text-gray-700 font-medium rounded hover:bg-gray-700 hover:text-white transition">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>{" "}

       {/* footer section */}
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
  );
}

export default Contact;
