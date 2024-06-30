package com.example.mscalificacion.service;


import com.example.mscalificacion.entity.Calificacion;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CalificacionService {
    List<Calificacion> getAllCalificaciones();

    Calificacion getCalificacionById(Integer id);

    Calificacion createCalificacion(Calificacion calificacion);

    Calificacion updateCalificacion(Integer id, Calificacion calificacion);

    void deleteCalificacion(Integer id);

}
