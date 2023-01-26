import { NavLink } from 'react-router-dom';
import { Icon } from '../../icons/Icons';
import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addPlaylist } from '../../services/playlist';

function CreatePlaylist() {
    const [showModal, setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            isPrivate: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Playlist name required'),
            isPrivate: Yup.string()
        }),
        onSubmit: values => {
            addPlaylist(values);
            setShowModal(false);
            formik.resetForm();
        },
    });

    return (
        <nav className='mt-6'>
            <ul>
                <li>
                    <NavLink to={'#'} className='py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white' onClick={() => setShowModal(true)}>
                        <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 text-black rounded-sm group-hover:bg-opacity-100'>
                            <Icon name="plus" size={12} />
                        </span>
                        Create Playlist
                    </NavLink>
                </li>
            </ul>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    // onBlur={() => { setShowModal(false); formik.setTouched({['name']: false}) }}
                    >
                        <div className="relative w-1/4 my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl font-semibold">
                                        New Playlist
                                    </h3>
                                    <button
                                        className="pl-5 pb-2 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none justify-center"
                                        onClick={() => {
                                            setShowModal(false);
                                            formik.resetForm();
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <form
                                        onSubmit={formik.handleSubmit}
                                    >
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Playlist name"
                                            className="input w-full max-w-xs bg-transparent p-3 text-md border rounded border-stone-500"
                                            autoFocus
                                            {...formik.getFieldProps('name')}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div>{formik.errors.name}</div>
                                        ) : null}
                                        <select className="input w-full max-w-xs bg-transparent p-3 my-3 text-md border rounded border-stone-500"
                                            id="isPrivate"
                                            {...formik.getFieldProps('isPrivate')}
                                        >
                                            <option value="1" selected className="input w-full max-w-xs bg-black p-3 text-md">Private</option>
                                            <option value="0" className="input w-full max-w-xs bg-black p-3 text-md">Public</option>
                                        </select>
                                        <button type="submit" className="float-right bg-stone-800 rounded py-3 px-5">Create</button>
                                    </form>
                                </div>
                                {/*footer*/}

                                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </nav>
    )
}

export default CreatePlaylist