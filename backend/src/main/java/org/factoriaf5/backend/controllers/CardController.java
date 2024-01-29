package org.factoriaf5.backend.controllers;

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
        return List.of(
                new CardResponse(1L, "El Señor de los Anillos", "Peter Jackson", "dfsaf", "dsfdsf"),
                new CardResponse(2L, "Pinocho", "Walt Disney", "sadasd", "sdasda")

        );

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


