
import  { useState } from 'react';
import Swal from 'sweetalert2';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Close the popup
    onClose();
    // Display SweetAlert2 popup
    await Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Your message has been sent successfully.',
      confirmButtonText: 'OK',
    });
    // Optionally reset form data
    setFormData({ name: '', email: '', message: '' ,number:'' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex flex-col max-w-4xl p-4 mx-auto bg-white rounded-lg shadow-lg md:p-8 md:flex-row  w-[800px] h-[600px]">
        {/* Company Information Side */}
        <div className="flex flex-col items-start w-full p-4 space-y-4 md:w-1/2 md:space-y-6">
          <h2 className="mb-2 text-xl font-display md:text-2xl">Contact Us</h2>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-lg text-blue-600 md:text-2xl" />
            <p className="text-sm text-gray-800 md:text-base">1T-3 & T-4, A-88, sector 4, Noida, Uttar Pradesh, 202301</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-lg text-blue-600 md:text-2xl" />
            <p className="text-sm text-gray-800 md:text-base">+91 9625510038</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-lg text-blue-600 md:text-2xl" />
            <p className="text-sm text-gray-800 md:text-base">help@akshtechnology.com</p>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-4 text-2xl font-display">Let's Connect</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
          <label className="block text-gray-800">Number</label>
             <input
               type="number"
               name="number"
               value={formData.number}
               onChange={handleChange}
             className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800">Message</label>
              <textarea
                name="message"
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
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
