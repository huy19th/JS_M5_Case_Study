import { Link } from "react-router-dom";
import * as React from 'react';

export default function Modal({ showModal, setShowModal }) {

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-1/4 my-6 mx-auto max-w-sm">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                                <div className="flex flex-col justify-between p-5 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        Sign in to unlock more features
                                    </h3>
                                </div>
                                <div className="relative p-6 flex flex-row-reverse">
                                    <nav>
                                        <button className="text-lg font-semibold px-5"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Later
                                        </button>
                                        <Link to="/login"
                                            className="text-lg font-semibold text-black px-5 py-1 rounded-full bg-white"
                                        >
                                            Sign In
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}