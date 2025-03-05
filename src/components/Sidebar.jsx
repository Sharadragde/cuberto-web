import {} from "react";

const Sidebar = ({ isOpen, setIsOpen, setIsHoverText }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-white z-10 w-full p-6 md:w-1/2 lg:w-1/2 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 shadow-lg`}
      >
        <div className="w-full flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 mx-4 w-16 h-16 flex text-2xl items-center justify-center rounded-full transition-all duration-700 bg-transparent hover:bg-black hover:text-white"
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8 p-4">
          {/* Social Media */}
          <div>
            <span className="text-gray-400 ml-20">Social media</span>
            <ul className="mt-8 ml-20 space-y-4 text-sm lg:text-md my-2 font-light">
              {[
                "LinkedIn",
                "Behance",
                "Dribbble",
                "Instagram",
                "YouTube",
                "Twitter",
                "GitHub",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-default"
                  onMouseEnter={() => setIsHoverText(true)}
                  onMouseLeave={() => setIsHoverText(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Menu */}
          <div>
            <span className="text-gray-400">Menu</span>
            <ul className="mt-8 space-y-3 lg:text-5xl sm:text-3xl text-2xl font-lg transition-all duration-300 ease-in-out group-hover:animate-moveUp">
              {[
                "What we do",
                "Projects",
                "Company",
                "Tutorials",
                "Contacts",
              ].map((item) => (
                <li
                  key={item}
                  onMouseEnter={() => setIsHoverText(true)}
                  onMouseLeave={() => setIsHoverText(false)}
                  className="cursor-default transition-all duration-300 ease-in-out transform group-hover:-translate-y-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-10 flex gap-14 text-lg px-24">
          <div>
            <span className="text-gray-400 text-sm">Get in touch</span>
            <p className="mt-1 underline  underline-offset-8 decoration-gray-400 cursor-pointer">
              info@cuberto.com
            </p>
          </div>
          <div>
            <p className="underline  underline-offset-8 decoration-gray-400 cursor-pointer mt-9">
              Our workflow
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
