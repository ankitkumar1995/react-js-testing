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

  return (
    <div>
      <div>
        <Link to={"/add-edit-user"}>
          <button>Add new user</button>
        </Link>
      </div>
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>
                <div>
                  <h3>
                    {user.id}. {user.name}
                  </h3>
                  <Link to={`/add-edit-user/${user.id}`}>
                    <i className="fas fa-pencil"></i>
                  </Link>
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
