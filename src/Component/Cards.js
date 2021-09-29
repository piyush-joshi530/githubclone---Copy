import React from "react";
import "./Cards.css";

const Cards = () => {
  const datas = [
    {
      project: "AngularFirstApp",
      projectinfo: "this is basic website of angular",
      technology: "TypeScript",
    },
    {
      project: "FirstCakeApp",
      projectinfo: "this is basic cake app",
      technology: "",
    },
    {
      project: "UserTable",
      projectinfo: "Project display user table with edit,delete , add ,update",
      technology: "JavaScript",
    },
    {
      project: "material-ui-table",
      projectinfo: "this is basic website of JavaScript",
      technology: "JavaScript",
    },
  ];

  return (
    <div>
      <div className="element">
        <span style={{ margin: "10px" }}>Popular repositories</span>
        <span style={{ margin: "10px" }}>Customize your pin</span>
      </div>
      <div className="card_style">
        {datas.map((data, index) => (
          <div className="single_card" key={index}>
            <h3>{data.project}</h3>
            <p>{data.projectinfo}</p>
            <span>{data.technology}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
