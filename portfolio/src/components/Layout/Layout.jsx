import { useEffect, useState } from "react";
//packages
import { NavLink, Outlet } from "react-router-dom";
//custom hooks
import useTheme from "../../hooks/useTheme";
//constants
import { menu } from "../../constants/constants";
//icons
import { LiaSun } from "react-icons/lia";
import { FaMoon } from "react-icons/fa";

const Layout = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* start theme btn */}
      <div className="fixed top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 cursor-pointer z-40 bg-silver rounded-full flex items-center justify-center dark:bg-item-dark dark:text-white">
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
      <nav className="fixed inset-x-0 bottom-0 bg-white p-2 shadow-nav-shadow dark:shadow-none dark:bg-item-dark lg:bg-transparent lg:inset-x-auto lg:bottom-none lg:p-0 lg:dark:bg-transparent lg:shadow-none lg:top-1/2 lg:right-8 lg:-translate-y-1/2 z-30 ">
        <div className="flex items-center justify-around lg:space-y-9 lg:block">
          {menu.map((item) => (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "menu-item--active menu-item group"
                  : "menu-item group"
              }
              key={item.id}
            >
              {item.icon}
              <h2 className="menu-item-text">{item.title}</h2>
            </NavLink>
          ))}
        </div>
      </nav>
      {/* end menu */}

      <Outlet />
    </>
  );
};

export default Layout;
