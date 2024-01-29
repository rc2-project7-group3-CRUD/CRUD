package org.factoriaf5.backend.controllers;

public class CardResponse {
    
        private String title;
        private Long id;
        private String url;
        private String description;
        private String author;

        //MÉTODO CONSTRUCTOR PARA CADA CARD
        public CardResponse(Long id, String title, String url, String description, String author) {
            this.id = id;
            this.title = title;
            this.url = url;
            this.description=description;
            this.author= author;

        }

        /*GETTERS: Llamada a los datos del constructor, a traves de la funcion coge los datos uno a uno */
        public String getTitle() {
            return title;
        }
    
        public Long getId() {
            return id;
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
    
}
