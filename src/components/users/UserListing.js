import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserListing = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleRemove = (id) => {
    console.log(id);
    const filterUser = users.filter((user) => user.id !== id);
    setUsers(filterUser);
    alert(`User ${id} remove`);
  };
  return (
    <div>
      <div>
        <Link to={"/add-new-user"}>
          <button>Add new user</button>
        </Link>
      </div>
      <div className="flex flex-wrap">
        {users.map((user) => {
          return (
            <div
              className="bg-stone-50 p-5 m-5 rounded-md shadow-md"
              key={user.id}
            >
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold">
                    {user.id}. {user.name}
                  </h3>
                  <div className="flex gap-5">
                    <Link to={`/add-edit-user/${user.id}`}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Link>
                    <button onClick={() => handleRemove(user.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <p>Username: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>
                    Address: {user.address.suite} {user.address.street}{" "}
                    {user.address.city},{user.address.zipcode}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserListing;
