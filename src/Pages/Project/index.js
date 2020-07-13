import React from "react";
import Card from "../../components/Card";
import Projects from "../../Lists/Projects";
console.log(Projects[0].picture);
const cards = Projects.map((project, index) => (
  <Card
    key={index}
    head={project.head}
    body={project.body}
    icons={project.icons}
    image={project.picture}
  />
));
function Project() {
  return <div className="cards_container">{cards}</div>;
}
export default Project;
