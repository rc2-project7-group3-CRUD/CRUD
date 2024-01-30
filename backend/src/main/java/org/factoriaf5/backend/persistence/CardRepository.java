package org.factoriaf5.backend.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Esto comunica el CONTROLADOR con la BASE DE DATOS
@Repository
public interface CardRepository extends JpaRepository<Card, Long>{}
