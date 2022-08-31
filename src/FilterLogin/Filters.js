import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function Filters({ getFilter }) {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false);
    const click = () => {
        setOpen(true)
    }
    const click2 = () => {
        setOpen(false)
    }
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>

            <button onClick={click} className="bg-emerald-500 text-orange-100 rounded-xl w-36 h-12 font-assistant font-bold text-md">
                Prijavite se
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="bg-emerald-500 text-center w-2/6 h-auto m-auto mb-80 rounded-3xl">
                                <div className="font-bold text-4xl p-9 text-orange-200 font-assistant">Dobrodošli u BookShop</div>
                                <div style={{ marginLeft: '90px', marginRight: '90px', paddingBottom: '40px' }}>
                                    <label className="block text-left text-xl text-orange-100 mb-3 font-bold font-assistant">
                                        Email
                                    </label>
                                    <input className="block w-full rounded-lg p-3 mb-3 font-assistant" placeholder="Enter Email" />
                                    <label className="block text-orange-100 text-left font-bold mb-3 text-xl font-assistant">
                                        Password
                                    </label>
                                    <input type={showPassword ? "text" : "password"} className="block w-full rounded-lg p-3 pb-3 font-assistant" placeholder="Enter Password" />
                                    <button onClick={togglePassword}><FontAwesomeIcon style={{position:'relative', top:'-33', left:'130'}} className="text-gray-400" icon={faEye} /></button>
                                    <div className="text-left mt-2 font-bold text-orange-100 font-assistant">Forgot your password?</div>
                                    <Link to='/firstPage'><button className="bg-orange-500 mt-5 text-orange-100 text-lg font-bold rounded-lg w-full h-10 font-assistant">Log in</button></Link>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Filters;