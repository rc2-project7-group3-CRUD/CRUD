package org.factoriaf5.backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
// "@Table" para crear una tabla "cards" en la BASE DE DATOS
@Table(name="cards")
    public class Card {
        @Id
        // Esto genera el id automáticamente
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        Long id;
        String title;
        String url;
        String description;
        String author;
        
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
        // con id quedaría "public Card(Long id, String title, String url, String description, String author)""
        public Card(String title, String url, String description, String author) {
            // this.id = id;
            this.title = title;
            this.url = url;
            this.description = description;
            this.author = author;
        }
        
    }