const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    // backgroundColor: "#f95738",
    color: "#786F52",
    borderTop: "1px solid #ccc",
  },
  paragraph: {
    margin: "5px 0",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  logo: {
    width: "10%", // Adjust width here
    height: "auto", // Adjust height here
    display: "block", // Make sure the logo is treated as a block element
    margin: "0 auto", // Center the logo horizontally
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>
        <a
          href="https://github.com/lattecoding"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" // CDN for GitHub logo
            alt="GitHub Logo"
            style={styles.logo}
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
