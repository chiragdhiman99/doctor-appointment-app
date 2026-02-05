

function About(){
      const items = [
    {
      title: "EFFICIENCY:",
      description:
        "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "CONVENIENCE:",
      description:
        "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "PERSONALIZATION:",
      description:
        "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

    return(
     <div>
          <section className="px-4 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
        {/* Image */}
        <div className="flex-1">
          <img
            src="assets/assets_frontend/about_image.png"
            alt="Doctors"
            className="w-[60%] rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            ABOUT <span className="font-bold">US</span>
          </h2>

          <p className="text-gray-600">
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>

          <p className="text-gray-600">
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>

          <p className="text-gray-600">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
    </section>

    {/* other section */}
     <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          WHY <span className="font-bold">CHOOSE US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

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
    )
}

export default About;