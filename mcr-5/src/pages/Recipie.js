import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BiArrowBack } from "react-icons/bi";

const Recipie = () => {
  const { key } = useParams();

  const { recipiesData } = useContext(DataContext);

  const recipie = recipiesData.find((rec) => rec.key === key);

  return (
    <div className="flex-page">
      <Link to={"/"}>
        <BiArrowBack size={"3rem"} />
      </Link>
      <div>
        <h2>{recipie.name}</h2>
        <img src={recipie.img} />
        <h2>Cuisine: {recipie.cuisine}</h2>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ol>
          {recipie.ingredients.split(",").map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <div>
        <h2>{recipie.name}</h2>
        <ol>
          {recipie.instructions.split(",").map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipie;
