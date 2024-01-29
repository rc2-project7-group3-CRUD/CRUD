package org.factoriaf5.backend.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CardController {

    @GetMapping("/cards")
    public List<CardResponse> getCards() {
        return List.of(
                new CardResponse(1L, "El Señor de los Anillos", "Peter Jackson", "dfsaf", "dsfdsf"),
                new CardResponse(2L, "Pinocho", "Walt Disney", "sadasd", "sdasda")

        );

    }

    @PostMapping("/cards")
    public void createCard (@RequestBody CardRequest card) {
        System.out.println("Entrada Recibida" + card.getTitle());
    }

}


