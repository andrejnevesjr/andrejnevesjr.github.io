import dataModelling from "../assets/data_modeling.png";
import etlElt from "../assets/elt_etl.png";
import cloudComputing from "../assets/cloud.png";
import projectTwo from "../assets/wip.png";
import projectThree from "../assets/wip.png";
import coding from "../assets/coding.jpeg";

const projects = {
  1: [
    {
      title: "Data Modelling",
      image: dataModelling,
      description: (
        <>
          {" "}
          <p>
            Are you looking for someone who can translate complex business
            requirements into meaningful knowledge through data modeling? Look
            no further! I have the expertise to help you make sense of your data
            and turn it into actionable insights.
          </p>
        </>
      ),
    },
    {
      title: "ETL / ELT",
      image: etlElt,
      description: (
        <>
          {" "}
          <p>
            {" "}
            I have experience working in various environments, where I tailor my
            approach based on the specific requirements and scalability needs.
          </p>
        </>
      ),
    },
    {
      title: "Cloud Computing",
      image: cloudComputing,
      description: (
        <>
          {" "}
          <p> I'm a cloud certificated engineer.</p>
          <p> 2x AWS | 2x Azure</p>
        </>
      ),
    },
    {
      title: "Development",
      image: coding,
      description: (
        <>
          {" "}
          <p>
            {" "}
            <b>Hard Skills: </b>Data structures and algorithms, Database and
            SQL, OOP, Web development, Git, and Containers!
          </p>
          <p>
            {" "}
            <b>Langagues: </b>Python, Scala, Java, JavaScript, and TypeScript.
          </p>
        </>
      ),
    },
  ],
  2: {
    title: "WIP",
    image: projectTwo,
    description: (
      <>
        {" "}
        <p>
          {" "}
          Here you can find some backend projects that I've beeing working with.
        </p>
      </>
    ),
    githb: "https://",
    demo: "https://",
  },
  3: {
    title: "WIP",
    image: projectThree,
    description: (
      <>
        {" "}
        <p>
          {" "}
          Here you can find some frontend projects that I've beeing working
          with.
        </p>
      </>
    ),
    githb: "https://",
    demo: "https://",
  },
};

export default projects;
