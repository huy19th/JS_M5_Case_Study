import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../services/user';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const currentUser = useSelector(selectUser);
  const [err, setErr] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Required'),
      password: Yup.string().required('Password Required')
    }),
    onSubmit: async (values) => {
      try {
        await login(values);
        navigate('/');
      }
      catch (e) {
        setErr(e.message);
      }
    },
  });

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-gray-900"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="flex justify-center">
                      <img src={logo} alt="spotify_logo" className="h-10 ml-5" />
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-2 pt-0">
                    <form method="post" onSubmit={formik.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-red-500">{formik.errors.email}</div>
                        ) : null}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="text-red-500">{formik.errors.password}</div>
                        ) : null}
                        {err ? <div className="text-red-500">{err}</div> : null}
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-wrap my-5">
                    <div className="w-1/2">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="text-gray-900"
                      >
                        <small className="ml-5 pl-5">Forgot password?</small>
                      </Link>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link
                        to="/register"
                        // onClick={e => e.preventDefault()}
                        className="text-gray-900"
                      >
                        <small className="mr-5 pr-5">Register account</small>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
