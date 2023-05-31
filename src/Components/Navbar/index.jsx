import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

 useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    <nav className={`h-40 bg-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0
     left-0 transition-transform duration-700 ease-in-out transform translate-y-0 scroll-hide
     ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <ul className="flex items-center gap-3">
        <li className="flex">
          <NavLink to="/"></NavLink>
          {/* menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
         
        </li>
      </ul>

      <ul className="flex ">
        <img
          className="w-full h-40 mr-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9dqdnVXkrnk-DizHUu-a-SuiF3XWqhULbA&usqp=CAU" />
        
      </ul>
    </nav>
    
  );
};

export default Navbar;
