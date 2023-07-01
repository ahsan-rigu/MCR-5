import React, { useContext, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { DataContext } from "../contexts/DataContext";

const AddEdit = ({ recipieToEdit, closeModal }) => {
  const { dispatchRecipies } = useContext(DataContext);
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (recipieToEdit) {
      setName(recipieToEdit.name);
      setCuisine(recipieToEdit.cuisine);
      setIngredients(recipieToEdit.ingredients);
      setInstructions(recipieToEdit.instructions);
      setImg(recipieToEdit.img);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipieToEdit) {
      dispatchRecipies({
        type: "EDIT_RECIPIE",
        payload: {
          recipie: {
            name,
            cuisine,
            ingredients,
            instructions,
            img,
            key: recipieToEdit.key,
          },
        },
      });
    } else {
      dispatchRecipies({
        type: "ADD_RECIPIE",
        payload: {
          recipie: {
            name,
            cuisine,
            ingredients,
            instructions,
            img,
            key: name.replaceAll(" ", "-"),
          },
        },
      });
    }
    closeModal((prev) => !prev);
  };

  return (
    <div className="modal">
      <h2>Add Or Edit</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Cuisine
          <input
            type="text"
            placeholder="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </label>
        <label>
          Ingredients
          <textarea
            placeholder="Type instructions, each step seperated by a comma"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </label>
        <label>
          Instructions
          <textarea
            placeholder="Type instructions, each step seperated by a comma"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </label>
        <label>
          Image Url
          <input
            type="text"
            placeholder="img url"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => closeModal((prev) => !prev)} className="btns-tr">
        <BsXLg size={"1.5rem"} />
      </button>
    </div>
  );
};

export default AddEdit;
