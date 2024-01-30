package org.factoriaf5.backend.controllers;

public class CardRequest {
    private String title;
    private String url;
    private String description;
    private String author;

    // A veces (?) hay que meter un constructor vacío
    //
    //public Card () {
    //  }
    //
    // En este caso no hace falta


    // Es posible que los SETTERS no hagan falta
    // Los hemos quitado porque no nos hacen falta de momento...

    // public void setTitle(String title) {
    //     this.title = title;
    // }
    
    // public void setUrl (String url) {
    //     this.url= url;
    // }
    
    // public void setDescription (String description){
    //     this.description=description;
    // }

    // public void setAuthor( String author) {
    //     this.author=author;
    // }



    public String getTitle() {
        return title;
    }

    public String getUrl () {
        return url;
    }

    public String getDescription () {
        return description;
    }

    public String getAuthor(){
        return  author;
    }
}
