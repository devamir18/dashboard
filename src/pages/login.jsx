import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function hashPassword(password) {
  return btoa(password); 
}

export default function Login() {
  const [staff, setStaff] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  
  useEffect(() => {
    const savedStaff = localStorage.getItem("staffId");
    const savedPassword = localStorage.getItem("staffPassword");

    if (savedStaff && savedPassword) {
      setStaff(savedStaff);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const hashed = hashPassword(password);

    const isValidUser = users.some(
      (u) => u.staff === staff && u.password === hashed
    );

    if (!isValidUser) {
      setError("Invalid staff ID or password.");
      return;
    }

    
    if (rememberMe) {
      localStorage.setItem("staffId", staff);
      localStorage.setItem("staffPassword", password);
    } else {
      localStorage.removeItem("staffId");
      localStorage.removeItem("staffPassword");
    }

    
    localStorage.setItem("loggedIn", "true");

    alert("Login Successful!");

    navigate("/dashboard");
  };


  const handleSignup = () => {
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

  
    if (users.some((u) => u.staff === staff)) {
      setError("Staff already exists.");
      return;
    }

    const hashed = hashPassword(password);

    users.push({ staff, password: hashed });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Logging you in...");

    
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("staffId", staff);
    localStorage.setItem("staffPassword", password);

    navigate("/dashboard");
  };

  return (
    <>
      <div className="h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">

          
          <div className="flex justify-center border-r-1 border-gray-100 py-60">
            <h2 className="text-6xl font-bold text-slate-700 font-sans shadow tracking-tight">
              Max Hr <br />
              Login Systems
            </h2>
          </div>

        
          <div className="h-150 flex justify-center items-center border-b-1 border-gray-100">

            <div className="w-120 shadow-2xl h-130 rounded-2xl bg-gradient-to-b from-slate-900 to-teal-700">
              <h2 className="text-center py-16 text-3xl font-bold text-slate-200">
                {showSignup ? "Create Account" : "Welcome Back"}
              </h2>

              <p className="text-center text-slate-300 text-sm font-semibold -mt-12">
                {showSignup ? "Register to continue" : "Login to your dashboard"}
              </p>

              {error && (
                <p className="text-red-400 text-center mt-4 font-semibold">
                  {error}
                </p>
              )}

              
              <div className="flex justify-center">
                <form className="flex flex-col" onSubmit={handleLogin}>
                  
                
                  {!showSignup && (
                    <>
                      <label className="mt-6 text-slate-100 font-semibold">
                        Staff ID
                      </label>
                      <input
                        type="text"
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        required
                        className="w-80 h-10 mt-2 px-4 rounded border text-white"
                      />

                      <label className="mt-6 text-slate-100 font-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-80 h-10 mt-2 px-4 rounded border text-white"
                      />

                      <div className="flex justify-between mt-4 px-2 text-slate-200">
                        <label className="font-semibold">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                          &nbsp;Remember Me
                        </label>

                        <button
                          type="button"
                          className="font-semibold"
                          onClick={() => setShowSignup(true)}
                        >
                          Sign Up
                        </button>
                      </div>

                      <button
                        type="submit"
                        className="w-90 h-10 mt-6 rounded bg-teal-600 text-white font-semibold hover:scale-105"
                      >
                        Login
                      </button>
                    </>
                  )}

                 
                  {showSignup && (
                    <>
                      <label className="mt-6 text-slate-100 font-semibold">
                        Staff ID
                      </label>
                      <input
                        type="text"
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        required
                        className="w-80 h-10 mt-2 px-4 rounded border text-white"
                      />

                      <label className="mt-4 text-slate-100 font-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-80 h-10 mt-2 px-4 rounded border text-white"
                      />

                      <label className="mt-4 text-slate-100 font-semibold">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-80 h-10 mt-2 px-4 rounded border text-white"
                      />

                      <button
                        type="button"
                        onClick={handleSignup}
                        className="w-90 h-10 mt-6 rounded bg-teal-600 text-white font-semibold"
                      >
                        Signup
                      </button>

                      <button
                        type="button"
                        className="text-slate-200 text-sm mt-4"
                        onClick={() => setShowSignup(false)}
                      >
                        Already have an account? Login
                      </button>
                    </>
                  )}

                </form>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
