import Project from "../components/Project";
import projectList from "../utils/projectList";
export default function Portfolio() {
  return (
    <div className="page-background">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="project-list-container">
        {projectList.map((project) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
