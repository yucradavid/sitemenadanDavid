package com.example.msgestion_estudiantes.repository;


import com.example.msgestion_estudiantes.entity.Curso;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository <Curso,Integer> {
}
