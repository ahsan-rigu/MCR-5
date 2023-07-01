import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPencil, BsTrash } from "react-icons/bs";
import { DataContext } from "../contexts/DataContext";
import AddEdit from "./AddEdit";

const RecipieCard = ({
  recipie: { name, cuisine, instructions, ingredients, img, key },
  recipie,
}) => {
  const { dispatchRecipies } = useContext(DataContext);
  const [editModal, setEditModal] = useState(false);

  const navigate = useNavigate();

  return (
    <article className="card">
      <h2>{name}</h2>
      <img src={img} alt="recipie-img" />
      <p>
        <b>Cuisine:</b> {cuisine}
      </p>
      <button className="link" onClick={() => navigate(`/recipie/${key}`)}>
        INGREDIENTS AND INSTRUCTIONS>
      </button>
      <span className="btns-tr">
        <button onClick={() => setEditModal((prev) => !prev)}>
          <BsPencil size="1.5rem" />
        </button>
        <button
          onClick={() =>
            dispatchRecipies({ type: "REMOVE_RECIPIE", payload: { key } })
          }
        >
          <BsTrash size="1.5rem" />
        </button>
      </span>
      {editModal && (
        <AddEdit recipieToEdit={recipie} closeModal={setEditModal} />
      )}
    </article>
  );
};

export default RecipieCard;
