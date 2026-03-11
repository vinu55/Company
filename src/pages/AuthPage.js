import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import NavBar from "../components/Navbar/NavBar";

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <NavBar />

      <div className="flex justify-center items-center py-20 px-4">
        
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">

          {/* Login */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Login
            </h2>

            <SignIn routing="path" path="/login" />
          </div>

          {/* Register */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Register
            </h2>

            <SignUp routing="path" path="/register" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthPage;