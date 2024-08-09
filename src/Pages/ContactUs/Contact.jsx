/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // /* eslint-disable react/no-unescaped-entities */
// // import { useState } from "react";
// // // import Swal from "sweetalert2";
// // import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// // import { toast } from 'react-toastify';
// // const defaultContactFormData = {
 
// //   name: "",
// //   email: "",
// //   number:"",
// //   message: "",
// // };



// // // eslint-disable-next-line react/prop-types
// // const ContactPopup = ({ isOpen,onClose }) => {
// //   const [formData, setFormData] = useState({defaultContactFormData});
// // // const [userData, setUserData] = useState(true);


// //   if (!isOpen) return null;

// //   // if(userData ){
// //   //   setFormData({
// //   //     name: "",
// //   //     email:"",
// //   //     number:"",
// //   //     message:"",
// //   //   });
// //   //   setUserData(false);
// //   // }

// //   const handleChange = (e) => {
// //     const name = e.target.name;
// //     const value = e.target.value;
// //   console.log(e);
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Close the popup
// //     onClose();
// //     // // Display SweetAlert2 popup
// //     // await Swal.fire({
// //     //   icon: "success",
// //     //   title: "Thank You!",
// //     //   text: "Your message has been sent successfully.",
// //     //   confirmButtonText: "OK",
// //     // });
// //     // Optionally reset form data
// //     // setFormData({ name: "", email: "", message: "", number: "" });
// //   // };

// //   try {
// //     const response = await fetch ("http://localhost:5000/api/contact",{
// //      method:"POST",
// //      headers:{
// //        'Content-Type':"application/json"
// //      },
// //      body:JSON.stringify(formData),
// //     });
// //     if(response.ok){
// //      setFormData(defaultContactFormData);
// //      const data = await response.json();
// //      console.log(data);
// //      toast.success("Message send successfully");
 
// //     }
// //  } catch (error) {
// //    toast.error("Message not send");
// //    console.log(error)
// //  }
    
// //    };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
// //       <div className="flex flex-col max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-lg md:p-8 md:flex-row  w-[800px] h-[600px]">
// //         {/* Company Information Side */}
// //         <div className="flex flex-col items-start w-full p-4 space-y-4 md:w-1/2 md:space-y-6">
// //           <h2 className="mb-2 text-xl font-display md:text-2xl">Contact Us</h2>
// //           <div className="flex items-center space-x-4">
// //             <FaMapMarkerAlt className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">
// //               T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301
// //             </p>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaPhone className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">+91 9625510038</p>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaEnvelope className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">
// //               help@akshtechnology.com
// //             </p>
// //           </div>
// //         </div>

// //         {/* Contact Form Side */}
// //         <div className="w-full p-4 md:w-1/2">
// //           <h2 className="mb-4 text-2xl font-display">Let's Connect</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label htmlFor="name" className="block text-gray-800">Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 id="name"
// //                 autoComplete="off"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="email" className="block text-gray-800">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                   autoComplete="off"
// //                 id="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="number" className="block text-gray-800">Number</label>
// //               <input
// //                 type="number"
// //                 name="number"
// //                   autoComplete="off"
// //                 id="number"
// //                 value={formData.number}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="message" className="block text-gray-800">Message</label>
// //               <textarea
// //                 name="message"
// //                 id="message"
// //                   autoComplete="off"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 rows="4"
// //                 required
// //               ></textarea>
// //             </div>
// //             <div className="flex justify-end">
// //               <button
// //                 type="button"
// //                 className="px-4 py-2 mr-2 text-white bg-gray-600 rounded"
// //                 onClick={onClose}
// //               >
// //                 Close
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-4 py-2 text-white bg-blue-600 rounded"
// //               >
// //                 Send
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactPopup;
// /* eslint-disable react/no-unescaped-entities */
// // import { useState } from "react";
// // import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// // import { toast } from 'react-toastify';
// // // import {ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
// // import Swal from "sweetalert2";

// // // Default form data
// // const defaultContactFormData = {
// //   name: "",
// //   email: "",
// //   number: "",
// //   message: "",
// // };

// // // Component definition
// // const ContactPopup = ({ isOpen, onClose }) => {
// //   const [formData, setFormData] = useState(defaultContactFormData);
// //   const [loading, setLoading] = useState(false);

// //   if (!isOpen) return null;

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Validate phone number length and numeric value
// //     // const numberPattern = /^\d{10}$/;
// //     // if (!numberPattern.test(formData.number)) {
// //     //   toast.error("Phone number must be exactly 10 digits and contain only numbers");
// //     //   return;
// //     // }
// //     setLoading(true);

// //     try {
// //       const response = await fetch("http://localhost:5000/submit-form", {
// //         method: "POST",
// //         headers: {
// //           'Content-Type': "application/json",
// //           'Access-Control-Allow-Origin': "*", 
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         setFormData(defaultContactFormData);
// //         toast.success("Message sent successfully");
// //       } else {
// //         toast.error("Failed to send message");
// //       }
// //     } catch (error) {
// //       toast.error("An error occurred while sending the message");
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //       onClose(); // Close the popup after submission
// //        // // Display SweetAlert2 popup
// //  await Swal.fire({
// //   icon: "success",
// //   title: "Thank You!",
// //    text: "Your message has been sent successfully.",
// //   confirmButtonText: "OK",
// //  });
// //     }
// //   };

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
// //       <div className="flex flex-col max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-lg md:p-8 md:flex-row w-[800px] h-[600px]">
// //         {/* Company Information Side */}
// //         <div className="flex flex-col items-start w-full p-4 space-y-4 md:w-1/2 md:space-y-6">
// //           <h2 className="mb-2 text-xl font-display md:text-2xl">Contact Us</h2>
// //           <div className="flex items-center space-x-4">
// //             <FaMapMarkerAlt className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">
// //               T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301
// //             </p>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaPhone className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">+91 9625510038</p>
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             <FaEnvelope className="text-lg text-blue-600 md:text-2xl" />
// //             <p className="text-sm text-gray-800 md:text-base">
// //               help@akshtechnology.com
// //             </p>
// //           </div>
// //         </div>

// //         {/* Contact Form Side */}
// //         <div className="w-full p-4 md:w-1/2">
// //           <h2 className="mb-4 text-2xl font-display">Let's Connect</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-4">
// //               <label htmlFor="name" className="block text-gray-800">Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 id="name"
// //                 autoComplete="off"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="email" className="block text-gray-800">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 id="email"
// //                 autoComplete="off"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="number"  className="block text-gray-800">Number</label>
// //               <input
// //                 type="number"
// //                 name="number"
// //                 id="number"
// //                 autoComplete="off"
// //                 value={formData.number}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="message" className="block text-gray-800">Message</label>
// //               <textarea
// //                 name="message"
// //                 id="message"
// //                 autoComplete="off"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded"
// //                 rows="4"
// //                 required
// //               ></textarea>
// //             </div>
// //             <div className="flex justify-end">
// //               <button
// //                 type="button"
// //                 className="px-4 py-2 mr-2 text-white bg-gray-600 rounded"
// //                 onClick={onClose}
// //                 disabled={loading}
// //               >
// //                 Close
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-4 py-2 text-white bg-blue-600 rounded"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Sending..." : "Send"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactPopup;
// import { useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Swal from "sweetalert2";

// // Default form data
// const defaultContactFormData = {
//   name: "",
//   email: "",
//   number: "",
//   message: "",
// };

// // Component definition
// const ContactPopup = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState(defaultContactFormData);
//   const [loading, setLoading] = useState(false);

//   if (!isOpen) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate phone number length and numeric value
//     const numberPattern = /^\d{10}$/;
//     if (!numberPattern.test(formData.number)) {
//       toast.error("Phone number must be exactly 10 digits and contain only numbers");
//       return;
//     }
    
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/submit-form", {
//         method: "POST",
//         headers: {
//           'Content-Type': "application/json",
//           'Access-Control-Allow-Origin': "*", 
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData(defaultContactFormData);
       
//       } else {
//         toast.error("Failed to send message");
//       }
//     } catch (error) {
//       toast.error("An error occurred while sending the message");
//       console.error(error);
//     } finally {
//       setLoading(false);
//       onClose(); 
//       // Display SweetAlert2 popup
//         await Swal.fire({
//           icon: "success",
//           title: "Thank You!",
//           text: "Your message has been sent successfully.",
//           confirmButtonText: "OK",
//         });
//       // Close the popup after submission
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//         <div className="flex flex-col max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-lg md:p-8 md:flex-row w-[800px] h-[600px]">
//           {/* Company Information Side */}
//           <div className="flex flex-col items-start w-full p-4 space-y-4 md:w-1/2 md:space-y-6">
//             <h2 className="mb-2 text-xl font-display md:text-2xl">Contact Us</h2>
//             <div className="flex items-center space-x-4">
//               <FaMapMarkerAlt className="text-lg text-blue-600 md:text-2xl" />
//               <p className="text-sm text-gray-800 md:text-base">
//                 T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301
//               </p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FaPhone className="text-lg text-blue-600 md:text-2xl" />
//               <p className="text-sm text-gray-800 md:text-base">+91 9625510038</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <FaEnvelope className="text-lg text-blue-600 md:text-2xl" />
//               <p className="text-sm text-gray-800 md:text-base">
//                 help@akshtechnology.com
//               </p>
//             </div>
//           </div>

//           {/* Contact Form Side */}
//           <div className="w-full p-4 md:w-1/2">
//             <h2 className="mb-4 text-2xl font-display">Let's Connect</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-800">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   autoComplete="off"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-800">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="off"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="number" className="block text-gray-800">Number</label>
//                 <input
//                   type="number"
//                   name="number"
//                   id="number"
//                   autoComplete="off"
//                   value={formData.number}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block text-gray-800">Message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   autoComplete="off"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded"
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   className="px-4 py-2 mr-2 text-white bg-gray-600 rounded"
//                   onClick={onClose}
//                   disabled={loading}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-white bg-blue-600 rounded"
//                   disabled={loading}
//                 >
//                   {loading ? "Sending..." : "Send"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPopup;
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

// Default form data
const defaultContactFormData = {
  name: "",
  email: "",
  number: "",
  message: "",
};

// Component definition
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(defaultContactFormData);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number length and numeric value
    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(formData.number)) {
      toast.error("Phone number must be exactly 10 digits and contain only numbers");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Access-Control-Allow-Origin': "*",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData(defaultContactFormData);
        toast.success("Message sent successfully");
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message");
      console.error(error);
    } finally {
      setLoading(false);
      onClose();
      // Display SweetAlert2 popup
      await Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="flex flex-col max-w-full p-4 mx-auto bg-white rounded-lg shadow-lg md:p-8 md:flex-row">
          {/* Company Information Side */}
          <div className="flex flex-col items-start w-full p-4 space-y-4 md:w-1/2 md:space-y-6">
            <h2 className="mb-2 text-xl font-display md:text-2xl">Contact Us</h2>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-lg text-blue-600 md:text-2xl" />
              <p className="text-sm text-gray-800 md:text-base">
                T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-lg text-blue-600 md:text-2xl" />
              <p className="text-sm text-gray-800 md:text-base">+91 9625510038</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-lg text-blue-600 md:text-2xl" />
              <p className="text-sm text-gray-800 md:text-base">
                help@akshtechnology.com
              </p>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="w-full p-4 md:w-1/2">
            <h2 className="mb-4 text-2xl font-display">Let's Connect</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-gray-800">Number</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  autoComplete="off"
                  value={formData.number}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800">Message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 text-white bg-gray-600 rounded"
                  onClick={onClose}
                  disabled={loading}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;
