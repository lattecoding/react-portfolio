const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      <p>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
