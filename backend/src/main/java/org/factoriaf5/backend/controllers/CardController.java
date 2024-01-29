package org.factoriaf5.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.factoriaf5.backend.persistence.Card;
import org.factoriaf5.backend.persistence.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
//DA PERMISO AL BACKEND PARA ACCEDER A LOS RECURSOS
@CrossOrigin(origins = "http://localhost:5173")
public class CardController {

    @GetMapping("/cards")
    public List<CardResponse> getCards() {
        List<CardResponse> cards = new ArrayList<CardResponse>();
        List<Card> cardsInDatabase = repository.findAll();
        for (Card card : cardsInDatabase) {
            cards.add(new CardResponse(card.getId(), card.getTitle(), card.getUrl(), card.getDescription(), card.getAuthor()));
        }
        return cards;
    }

    @PostMapping("/cards")
    public CardResponse createCard (@RequestBody CardRequest request) {
        // hace falta poner "null", porque el primer campo es el id y lo pasamos vacío.
        Card card = new Card(null, request.getTitle(), request.getUrl(), request.getDescription(), request.getAuthor());
        Card savedCard = repository.save(card);
        return new CardResponse(savedCard.getId(), savedCard.getTitle(), savedCard.getUrl(), savedCard.getDescription(), savedCard.getAuthor());
    }

    //PARA CONECTAR EL CONTROLADOR AL REPOSITORIO
    private CardRepository repository;

    public CardController(@Autowired CardRepository repository) {
        this.repository = repository;
    }
}


