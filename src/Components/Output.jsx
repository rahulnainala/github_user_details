import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Styles.css";
function Output() {
  const [value1, setValue1] = useState("");
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    location: "",
    avatar_url:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png", // Placeholder image
    html_url: "#",
  });

  const API_Url = "https://api.github.com/users/";

  function handleChange(event) {
    setValue1(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (value1.trim() === "") {
        setError(true);
      } else {
        const response = await fetch(API_Url + value1);

        if (!response.ok) {
          setError(true);

          if (response.status === 404) {
            setError(true);
          }
        }

        const jData = await response.json();
        setUserData(jData);
        setError(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="text-white w-full h-full flex flex-col justify-center items-center">
      <img
        src={
          userData.avatar_url ||
          "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
        }
        alt="User Avatar"
        className="w-64 h-64 rounded-full border-2 flex"
      />
      {!!error && (
        <div className="bg-red-500 border border-red-600 text-white px-4 py-3 mt-3 rounded">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">
            {" "}
            Please enter a valid username
          </span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-4/5 max-w-lg p-4 rounded"
      >
        <input
          type="text"
          placeholder="Enter your username"
          value={value1}
          onChange={handleChange}
          className="text-white bg-inherit w-full p-2 mb-4 text-lg rounded border-2 border-white glow-on-hover"
        />
        <button
          type="submit"
          className="w-full text-white px-4 py-2 text-lg rounded border-2 border-white glow-on-hover"
        >
          Submit
        </button>
      </form>

      {!!userData.name && (
        <div className="mt-4 p-4 text-white w-4/5 max-w-lg flex flex-col items-center">
          <h2 className="text-3xl font-light">Name: {userData.name}</h2>
          {!!userData.company && (
            <h2 className="text-xl">Company: {userData.company}</h2>
          )}
          {!!userData.location && (
            <h2 className="text-xl">Location: {userData.location}</h2>
          )}
          {!!userData.public_repos && (
            <h2 className="text-xl">Public Repos: {userData.public_repos}</h2>
          )}
          {!!userData.html_url && (
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              View <FontAwesomeIcon icon={faGithub} /> Profile
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default Output;
