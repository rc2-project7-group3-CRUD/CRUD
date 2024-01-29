package org.factoriaf5.backend.controllers;

public class CardRequest {
    private String title;
    private String url;
    private String description;
    private String author;


    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setUrl (String url) {
        this.url= url;

    }

    public String getUrl () {
        return url;
    }

    public void setDescription (String description){
        this.description=description;
    }

    public String getDescription () {
        return description;
    }

    public void setAuthor( String author) {
        this.author=author;
    
    }
    public String getAuthor(){
        return  author;
    }
}
