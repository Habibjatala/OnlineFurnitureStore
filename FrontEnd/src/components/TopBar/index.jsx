import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import logo from "../../assets/logo.jpeg";
import Modal from "../../common/Modal/LoginModal";

const TopBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="tobar">
      <Navbar fluid className="bg-black text-white py-6">
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img src={logo} alt="ingredentsXchange" width="150px" />
            {/* Shop Now */}
          </span>
        </Link>
        <div className="w-[50%] rounded">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="flex items-center bg-white pr-3 rounded">
              <input
                type="search"
                id="default-search"
                className="block mr-1 w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 outline-none"
                placeholder="Search entire store here"
                required
              />
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </form>
        </div>

        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* <Link to="/" active>
            Home
          </Link> */}

          <Link to="/" className="text-[16px]">
            Start Selling
          </Link>
          <Link to="/sign-up" className="text-[16px]">
            Sign Up for Free
          </Link>
          <div onClick={openModal} className="text-[16px] cursor-pointer">
            Sign In
          </div>
        </Navbar.Collapse>
      </Navbar>
      <div className="h-[1px] w-[100%] bg-white"></div>
      <div className="bg-black text-white py-3 navSubItems px-2 flex items-center justify-between text-[18px] max-[600px]:text-[14px] flex-wrap">
        <Dropdown
          label="Shop"
          className=""
          style={{
            backgroundColor: "transparent",
            // fontSize: "30px !important",
            fontWeight: "700",
          }}
          dismissOnClick={false}
        >
          <Dropdown.Item>Full Catalog</Dropdown.Item>
          <Dropdown.Item>Categories</Dropdown.Item>
          <Dropdown.Item>Applications</Dropdown.Item>
          <Dropdown.Item>Sold by IO</Dropdown.Item>
        </Dropdown>
        <Link to="/">Factories</Link>
        <Link to="/">Branded Ingredients</Link>
        <Link to="/">New Ingredients</Link>
        <Link to="/">Promotional Ingredients</Link>
        <Link to="/">Best Selling Products</Link>
        <Link to="/">IO Connect</Link>
        <Link to="/">Private Label</Link>
        <Link to="/">Book a Demo</Link>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default TopBar;
