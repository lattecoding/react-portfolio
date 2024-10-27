// Footer.jsx
const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f95738",
    color: "#faf0ca",
    borderTop: "1px solid #ccc",
  },
  paragraph: {
    margin: "5px 0",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>{new Date().getFullYear()} Luis Portfolio</p>
      <p style={styles.paragraph}>
        <a
          href="https://github.com/lattecoding"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
