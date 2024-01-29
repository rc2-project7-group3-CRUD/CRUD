package org.factoriaf5.backend.persistence;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="cards")
    public class Card {
        @Id
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
        
        public Card() {
        }
        
        public Card(Long id, String title, String url, String description, String author) {
            this.id = id;
            this.title = title;
            this.url = url;
            this.description = description;
            this.author = author;
        }
        
    }