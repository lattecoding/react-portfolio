import Project from "../Project";
import vehicleBuilderImage from "../../assets/vehicle-builder-image.png";
import weatherDashboardImage from "../../assets/weather-dashboard-image.png";
import findMeDinnerImage from "../../assets/find-me-dinner-image.png";
import readmeGeneratorImage from "../../assets/readme-generator-image.png";
import employeeTrackerImage from "../../assets/employee-tracker-image.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1 style={{ color: "#786F52" }}>Portfolio</h1>
      <div className="projects-container">
        <Project
          title="Vehicle Builder"
          image={vehicleBuilderImage}
          deployedLink="https://drive.google.com/file/d/1L-nvsmtAt-bQIWLLRr3hVj0GmL5ByZsg/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/vehicle-builder"
        />
        <Project
          title="Weather Dashboard"
          image={weatherDashboardImage}
          deployedLink="https://weather-dashboard-l6n9.onrender.com"
          githubLink="https://github.com/lattecoding/weather-dashboard"
        />
        <Project
          title="Find Me Dinner"
          image={findMeDinnerImage}
          deployedLink="https://lattecoding.github.io/find-me-dinner/"
          githubLink="https://github.com/lattecoding/find-me-dinner"
        />
        <Project
          title="README Generator"
          image={readmeGeneratorImage}
          deployedLink="https://drive.google.com/file/d/118PBfT7vGnmuvUMsaISepK7QZiWZSd52/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/README-Generator"
        />
        <Project
          title="Employee Tracker"
          image={employeeTrackerImage}
          deployedLink="https://drive.google.com/file/d/1mDKtOeZ9uhF1FwQdu86Xyvx72YbaFrRL/view?usp=drive_link"
          githubLink="https://github.com/lattecoding/employee-tracker"
        />
      </div>
    </div>
  );
};

export default Portfolio;
