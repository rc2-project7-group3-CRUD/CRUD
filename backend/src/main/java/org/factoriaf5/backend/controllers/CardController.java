package org.factoriaf5.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CardController {
    @GetMapping("/cards")
     public String hello() {
        return "Hola bebés!";
    }
}

