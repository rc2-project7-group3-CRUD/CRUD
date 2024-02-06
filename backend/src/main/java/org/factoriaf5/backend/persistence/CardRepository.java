package org.factoriaf5.backend.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Esto comunica el CONTROLADOR con la BASE DE DATOS
@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    // Método findByCategory(String category) que te permite buscar tarjetas por categoría.
    List<Card> findByCategory(String category);
}