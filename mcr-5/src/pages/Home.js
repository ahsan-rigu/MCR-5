import React, { useContext, useState } from "react";
import RecipieCard from "../components/RecipieCard";
import { DataContext } from "../contexts/DataContext";
import { BsPlusCircleFill } from "react-icons/bs";
import AddEdit from "../components/AddEdit";

const Home = () => {
  const { recipiesData } = useContext(DataContext);
  const [addModal, setAddModal] = useState(false);
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");

  let filteredRecipies = recipiesData;

  if (search) {
    filteredRecipies = recipiesData.filter((recipie) =>
      recipie[searchCategory].toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <header>
        <input
          className="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          name="category"
          id="cat"
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="cuisine">Cuisine</option>
          <option value="ingredients">Ingredients</option>
        </select>
      </header>
      <section className="recipie-container">
        {filteredRecipies.map((recipie) => (
          <RecipieCard recipie={recipie} key={recipie.key} />
        ))}
      </section>
      <button
        className="create-btn"
        onClick={() => setAddModal((prev) => !prev)}
      >
        <BsPlusCircleFill size="4rem" />
      </button>
      {addModal && <AddEdit closeModal={setAddModal} />}
    </div>
  );
};

export default Home;
