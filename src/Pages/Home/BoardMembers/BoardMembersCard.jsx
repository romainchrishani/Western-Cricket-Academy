import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const BoardMembersCard = ({ staff }) => {
  const { name, image, designation, description } = staff;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="card card-compact max-w-sm shadow-xl flex flex-col justify-between h-full">
        <figure className="flex justify-center p-4">
          <img
            className="w-40 h-40 object-cover rounded-lg hover:grayscale transition-all duration-300 cursor-pointer"
            src={image}
            alt={name}
            onClick={toggleModal}
          />
        </figure>
        <div className="card-body p-6 text-gray-800 dark:text-white flex flex-col justify-between flex-grow">
          <h2 className="card-title text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500 mb-4">{designation}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={toggleModal} // Close modal when clicking outside
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <img
              className="w-32 h-32 mx-auto object-cover rounded-full mb-4"
              src={image}
              alt={name}
            />
            <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
              {designation}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              {description}
            </p>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BoardMembersCard;