package org.factoriaf5.backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
// "@Table" para crear una tabla "cards" en la BASE DE DATOS
@Table(name = "cards")
public class Card {
    @Id
    // Esto genera el id automáticamente
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title;
    String url;
    String description;
    String author;
    //añadido campo category para añadirlo a la tabla y creado el get y set (linea 24-29)
    String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUrl() {
        return url;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthor() {
        return author;
    }

    // AQUÍ SÍ ES NECESARIO el constructor vacío para la base de datos
    public Card() {
    }

    // ¿¿¿ Es posible que tengamos que quitar el "Long id" aquí ???
    // porque con @GeneratedValue se genera el id automáticamente
    // con id quedaría "public Card(Long id, String title, String url, String
    // description, String author)""
    public Card(String title, String url, String description, String author) {
        // this.id = id;
        this.title = title;
        this.url = url;
        this.description = description;
        this.author = author;
    }

}