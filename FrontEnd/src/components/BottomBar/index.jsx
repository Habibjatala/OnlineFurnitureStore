import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Accordion } from "flowbite-react";

function BottomBar() {
  return (
    <div className="footerContainer px-4 py-7 bg-black border-box flex  flex-col lg:flex-row justify-between items-center gap-y-4">
      <div className="max-[600px]:hidden left flex grow gap-6">
        <div className="text-white flex flex-col gap-y-3">
          <div className="text-white font-bold">BUY</div>
          <h1 className="text-[14px] underline cursor-pointer">Registration</h1>
          <h1 className="text-[14px] underline cursor-pointer">Benifits</h1>
          <h1 className="text-[14px] underline cursor-pointer">Factories</h1>
        </div>
        <div className="text-white flex flex-col gap-y-3">
          <div className="text-white font-bold">SELL</div>
          <h1 className="text-[14px] underline cursor-pointer">
            Become a Seller
          </h1>
          <h1 className="text-[14px] underline cursor-pointer">
            Seller Portal
          </h1>
        </div>
        <div className="About flex flex-col gap-y-3">
          <div className="text-white font-bold">ABOUT</div>
          <div className="text-white flex flex-col gap-y-3">
            <h1 className="text-[14px] underline cursor-pointer">About</h1>
            <h1 className="text-[14px] underline cursor-pointer">FAQs</h1>
            <h1 className="text-[14px] underline cursor-pointer">Contact Us</h1>
            <h1 className="text-[14px] underline cursor-pointer">Carrer</h1>
          </div>
        </div>
        <div className="text-white flex flex-col gap-y-3">
          <div className="text-white font-bold">Resources</div>
          <h1 className="text-[14px] underline cursor-pointer">Events</h1>
          <h1 className="text-[14px] underline cursor-pointer">Blogs</h1>
          <h1 className="text-[14px] underline cursor-pointer">
            Market Trends
          </h1>
          <h1 className="text-[14px] underline cursor-pointer">Reviews</h1>
        </div>
        <div className="text-white flex flex-col gap-y-3">
          <div className="text-white font-bold">INFO</div>
          <h1 className="text-[14px] underline cursor-pointer">
            Privacy & Security
          </h1>
          <h1 className="text-[14px] underline cursor-pointer">
            Shipping & Returns
          </h1>
          <h1 className="text-[14px] underline cursor-pointer">
            Terms & Conditions
          </h1>
        </div>
        <div className="FollowUs flex text-white flex-col gap-y-3">
          <div className="font-bold">FOLLOW US</div>
          <div className="flex items-center gap-x-1   text-white">
            <div className="logo">
              <FaFacebookF />
            </div>
            <div className="text-[13px] underline cursor-pointer">Facebook</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="logo ">
              <BsInstagram />
            </div>
            <div className="text-[13px] underline cursor-pointer">
              Instagram
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="logo ">
              <FaLinkedinIn />
            </div>
            <div className="text-[13px] underline cursor-pointer">LinkedIn</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="logo ">
              <FaTwitter />
            </div>
            <div className="text-[13px] underline cursor-pointer">Twitter</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="logo ">
              <FaYoutube />
            </div>
            <div className="text-[13px] underline cursor-pointer">YouTube</div>
          </div>
        </div>
      </div>
      <div className="min-[600px]:hidden w-full">
        <Accordion collapseAll className="border border-0 rounded-0">
          <Accordion.Panel className="border border-0 rounded-t-[0px]">
            <Accordion.Title className="focus:ring-0">Buy</Accordion.Title>
            <Accordion.Content className="text-white ">
              <h1 className="text-[14px] underline cursor-pointer">
                Registration
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">Benifits</h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Factories
              </h1>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">Sell</Accordion.Title>
            <Accordion.Content className="text-white ">
              <h1 className="text-[14px] underline cursor-pointer">
                Become a Seller
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Seller Portal
              </h1>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">About</Accordion.Title>
            <Accordion.Content className="text-white ">
              <h1 className="text-[14px] underline cursor-pointer">About</h1>
              <h1 className="text-[14px] underline cursor-pointer">FAQs</h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Contact Us
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">Carrer</h1>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Resources
            </Accordion.Title>
            <Accordion.Content className="text-white ">
              <h1 className="text-[14px] underline cursor-pointer">Events</h1>
              <h1 className="text-[14px] underline cursor-pointer">Blogs</h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Market Trends
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">Reviews</h1>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">Info</Accordion.Title>
            <Accordion.Content className="text-white ">
              <h1 className="text-[14px] underline cursor-pointer">
                Privacy & Security
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Shipping & Returns
              </h1>
              <h1 className="text-[14px] underline cursor-pointer">
                Terms & Conditions
              </h1>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0">
              Follow Us
            </Accordion.Title>
            <Accordion.Content className="text-white">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-1   text-white">
                  <div className="logo">
                    <FaFacebookF />
                  </div>
                  <div className="text-[13px] underline cursor-pointer">
                    Facebook
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="logo ">
                    <BsInstagram />
                  </div>
                  <div className="text-[13px] underline cursor-pointer">
                    Instagram
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="logo ">
                    <FaLinkedinIn />
                  </div>
                  <div className="text-[13px] underline cursor-pointer">
                    LinkedIn
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="logo ">
                    <FaTwitter />
                  </div>
                  <div className="text-[13px] underline cursor-pointer">
                    Twitter
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="logo ">
                    <FaYoutube />
                  </div>
                  <div className="text-[13px] underline cursor-pointer">
                    YouTube
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      <div className="right min-[1024px]:w-[320px] w-[450px] max-[500px]:w-[300px] bg-[#D26338] p-4 ">
        <div className="e-newsLetter flex flex-col gap-3">
          <div className="text-white text-[13px] font-bold">
            SIGN UP FOR OUR E-NEWSLETTER
          </div>
          <div className="inputField flex items-center w-full">
            <input className="w-full p-1" />
            <div className="arrowBtn bg-[#033049] p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomBar;
