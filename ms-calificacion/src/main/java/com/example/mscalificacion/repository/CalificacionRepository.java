package com.example.mscalificacion.repository;


import com.example.mscalificacion.entity.Calificacion;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CalificacionRepository extends JpaRepository <Calificacion,Integer> {
}
