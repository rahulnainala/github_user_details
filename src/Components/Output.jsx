import { useState } from "react";

function Output() {
  const [value1, setValue1] = useState("");
  const [userData, setUserData] = useState({
    name: "Default Name",
    company: "Default Company",
    location: "Default Location",
    public_repos: 0,
    avatar_url: "https://via.placeholder.com/150", // Placeholder image
    html_url: "#",
    updated_at: "N/A",
    created_at: "N/A",
  });

  const API_Url = "https://api.github.com/users/";
  function handleChange(event) {
    setValue1(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (value1.trim() === "") {
        alert("Enter your username");
      } else {
        console.log(value1);

        const response = await fetch(API_Url + value1);

        if (!response.ok) {
          alert("User not found please enter correct user");
        }

        const jData = await response.json();
        setUserData(jData);
        console.log({ userData });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="text-white w-full h-full flex flex-col justify-center items-center">
      <img
        src={userData.avatar_url}
        className="w-64 h-64 rounded-full border-2 flex"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-4/5 max-w-lg p-4 rounded"
      >
        <input
          type="text"
          placeholder="Enter your username"
          value={value1}
          onChange={handleChange}
          className="text-black w-full p-2 mb-4 text-lg rounded"
        />
        <button
          type="submit"
          className="w-full text-white bg-green-400 px-4 py-2 text-lg rounded"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 p-4 text-white w-4/5 max-w-lg">
        <h2 className="text-3xl font-medium"> {userData.name}</h2>
        <h2 className="text-xl">{userData.company}</h2>
        <h2 className="text-xl">{userData.location}</h2>
        <h2 className="text-xl">Public Repos: {userData.public_repos}</h2>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-xl"
        >
          View GitHub Profile
        </a>
        <h2 className="text-l">Last updated @ {userData.updated_at}</h2>
        <h2 className="text-l">Account created on {userData.created_at}</h2>
      </div>
    </div>
  );
}

export default Output;
