import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <div className="w-full flex justify-center py-2 fixed">
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          <FontAwesomeIcon icon={faGitAlt} color="white" size="3x" alt="icon" />{" "}
        </button>
      </div>
    </>
  );
}

export default Header;
