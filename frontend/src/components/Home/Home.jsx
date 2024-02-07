import { Sidebar } from "../Sidebar/Sidebar";
import { Panel } from "../Panel/Panel";
import "./Home.css";
import { useState } from "react";

export const Home = () => {
  // Definimos en la Home los useState que queremos pasar como prop a Panel y Sidebard
  // porque Home es el padre de ambos
  
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cards, setCards] = useState([]);

  const categories = [
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    // { label: "Todas las categorías", value: null }
  ];
  
  // Funcion para filtrar categorias
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.value);
    // Realizar la búsqueda de tarjetas filtradas por la categoría seleccionada
    const filtered = e.value === null ? cards : cards.filter((card) => card.category === e.value);
    setFilteredCards(filtered);
  };

  const handleAllCategories = () => {
    setSelectedCategory(null);
    setFilteredCards(cards);
  };
  
  return (
    <main className="mainContainer">
      <Sidebar 
        selectedCategory = {selectedCategory}
        categories = {categories}
        handleCategoryChange = {handleCategoryChange}
        handleAllCategories = {handleAllCategories}
      />
      <Panel
        setCards = {setCards}
        filteredCards = {filteredCards}
        setFilteredCards = {setFilteredCards}
        cards = {cards}
      />
    </main>
  );
};
