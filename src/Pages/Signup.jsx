import React from "react";
import { Layout } from "../components/Layout";
import join from "../assets/Sign up-bro2.png";
import { Button } from "../components/Button";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <>
      <Layout>
        <div className="Home text-center flex flex-col md:flex-row py-10">
          <div className="md:w-1/2 px-10 place-items-center flex">
            <img src={join} alt="" srcset="" />
          </div>
          <div className="flex flex-col md:w-1/2 px-10 py-10 gap-6 my-auto">
              {/* to="http://localhost:8080/auth/google" */}
            <Link to="https://salva-vjxd.onrender.com/auth/google" className="flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer">
              {/* <Link to="http://localhost:8080/auth/google"> */}
                <Button title={<FaGoogle />} btnstyles="py-3 rounded-full" />
                <Button title="Create an Account" btnstyles="" />
            </Link>
            <div className="flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer">
              <Button title={<FaTwitter />} btnstyles="py-3 rounded-full" />
              <Button title="Create an Account" btnstyles="" />
            </div>
            <div className="flex place-content-center gap-4 py-2 px-10 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4 cursor-pointer">
              <Button title={<FaFacebookF />} btnstyles="py-3 rounded-full" />
              <Button title="Create an Account" btnstyles="" />
            </div>
            <div>
              Already have an account?{" "}
              <Link to="/login" className="text-white hover:text-button">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
