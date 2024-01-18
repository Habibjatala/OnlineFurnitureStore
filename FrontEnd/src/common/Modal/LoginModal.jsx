import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart } from "../../redux/slice/userSlice";
const LoginModal = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.user.success);
  const navigate = useNavigate();

  const toSignUp = () => {
    navigate("/sign-up");
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const handleSubmit =  (e) => {
  //   e.preventDefault();
  //   console.log("Login Data", formData);
  //   dispatch(signInStart(formData));
  //   console.log("Wfghjk");

  //   setFormData({
  //     email: "",
  //     password: "",
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart(formData));
    } catch (error) {
      console.log("Sign Up Error", error);
    }
    console.log("Form Data", formData);
  };
  if (successMessage) {
    closeModal();
  }
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          // onClick={closeModal}
        >
          <div className="absolute  w-2/3 p-6 bg-white shadow-md">
            {/* Modal Header */}
            <div className="closeBtn flex justify-end  border-b pb-2">
              <IoCloseOutline
                className="text-[24px] cursor-pointer"
                onClick={closeModal}
              />
            </div>

            {/* Modal Body */}
            <div className="flex w-full">
              <div className="register w-[50%] flex flex-col gap-5 pr-7">
                <h1 className="text-[28px] font-semibold">Register</h1>
                <div className="content">
                  <h1 className="text-[14px]">
                    Creating an account has many benefits:
                  </h1>
                  <ul
                    // style={{ listStyle: "disc", paddingLeft: "15px" }}
                    className="list-disc	pl-[15px] py-[5px]"
                  >
                    <li>See order and shipping status</li>
                    <li>Track order history</li>
                    <li>Check out faster</li>
                    <li>And much more!</li>
                  </ul>
                </div>
                <div
                  className="register text-white flex items-center text-center justify-end cursor-pointer"
                  onClick={toSignUp}
                >
                  <h1 className=" bg-[#72BF44] w-[170px] py-2 rounded">
                    Create An Account
                  </h1>
                </div>
              </div>
              <div className="login w-[50%] flex flex-col gap-5 justify-between">
                <h1 className="text-[28px] font-semibold">Log In</h1>
                <form onSubmit={handleSubmit}>
                  <div className="formFields">
                    <div className="field flex flex-col">
                      <label for="email" className="text-[14px] gap-1">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="email"
                        value={formData.email}
                        name="email"
                        className=" border-2 p-1"
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="field flex flex-col">
                      <label for="password" className="text-[14px] gap-1">
                        Password
                      </label>
                      <input
                        id="password"
                        value={formData.password}
                        name="password"
                        className=" border-2 p-1"
                        onChange={handleChange}
                      ></input>
                    </div>
                  </div>

                  <div className="bottom flex items-center gap-5 justify-end">
                    <div className="underline text-[#72BF44] cursor-pointer">
                      Forget Your Password?
                    </div>
                    <input
                      type="submit"
                      className="py-2 w-[180px] bg-[#72BF44] text-white font-bold rounded"
                      // value="login"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
