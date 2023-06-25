import { useEffect, useState } from "react";
//packages
import { Outlet } from "react-router-dom";
//custom hooks
import useTheme from "../../hooks/useTheme";
//icons
import {
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaMoon,
  FaUserAlt,
} from "react-icons/fa";
import { LiaSun } from "react-icons/lia";

const Layout = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* start theme btn */}
      <div className="fixed top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 cursor-pointer z-40 bg-btn-bg rounded-full flex items-center justify-center dark:bg-item-dark dark:text-white">
        {theme === "dark" ? (
          <LiaSun
            className="block text-txt-gray w-6 h-6 dark:text-white"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FaMoon
            className="block text-txt-gray w-6 h-6 dark:text-white"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
      {/* end theme btn */}
      {/* start menu */}
      <nav className="fixed inset-x-0 bottom-0 bg-white p-2 shadow-nav-shadow dark:shadow-none dark:bg-item-dark lg:inset-x-auto lg:bottom-none lg:p-0 lg:dark:bg-transparent lg:shadow-none lg:top-1/2 lg:right-8 lg:-translate-y-1/2 z-30 ">
        <ul className="flex items-center justify-around lg:space-y-9 lg:block">
          <li className="menu-item group">
            <FaHome className="menu-iten-icon" />
            <h2 className="menu-item-text ">خانه</h2>
          </li>
          <li className="menu-item group">
            <FaUserAlt className="menu-iten-icon" />
            <h2 className="menu-item-text">درباره من</h2>
          </li>
          <li className="menu-item group">
            <FaBriefcase className="menu-iten-icon" />
            <h2 className="menu-item-text">نمونه کار ها</h2>
          </li>
          <li className="menu-item group">
            <FaEnvelopeOpen className="menu-iten-icon" />
            <h2 className="menu-item-text">ارتباط با من</h2>
          </li>
        </ul>
      </nav>
      {/* end menu */}

      <Outlet />
    </>
  );
};

export default Layout;
