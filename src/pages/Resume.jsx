export default function Resume() {
  return (
    <div className="page-background">
      <h2>Resume</h2>
      <span>
        Download my resume{" "}
        <a
          href="../src/assets/documents/Javier-Rodriguez-resume.pdf"
          download={"Javier-Rodriguez-resume.pdf"}
          className="resume-link">
          here!
        </a>
      </span>

      <h3>My frontend skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>Css frameworks such as Tailwind and Bootstrap</li>
        <li>Mobile-first development</li>
        <li>APIs</li>
        <li>React & Next</li>
        <li>Vue & Nuxt</li>
      </ul>

      <h3>My backend skills</h3>
      <ul>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL & Sequelize</li>
        <li>MongoDB & Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
