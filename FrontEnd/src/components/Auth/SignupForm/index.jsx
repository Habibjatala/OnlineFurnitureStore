import { React, useState } from "react";
import { Button, Card, Label, TextInput, Select } from "flowbite-react";
import { registerStart } from "../../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { RiErrorWarningLine } from "react-icons/ri";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    haveASite: false,
    phone: "",
    certification: "",
    streetAddress1: "",
    streetAddress2: "",
    postalCode: "",
    country: "",
    hearAboutUs: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(registerStart(formData));
    } catch (error) {
      console.log("Sign Up Error", error);
    }
    console.log("Form Data", formData);
  };
  return (
    // <div className="signup flex items-center justify-center w-full pt-[50px]">
    //   <Card className=" card ">
    //     <form
    //       onSubmit={handleSubmit}
    //       className="flex flex-col gap-4"
    //       style={{ width: "400px" }}
    //     >
    //       <div className="w-full">
    //         <div className="mb-2 block">
    //           <Label htmlFor="username" value="User Name" />
    //         </div>
    //         <TextInput
    //           id="username"
    //           type="text"
    //           placeholder="username"
    //           value={username}
    //           onChange={handleusername}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <div className="mb-2 block">
    //           <Label htmlFor="email1" value="Your email" />
    //         </div>
    //         <TextInput
    //           id="email1"
    //           type="email"
    //           placeholder="name@flowbite.com"
    //           value={email}
    //           onChange={handleEmail}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <div className="mb-2 block">
    //           <Label htmlFor="phone" value="Phone Number" />
    //         </div>
    //         <TextInput
    //           id="phone"
    //           type="phone"
    //           placeholder="Enter Phone Number"
    //           value={phone}
    //           onChange={handlePhone}
    //           required
    //         />
    //       </div>
    //       <div>
    //         <div className="mb-2 block">
    //           <Label htmlFor="password1" value="Your password" />
    //         </div>
    //         <TextInput
    //           id="password1"
    //           type="password"
    //           value={password}
    //           onChange={handlePassword}
    //           required
    //         />
    //       </div>
    //       <div className="flex items-center gap-2">
    //         {/* <Checkbox id="remember" />
    //         <Label htmlFor="remember">Remember me</Label> */}
    //       </div>
    //       <Button type="submit" onClick={handleSubmit}>
    //         Submit
    //       </Button>
    //     </form>
    //   </Card>
    // </div>
    <div className="py-5 px-10 w-full">
      <h1 className="font-bold text-center text-[28px] pb-[20px]">
        Create An Account
      </h1>
      <div className="formContent flex flex-col w-full gap-5">
        <div className="warning flex items-center shadow rounded-lg p-3 gap-3 border">
          <div className="warningIcon px-2 border-r-2 border-gray">
            <RiErrorWarningLine className="text-[28px]" />
          </div>
          <div className="warningText text-[14px]">
            We do not sell directly to consumers. Our products are sold in bulk
            form and transformed into a consumer product by other manufacturers.
          </div>
        </div>

        <form
          className="signupForm companyInfo flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div className="companyInfo shadow-lg rounded-lg px-3 py-4 border">
            <div>
              <h1>Company Information</h1>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label for="companyName">
                <span className="text-[#FF0000]">*</span>
                <span className="text-[#999999] text-[15px]">COMPANY</span>
              </label>
              <input
                type="text"
                id="companyName"
                className="border-2 border-gray text-[15px] p-1"
                value={formData?.companyName}
                name="companyName"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label for="companyWebsite">
                <span className="text-[#999999] text-[15px]">
                  COMPANY WEBSITE
                </span>
              </label>
              <input
                type="text"
                className="border-2 border-gray text-[15px] p-1"
                id="companyWebsite"
                value={formData?.companyWebsite}
                onChange={handleChange}
                name="companyWebsite"
              ></input>
              <div className="description">
                <p className="text-[#999999] text-[13px]">
                  Each registration application must include a website address
                  that matches your email signature. If you do not enter a
                  website or the signature does not match, we will contact you
                  for additional information to assist you in the qualification
                  process
                </p>
              </div>
              <div className="notHaveASite flex items-center gap-[14px]">
                <input
                  type="checkbox"
                  id="notHaveASite"
                  name="haveASite"
                  value={formData?.haveASite}
                ></input>
                <label
                  for="notHaveAccount"
                  className="text-[14px] text-[#999999]"
                >
                  I DO NOT HAVE A COMPANY WEBSITE
                </label>
              </div>
              <div className="twoFields max-[550px]:flex-col flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%] ">
                  <label for="phoneNumber">
                    <span className="text-[#FF0000]">*</span>{" "}
                    <span className="text-[#999999] text-[15px]">
                      PHONE NUMBER
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="phoneNumber"
                    value={formData?.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="certification">
                    <span className="text-[#999999] text-[15px]">
                      RESALE CERTIFICATION # &nbsp;
                    </span>
                    <span className="text-[#FF0000]">
                      (ONLY FOR US-BASED VENDORS)
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="certification"
                    name="certification"
                    value={formData?.certification}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="streetAddress1">
                    <span className="text-[#FF0000]">*</span>{" "}
                    <span className="text-[#999999] text-[15px]">
                      STREET ADDRESS 1
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="streetAddress1"
                    name="streetAddress1"
                    value={formData?.streetAddress1}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="streetAddress2">
                    <span className="text-[#999999] text-[15px]">
                      STREET ADDRESS 2 &nbsp;
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="streetAddress2"
                    name="streetAddress2"
                    value={formData?.streetAddress2}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="postalCode">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">
                      ZIP/POSTAL CODE
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="phoneNumber"
                    value={formData?.postalCode}
                    name="postalCode"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="country">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">COUNTRY</span>
                  </label>
                  <select
                    id="country"
                    className="p-1 border-2 border-gray"
                    value={formData?.country}
                    name="country"
                    onChange={handleChange}
                    required
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="aboutUs">
                    <span className="text-[#FF0000]">*</span>{" "}
                    <span className="text-[#999999] text-[15px]">
                      HOW DID YOU HEAR ABOUT US
                    </span>
                  </label>
                  <select
                    id="aboutUs"
                    className="p-1 border-2 border-gray"
                    name="aboutUs"
                    value={formData?.aboutUs}
                    onChange={handleChange}
                    required
                  >
                    <option>Marketing/Flyer</option>
                    <option>Reference</option>
                    <option>Web Research</option>
                    <option>Connexima</option>
                    <option>Press Release</option>
                    <option>IO Magzine</option>
                    <option>Thomasnet.com </option>
                    <option>Sales Rep</option>
                  </select>
                </div>
              </div>
              <div className="h-[1px] bg-[#999999] w-full my-6"></div>
              <div className="disclaimer text-[#999999] text-[14px]">
                Disclaimer: All sales require a valid resale certificate. Orders
                cannot be released until a valid resale certificate has been
                received. Orders placed without a valid resale certificate are
                subject to cancellation at the discretion of Ingredients Online.
              </div>
            </div>
          </div>
          <div className="contactInfo shadow-lg rounded-lg px-3 py-4 border">
            <div>
              <h1>Contact Information</h1>
            </div>

            <div className="w-full flex flex-col gap-2">
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="firstName">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">
                      FIRST NAME
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="firstName"
                    value={formData?.firstName}
                    onChange={handleChange}
                    name="firstName"
                    required
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="lastName">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">
                      LAST NAME &nbsp;
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="lastName"
                    value={formData?.lastName}
                    onChange={handleChange}
                    name="lastName"
                    required
                  ></input>
                </div>
              </div>
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="jobTitle">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">
                      JOB TITLE
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData?.jobTitle}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="emailAddress">
                    <span className="text-[#FF0000]">*</span>
                    <span className="text-[#999999] text-[15px]">
                      EMAIL ADDRESS
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border-2 border-gray text-[15px] p-1"
                    id="emailAddress"
                    value={formData?.email}
                    onChange={handleChange}
                    name="email"
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="contactInfo shadow-lg rounded-lg px-3 py-4 border">
            <div>
              <h1>Create a Password</h1>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="twoFields max-[550px]:flex-col max-[550px]:w-full flex w-full  gap-5">
                <div className="firstField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="password">
                    <span className="text-[#999999] text-[15px]">PASSWORD</span>
                  </label>
                  <input
                    type="password"
                    className="border-2 border-gray text-[15px] p-1"
                    id="password"
                    value={formData?.password}
                    name="password"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="secondField max-[550px]:w-full flex flex-col w-[50%]">
                  <label for="confirmPassword">
                    <span className="text-[#999999] text-[15px]">
                      RE-ENTER PASSWORD
                    </span>
                  </label>
                  <input
                    type="password"
                    className="border-2 border-gray text-[15px] p-1"
                    id="confirmPassword"
                    value={formData?.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <input
              type="submit"
              className="py-2 w-[180px] bg-[#72BF44] text-white font-bold rounded"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
