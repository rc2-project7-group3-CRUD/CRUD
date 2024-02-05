import "./Panel.css";
import { Card } from "../Panel/Card/Card";
import { useState, useEffect } from "react";
import CardDialog from "../CardDialog/CardDialog";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Fuse from 'fuse.js';

export const Panel = () => {
  const [cards, setCards] = useState([]);
  const [visible, setVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [needsReload, setNeedsReload] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);


  const URL = "http://localhost:8080/cards";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCards(data);
        setFilteredCards(data); // Inicializa filteredCards con todas las tarjetas
        setNeedsReload(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Llama a la función para obtener los datos al cargar la página

      // Crear una instancia de Fuse con las tarjetas actuales y la configuración
    const fuse = new Fuse(cards, {
    keys: ['title', 'description', 'author'], // Campos para buscar
    threshold: 0.8, // Umbral de similitud
  });

    // Realizar la búsqueda y establecer las tarjetas filtradas
    const result = fuse.search(search);
    setFilteredCards(result.map((item) => item.item));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needsReload, search]);
  

  const postCard = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/cards";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        url: newUrl,
        description: newDescription,
        author: newAuthor,
      }),
    };

    fetch(url, options).then((response) => {
      if (response.ok) {
        setNewTitle("");
        setNewUrl("");
        setNewAuthor("");
        setNewDescription("");
        setVisible(false);
        setNeedsReload(true);
      }
    });
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
  
    /*if (e.key === "Enter") {
      setSearch(searchText);
    } else {*/
      if (searchText === "") {
        // Si el campo de búsqueda está vacío, muestra todas las tarjetas
        setFilteredCards(cards);
      } else {
        // Filtra las tarjetas en función del texto ingresado
        const fuse = new Fuse(cards, {
          keys: ['title', 'description', 'author'],
          threshold: 0.4,
        });
  
        const result = fuse.search(searchText);
        setFilteredCards(result.map((item) => item.item));
      }
    /*}*/
  };
  

  const handleButtonSearch = (value) => {
    setSearch(value);
  }

  return (
    <div className="panelContainer">
      <div className="headerPanel">
        <h2 className="textLastPosts">Últimas entradas:</h2>
        <div className="p-inputgroup flex-1">
          <Button
            icon="pi pi-search"
            className="p-button-warning"
            onClick={() => handleButtonSearch(document.querySelector('input').value)}
            />
          <InputText
            onKeyDown={handleSearch}
            placeholder="¿Qué estás buscando?"
            className="inputSearch"/>
        </div>
      </div>
      <div className="cardsContainer">
        <article className="cardGallery emptyCard">
          <p className="emptyCardButton" onClick={() => setVisible(true)}>
            +
          </p>
        </article>

        <CardDialog
          visible={visible}
          onHide={() => setVisible(false)}
          onSubmit={postCard}
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newUrl={newUrl}
          setNewUrl={setNewUrl}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          newAuthor={newAuthor}
          setNewAuthor={setNewAuthor}
        />

        {[...filteredCards].reverse().map((card, index) => (
          <Card key={index} entrada={card} />
        ))}
      </div>
    </div>
  );
};
