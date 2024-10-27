import Project from "../Project";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects-container">
        <Project
          title="Vehicle Builder"
          image="link-to-your-image1.jpg" // Replace with actual image link
          deployedLink="https://drive.google.com/file/d/1L-nvsmtAt-bQIWLLRr3hVj0GmL5ByZsg/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/vehicle-builder"
        />
        <Project
          title="Weather Dashboard"
          image="link-to-your-image2.jpg" // Replace with actual image link
          deployedLink="https://example.com/deployed-project-2" // Replace with actual link
          githubLink="https://github.com/lattecoding/weather-dashboard"
        />
        <Project
          title="Find Me Dinner"
          image="link-to-your-image2.jpg" // Replace with actual image link
          deployedLink="https://lattecoding.github.io/find-me-dinner/"
          githubLink="https://github.com/lattecoding/find-me-dinner"
        />
        <Project
          title="README Generator"
          image="link-to-your-image2.jpg" // Replace with actual image link
          deployedLink="https://drive.google.com/file/d/118PBfT7vGnmuvUMsaISepK7QZiWZSd52/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/README-Generator"
        />
        <Project
          title="Employee Tracker"
          image="link-to-your-image2.jpg" // Replace with actual image link
          deployedLink="https://drive.google.com/file/d/1mDKtOeZ9uhF1FwQdu86Xyvx72YbaFrRL/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/employee-tracker"
        />
      </div>
    </div>
  );
};

export default Portfolio;
