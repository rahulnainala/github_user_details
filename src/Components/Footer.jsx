const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 w-full bg-background px-4 py-2 flex items-center justify-center text-center"
      style={{ color: "#475fae" }}
    >
      <p className="text-2xl font-light text-gray-200">
        Developed by{" "}
        <a
          href="https://rahulnainala.com"
          className="no-underline text-green-400 text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rahul Nainala
        </a>
      </p>
    </footer>
  );
};

export default Footer;