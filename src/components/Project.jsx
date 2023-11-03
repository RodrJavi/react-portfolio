import Button from "./Button";

const Project = ({ pic, title, body, source, site }) => {
  return (
    <div className="card">
      <img src={pic} alt={title} />
      <div className="card-body">
        <div>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        <div className="card-buttons">
          <Button link={source} outline>
            View Source
          </Button>
          <Button link={site}>Visit Site</Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
