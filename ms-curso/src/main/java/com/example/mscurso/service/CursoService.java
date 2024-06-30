package com.example.mscurso.service;


import com.example.mscurso.entity.Curso;

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
