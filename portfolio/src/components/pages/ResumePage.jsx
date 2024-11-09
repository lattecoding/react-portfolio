export default function Resume() {
  return (
    <div>
      <h1 style={{ color: "#786F52" }}>Resume</h1>
      <p>Front End Skills</p>
      <ul
        style={{
          color: "#786F52",
          textAlign: "center",
          listStyleType: "none",
          padding: 0,
        }}
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
      </ul>
      <p>Back End Skills</p>
      <ul
        style={{
          color: "#786F52",
          textAlign: "center",
          listStyleType: "none",
          padding: 0,
        }}
      >
        <li>Node.js</li>
        <li>SQL</li>
      </ul>
      <ul
        style={{
          color: "#786F52",
          textAlign: "center",
          listStyleType: "none",
          padding: 0,
        }}
      >
        <li>
          <a href="../../assets/luis-mock-resume.pdf" download>
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
