const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 w-full bg-background py-2 flex items-center justify-center text-center"
      style={{ color: "#475fae" }}
    >
      <p className="text-xl font-light text-gray-400">
        Developed by{" "}
        <a
          href="https://rahulnainala.com"
          className="no-underline text-white text-2xl"
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
