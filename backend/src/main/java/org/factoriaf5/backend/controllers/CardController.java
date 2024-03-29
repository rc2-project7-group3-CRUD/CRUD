package org.factoriaf5.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.factoriaf5.backend.persistence.Card;
import org.factoriaf5.backend.persistence.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
// DA PERMISO AL BACKEND PARA ACCEDER A LOS RECURSOS
@CrossOrigin(origins = "http://localhost:5173")
public class CardController {

    // MÉTODO GET
    @GetMapping("/cards")
    public List<CardResponse> getCards() {
        List<CardResponse> cards = new ArrayList<CardResponse>();
        // coge los objetos de la clase Student y lo convierte a una lista de objetos de
        // la clase StudentResponse
        List<Card> cardsInDatabase = repository.findAll();
        for (Card card : cardsInDatabase) {
            cards.add(new CardResponse(
                    card.getId(),
                    card.getTitle(),
                    card.getUrl(),
                    card.getDescription(),
                    card.getAuthor(),
                    // Añadido el getCategory para que aparezcan las cartas por categorias (revisar los otros metodos y añadirlos)
                    card.getCategory()));
        }
        return cards;
    }

    // MÉTODO POST
    @PostMapping("/cards")
    // a "request" lo podemos llamar como queramos
    public CardResponse createCard(@RequestBody CardRequest request) {
        // ¿¿¿ hace falta poner "null" al principio, porque el primer campo es el id y
        // lo pasamos vacío ???
        // o quitamos "id" (this.id = id;) del constructor en Card.java
        Card card = new Card(

                request.getTitle(),
                request.getUrl(),
                request.getDescription(),
                request.getAuthor());
        Card savedCard = repository.save(card);
        return new CardResponse(savedCard.getId(), savedCard.getTitle(), savedCard.getUrl(), savedCard.getDescription(),
                savedCard.getAuthor(), savedCard.getCategory());
    }

    // MÉTODO PUT
    // @PutMapping("/cards/{id}")
    // public CardResponse updateCard(@PathVariable Long id, @RequestBody
    // CardRequest request) {
    // Optional<Card> optionalCard = repository.findById(id);

    // if (optionalCard.isEmpty()) {
    // throw new CardNotFoundException("Card not found - id: " + id);
    // }

    // Card existingCard = optionalCard.get();

    // // Actualiza los campos que se pueden modificar
    // existingCard.setTitle(request.getTitle());
    // existingCard.setUrl(request.getUrl());
    // existingCard.setDescription(request.getDescription());

    // // Guarda los cambios en la base de datos
    // Card updatedCard = repository.save(existingCard);

    // return new CardResponse(updatedCard.getId(), updatedCard.getTitle(),
    // updatedCard.getUrl(), updatedCard.getDescription(), updatedCard.getAuthor());
    // }

    // MÉTODO PATCH
    @PatchMapping("/cards/{id}")
    public CardResponse updateCardDescription(@PathVariable Long id, @RequestBody Map<String, String> request) {
        Optional<Card> optionalCard = repository.findById(id);

        if (optionalCard.isEmpty()) {
            throw new CardNotFoundException("Card not found - id: " + id);
        }

        Card existingCard = optionalCard.get();

        // Verifica si la solicitud contiene la clave "description" y actualiza la
        // descripción si es así
        if (request.containsKey("title")) {
            existingCard.setTitle(request.get("title"));
        }

        if (request.containsKey("url")) {
            existingCard.setUrl(request.get("url"));
        }

        if (request.containsKey("description")) {
            existingCard.setDescription(request.get("description"));
        }

        // Guarda los cambios en la base de datos
        Card updatedCard = repository.save(existingCard);

        return new CardResponse(updatedCard.getId(), updatedCard.getTitle(), updatedCard.getUrl(),
                updatedCard.getDescription(), updatedCard.getAuthor(), updatedCard.getCategory());
    }

    // MÉTODO DELETE
    public class CardNotFoundException extends RuntimeException {
        public CardNotFoundException(String message) {
            super(message);
        }
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/cards/{id}")
    public void deleteCard(@PathVariable Long id) {
        Optional<Card> card = repository.findById(id);

        // If optional is empty, UserNotFoundException
        if (card.isEmpty()) {
            throw new CardNotFoundException("User not found - id:" + id);
        }

        // Delete card
        repository.deleteById(id);
    }

    // PARA CONECTAR EL CONTROLADOR AL REPOSITORIO
    private CardRepository repository;

    public CardController(@Autowired CardRepository repository) {
        this.repository = repository;
    }
}