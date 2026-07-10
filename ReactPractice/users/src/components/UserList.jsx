import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";
import Filter from "./Filter";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("All");
  const [age, setAge] = useState("All");

  useEffect(() => {
    async function getUsers() {
      let response = await axios.get("https://dummyjson.com/users/?limit=40");
      setUsers(response.data.users);
      console.log(response);
      console.log(response.data.users);
    }
    getUsers();
  }, []);

  //   console.log(gender);

  let filteredUsers = users;

  if (gender !== "All") {
    filteredUsers = filteredUsers.filter((user) => {
      return user.gender === gender;
    });
  }

  if (age === "18-30") {
    filteredUsers = filteredUsers.filter((user) => {
      return user.age >= 18 && user.age <= 30;
    });
  }

  if (age === "31-50") {
    filteredUsers = filteredUsers.filter((user) => {
      return user.age >= 31 && user.age <= 50;
    });
  }

  if (age === "50+") {
    filteredUsers = filteredUsers.filter((user) => {
      return user.age > 50;
    });
  }

  return (
    <div>
      <Filter gender={gender} setGender={setGender} age={age} setAge={setAge} />
      <UserCard users={filteredUsers} />
    </div>
  );
};

export default UserList;
