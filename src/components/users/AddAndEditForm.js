import React, { useState } from "react";
import InputLable from "../formUiAndControls/InputLable";

const AddAndEditForm = () => {
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");
    if (name.includes(".")) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [parent]: {
          ...prevFormData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <InputLable htmlFor="name" label="Name" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <InputLable htmlFor="userName" label="User Name" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="userName"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <InputLable htmlFor="email" label="Email" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <InputLable htmlFor="street" label="Street" />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address.street"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <InputLable htmlFor="suite" label="Suite" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address.suite"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <InputLable htmlFor="city" label="City" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address.city"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <InputLable htmlFor="zipcode" label="Zipcode" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address.zipcode"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <div className="mb-4">
              <InputLable htmlFor="lat" label="Latitude" />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="address.geo.lat"
                type="text"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <InputLable htmlFor="lng" label="Longitude" />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="address.geo.lng"
                type="text"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <InputLable htmlFor="phone" label="Phone" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="phone"
            onChange={handleInputChange}
            type="text"
          />
        </div>
        <div className="mb-4">
          <InputLable htmlFor="website" label="Website" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="website"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <InputLable htmlFor="companyName" label="Company Name" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="company.name"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <InputLable htmlFor="catchPhrase" label="Catch Phrase" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="company.catchPhrase"
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <InputLable htmlFor="bs" label="BS" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="company.bs"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default AddAndEditForm;
