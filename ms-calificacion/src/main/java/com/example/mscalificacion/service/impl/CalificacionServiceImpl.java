package com.example.mscalificacion.service.impl;


import com.example.mscalificacion.dto.EstudianteDto;
import com.example.mscalificacion.entity.Calificacion;
import com.example.mscalificacion.feign.CursoFeign;
import com.example.mscalificacion.feign.EstudianteFeign;
import com.example.mscalificacion.repository.CalificacionRepository;
import com.example.mscalificacion.service.CalificacionService;
import com.example.mscalificacion.Excepciones.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalificacionServiceImpl implements CalificacionService {

    @Autowired
    private CalificacionRepository calificacionRepository;

    @Autowired
    private EstudianteFeign estudianteFeign;

    @Autowired
    private CursoFeign cursoFeign;

    @Override
    public List<Calificacion> getAllCalificaciones() {
        return calificacionRepository.findAll();
    }

    @Override
    public Calificacion getCalificacionById(Integer id) {
        return calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion not found"));
    }

    @Override
    public Calificacion createCalificacion(Calificacion calificacion) {
        // Verifica si el estudiante existe llamando al servicio de estudiantes
        if (estudianteFeign.getEstudianteById(calificacion.getEstudianteId()) == null) {
            throw new ResourceNotFoundException("Estudiante not found");
        }

        // Verifica si el curso existe llamando al servicio de cursos
        if (cursoFeign.getCursoById(calificacion.getCursoId()) == null) {
            throw new ResourceNotFoundException("Curso not found");
        }

        // Guarda la nueva calificación
        return calificacionRepository.save(calificacion);
    }

    @Override
    public Calificacion updateCalificacion(Integer id, Calificacion calificacion) {
        // Verifica si la calificación existe
        Calificacion existingCalificacion = calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion not found"));

        // Verifica si el estudiante existe llamando al servicio de estudiantes
        if (estudianteFeign.getEstudianteById(calificacion.getEstudianteId()) == null) {
            throw new ResourceNotFoundException("Estudiante not found");
        }

        // Verifica si el curso existe llamando al servicio de cursos
        if (cursoFeign.getCursoById(calificacion.getCursoId()) == null) {
            throw new ResourceNotFoundException("Curso not found");
        }

        // Actualiza los datos de la calificación
        existingCalificacion.setEstudianteId(calificacion.getEstudianteId());
        existingCalificacion.setCursoId(calificacion.getCursoId());
        existingCalificacion.setNota(calificacion.getNota());

        // Guarda la calificación actualizada
        return calificacionRepository.save(existingCalificacion);
    }

    @Override
    public void deleteCalificacion(Integer id) {
        // Verifica si la calificación existe
        Calificacion existingCalificacion = calificacionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Calificacion not found"));

        // Elimina la calificación
        calificacionRepository.delete(existingCalificacion);
    }
}