package com.example.msgestion_estudiantes.service;


import com.example.msgestion_estudiantes.entity.Curso;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface CursoService {
    List<Curso> lista();
    Curso guardar(Curso curso);
    Optional<Curso> buscarPorId(Integer id);
    Curso actualizar(Curso curso);
    void eleminar(Integer id);
}
