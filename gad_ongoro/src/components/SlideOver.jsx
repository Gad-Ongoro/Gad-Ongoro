import { Fragment, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ProfileContext } from './Main';

export default function SlideOver() {
	function scrollUp(){
		window.scrollTo(0, 0);
    setOpen(false);
	}
	const {open, setOpen} = useContext(ProfileContext);

  return (
    <Transition show={open} className='md:hidden'>
      <Dialog className="relative z-20" onClose={setOpen}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto relative w-screen max-w-sm">
                  <TransitionChild
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <DialogTitle className="mt-5 text-base font-semibold leading-5 text-gray-900">Panel</DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
											<div className='text-gray-700 text-3xl'>
												<ul>
													<li> <NavLink className={'text-lg'} to={"/"} onClick={scrollUp}> Home </NavLink> </li>
                          <li> <NavLink className={'text-lg'} to={'/qualification/education'} onClick={scrollUp}>Qualification</NavLink> </li>
													<li> <NavLink className={'text-lg'} to={'/projects'} onClick={scrollUp}>Projects</NavLink></li>
													<li> <NavLink className={'text-lg'} to={'/contact'} onClick={scrollUp}>Contact</NavLink> </li>
													<li> 
															{/* <a className={'text-lg'} href="Gad_Ongoro_Resume.pdf" download={'Gad_Ongoro_Resume.pdf'}>Resume</a> */}
															<a className={'text-lg'} href="/Gad_Ongoro_Resume.pdf" target='_blank'>Resume</a>
													</li>
												</ul>
											</div>
										</div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
};