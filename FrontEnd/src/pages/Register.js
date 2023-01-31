import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/user';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      imageUser: null
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email Required'),
      password: Yup.string().required('Password Required')
    }),
    onSubmit: async (values) => {
      try {
        await register(values);
        navigate('/login');
      }
      catch(e) {
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
                    <h2 className="mt-3 text-gray-700 text-center font-bold">Register to access more features</h2>
                    <hr className="mt-2 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-2 pt-0">
                    <form method="post" onSubmit={formik.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email *
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
                          Password *
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

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                          {...formik.getFieldProps('name')}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          style={{ transition: "all .15s ease" }}
                          name="imageUser"
                          accept="image/*"
                          onChange={e => {
                            formik.setFieldValue('imageUser', e.currentTarget.files[0])
                          }}
                          
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex justify-center my-3">
                    <div>
                      <Link
                        to="/login"
                        className="text-gray-900"
                      >
                        <small>Already have an account? Sign In</small>
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
