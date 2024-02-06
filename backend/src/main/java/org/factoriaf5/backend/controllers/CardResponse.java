package org.factoriaf5.backend.controllers;

public class CardResponse {
        // PROPIEDADES DEL OBJETO "card"
        private Long id;
        private String title;
        private String url;
        private String description;
        private String author;
        private String category;

        //MÉTODO CONSTRUCTOR PARA CADA OBJETO "card"
        public CardResponse(Long id, String title, String url, String description, String author, String category) {
            this.id = id;
            this.title = title;
            this.url = url;
            this.description=description;
            this.author= author;
            this.category = category;
        }

        /*GETTERS: Llamada a los datos del constructor, a traves de la funcion coge los datos uno a uno */
        public Long getId() {
            return id;
        }

        /* Si escribo getTitulo en lugar de getTitle 
            en el JSON me mostrará "Titulo" = "loremipsum"
            en lugar de "Title" = "loremipsum" */
        public String getTitle() {
            return title;
        }    
    
        public String getUrl(){
            return url;
        }

        public String getDescription (){
            return description;
        }

        public String getAuthor () {
            return author;
        }

        public String getCategory () {
            return category;
        }
    
}