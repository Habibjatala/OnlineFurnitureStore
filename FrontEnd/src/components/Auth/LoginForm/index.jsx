import React, { useState, useRef } from "react";
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Modal,
} from "flowbite-react";

import { signInStart } from "../../../redux/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const cancelButtonRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const User = useSelector((state) => state.user);
  console.log("USer", User);
  const dispatch = useDispatch();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      await dispatch(signInStart({ email, password }));
      setTimeout(() => {
        setEmail("");
        setPassword("");
      }, 500);
    } catch (error) {
      console.log("Form Error", error);
    }
  };
  return (
    <div className="signin pt-6 flex items-center justify-center w-full pt-[50px]">
      <Card className="max-w-full card ">
        <form className="flex flex-col gap-4 " style={{ width: "400px" }}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            {/* <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label> */}
          </div>
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
