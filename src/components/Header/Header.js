import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SidebarContext } from "context/SidebarContext";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "icons";
import { MdLanguage as LanguageIcon } from "react-icons/md";

import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import LogoLink from "./LogoLinks.js";
import NavLink from "./NavLink.js";

const Header = () => {
  const { t, i18n } = useTranslation();

  const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);

  const [isLanguagesMenuOpen, setIsLanguagesMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  function handleLanguagesClick() {
    setIsLanguagesMenuOpen(!isLanguagesMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  let classname =
    "z-40 pt-8 pb-4 bg-white transition duration-200 w-full sticky top-0 dark:bg-gray-900 ";
  if (scroll) {
    classname += "shadow-bottom";
  }

  return (
    <div className={classname}>
      <div className="container px-6 flex items-center justify-between h-full mx-auto text-black dark:text-gray-300">
        {/* <!-- Logo link --> */}
        <LogoLink />
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        {/* <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div> */}
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <NavLink>{t("header.home")}</NavLink>
          <NavLink>{t("header.members")}</NavLink>
          <NavLink>{t("header.research")}</NavLink>
          <NavLink>{t("header.teaching")}</NavLink>
          <div className="w-10" />
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </li>
          {/* <!-- Languages menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none"
              onClick={handleLanguagesClick}
              aria-label="Languages"
              aria-haspopup="true"
            >
              <LanguageIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Language badge --> */}
              {/* <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span> */}
            </button>

            <Dropdown
              align="right"
              isOpen={isLanguagesMenuOpen}
              onClose={() => setIsLanguagesMenuOpen(false)}
            >
              <DropdownItem
                className="focus:outline-none"
                onClick={() => i18n.changeLanguage('en').then(handleLanguagesClick)}
              >
                <span>English</span>
              </DropdownItem>
              <DropdownItem
                className="focus:outline-none"
                onClick={() => i18n.changeLanguage('zh-TW').then(handleLanguagesClick)}
              >
                <span>繁體中文</span>
              </DropdownItem>
              <DropdownItem
                className="focus:outline-none"
                onClick={() => i18n.changeLanguage('zh-CN').then(handleLanguagesClick)}
              >
                <span>简体中文</span>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#">
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")}>
                <OutlineLogoutIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
