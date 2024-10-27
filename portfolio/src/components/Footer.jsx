const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      <p>
        <a
          href="https://github.com/lattecoding"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
