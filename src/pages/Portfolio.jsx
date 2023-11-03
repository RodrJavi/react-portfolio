import Project from "../components/Project";
import projectList from "../utils/projectList";
export default function Portfolio() {
  return (
    <div>
      {projectList.map((project) => (
        <Project {...project} key={project.title} />
      ))}
    </div>
  );
}
