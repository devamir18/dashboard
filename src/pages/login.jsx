import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [staff, setStaff] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [show, setShow] = useState(false);

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

    if (rememberMe) {
      localStorage.setItem("staffId", staff);
      localStorage.setItem("staffPassword", password);
    } else {
      localStorage.removeItem("staffId");
      localStorage.removeItem("staffPassword");
    }

    console.log("Login successful:", staff);
    alert("Login Successful!");
    navigate("/dashboard");
  };

 

  return (
    <>
      <div className="h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT SECTION */}
          <div className="flex justify-center border-r-1 border-gray-100 py-60">
            <h2 className="text-6xl font-bold text-slate-700 font-sans shadow tracking-tight">
              Max Hr <br />
              Login Systems
            </h2>
          </div>

          {/* RIGHT SECTION */}
          <div className="h-150 flex justify-center border-b-1 border-gray-100 items-center z-40">
            <div className="w-120 bg-white/15 shadow-2xl h-130 rounded-2xl bg-gradient-to-b from-slate-900 to-teal-700">
              <h2 className="text-center py-20 text-xl md:text-3xl font-bold text-slate-200">
                Welcome Back
              </h2>
              <p className="-mt-18 text-center text-slate-300 text-sm font-semibold">
                Login In To Your Dashboard To Continue
              </p>

              {/* FORM */}
              <div className="flex justify-center items-center">
                <form className="flex flex-col" onSubmit={handleLogin}>
                  {!show && (
                    <div className="flex flex-col">
                      <span className="mt-6 font-semibold text-slate-100">
                        Staff Id:
                      </span>
                      <input
                        type="text"
                        placeholder="Staff Id"
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        required
                        className="w-80 h-10 px-4 text-base mt-4 rounded text-slate-100 border-1 border-slate-200"
                      />

                      <span className="mt-6 font-semibold text-slate-100">
                        Password:
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-80 h-10 px-4 text-base mt-4 rounded border-1 text-slate-100 border-slate-200"
                      />

                      <div className="flex flex-cols-3 m-auto gap-3">
                        <hr className="text-slate-200 w-30 h-1 mt-6" />
                        <button
                          type="button"
                          className="py-3 text-sm font-semibold text-slate-200 hover:scale-95"
                          onClick={() => setShow(true)}
                        >
                          Sign-up
                        </button>
                        <hr className="text-slate-200 w-30 mt-6 h-1" />
                      </div>

                      
                      <div className="flex justify-between px-4">
                        <label className="remember-me text-slate-100 font-semibold">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                          />
                          &nbsp;Remember Me
                        </label>

                        <span className="font-semibold text-slate-100">
                          Forgot password?
                        </span>
                      </div>

                      
                      <div className="flex justify-center items-center mt-6">
                        <button
                          type="submit"
                          className="w-90 h-10 rounded bg-teal-600 text-white font-semibold hover:scale-105"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SIGNUP FORM */}
                  {show && (
                    <div className="flex flex-col">
                      <span className="mt-6 font-semibold text-slate-700">
                        Staff Id:
                      </span>
                      <input
                        type="text"
                        placeholder="Staff Id"
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        required
                        className="w-80 h-10 px-4 text-base mt-2 rounded border-1 border-slate-200"
                      />

                      <span className="mt-4 font-semibold text-slate-700">
                        Password:
                      </span>
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-80 h-10 px-4 text-base mt-2 rounded border-1 border-slate-200"
                      />

                      <span className="mt-3 font-semibold text-slate-700">
                        Confirm Password:
                      </span>
                      <input
                        type="password"
                        required
                        className="w-80 h-10 px-4 text-base mt-4 rounded border-1 border-slate-200"
                      />

                      <div className="flex justify-center items-center mt-6">
                        <button
                          type="button"
                          className="w-90 h-10 rounded bg-teal-600 text-white font-semibold"
                        >
                          Signup
                        </button>
                      </div>
                    </div>
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
