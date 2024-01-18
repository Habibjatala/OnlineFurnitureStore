import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  registerStart,
  registerFailure,
  registerSuccess,
  signInStart,
  signInSuccess,
  signInFailure,
} from "../slice/userSlice";
function* registerUser(action) {
  try {
    const {
      companyName,
      companyWebsite,
      haveASite,
      email,
      phone,
      certification,
      streetAddress1,
      streetAddress2,
      postalCode,
      country,
      isAdmin,
      hearAboutUs,
      firstName,
      lastName,
      jobTitle,
      password,
    } = action.payload;

    const response = yield call(
      axios.post,
      "http://localhost:4000/api/auth/register",
      {
        companyName,
        companyWebsite,
        haveASite,
        email,
        phone,
        certification,
        streetAddress1,
        streetAddress2,
        postalCode,
        country,
        isAdmin,
        hearAboutUs,
        firstName,
        lastName,
        jobTitle,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    yield put(registerSuccess(response.data));
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("The Response is:", response.data.message);
    // } catch (error) {
    //   console.log("Error", error);
    // }
    toast(response?.data?.message);
  } catch (error) {
    yield put(registerFailure(error));
  }
}

function* signInUser(action) {
  try {
    const { password, email } = action.payload;
    const response = yield call(
      axios.post,
      "http://localhost:4000/api/auth/login",
      {
        password,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    yield put(signInSuccess(response.data));
    console.log("Respone Login", response.data);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
      // window.location.href = "/";
    }

    toast("Sign In Successfully !");
  } catch (error) {
    console.log("Iam Error");
    console.log("Error", error?.response?.data);
    yield put(signInFailure(error?.response?.data));
    toast(error?.response?.data?.message);
  }
}

function* watchRegisterUser() {
  yield takeLatest(registerStart.type, registerUser);
}
function* watchSignInUser() {
  yield takeLatest(signInStart.type, signInUser);
}
export { watchRegisterUser, watchSignInUser };
