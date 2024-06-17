"use client"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar";
export default function ContactUs() {
    return (
        <div >
            <ResponsiveNavbar />
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8 ">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600"></p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div className="mt-2.5">
                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div className="mt-2.5">
                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                            <div className="mt-2.5">
                                <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div className="relative mt-2.5">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="country" className="sr-only">Country</label>
                                    <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                    <span className="sr-only">Agree to policies</span>
                                    <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                </button>
                            </div>
                            <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                By selecting this, you agree to our
                                <a href="#/" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-gradient-to-r from-blue-50 to-slate-100 px-3.5 py-2.5 text-center text-lg font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">talk to us</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import ResponsiveNavbar from "../components/ResponsiveNavbar";
// import { useState } from 'react';

// export default function ContactUs() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         company: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 alert('Message sent successfully!');
//             } else {
//                 alert('Message failed to send.');
//             }
//         } catch (error) {
//             console.error('Error submitting form', error);
//         }
//     };

//     return (
//         <div className='bg-gradient-to-r from-blue-300 via-gray-400 to-red-300'>
//             <ResponsiveNavbar />
//             <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
//                 <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true"></div>
//                 <div className="mx-auto max-w-2xl text-center">
//                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
//                 </div>
//                 <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
//                     <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                         <div>
//                             <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
//                             <div className="mt-2.5">
//                                 <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                         </div>
//                         <div>
//                             <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
//                             <div className="mt-2.5">
//                                 <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
//                             <div className="mt-2.5">
//                                 <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
//                             <div className="mt-2.5">
//                                 <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
//                             <div className="mt-2.5">
//                                 <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-2">
//                             <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
//                             <div className="mt-2.5">
//                                 <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-10">
//                         <button type="submit" className="block w-full rounded-md bg-gradient-to-r from-blue-50 to-slate-100 px-3.5 py-2.5 text-center text-lg font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Talk to us</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }