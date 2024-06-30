package com.example.msconducta.service.impl;


import com.example.msconducta.Excepciones.ResourceNotFoundException;
import com.example.msconducta.dto.EstudianteDto;
import com.example.msconducta.entity.Conducta;


import com.example.msconducta.feign.EstudianteFeign;
import com.example.msconducta.repository.ConductaRepository;
import com.example.msconducta.service.ConductaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConductaServiceImpl implements ConductaService {
    @Autowired
    private ConductaRepository conductaRepository;

    @Autowired
    private EstudianteFeign estudianteFeign;

    @Override
    public List<Conducta> getAllConductas() {
        return conductaRepository.findAll();
    }

    @Override
    public Conducta getConductaById(Integer id) {
        return conductaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conducta not found"));
    }

    @Override
    public Conducta createConducta(Conducta conducta) {
        // Verifica si el estudiante existe llamando al servicio de estudiantes
        EstudianteDto estudianteDto = estudianteFeign.getEstudianteById(conducta.getEstudianteId());
        if (estudianteDto == null) {
            throw new ResourceNotFoundException("Estudiante not found");
        }

        // Guarda la nueva conducta
        return conductaRepository.save(conducta);
    }

    @Override
    public Conducta updateConducta(Integer id, Conducta conducta) {
        // Verifica si la conducta existe
        Conducta existingConducta = conductaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conducta not found"));

        // Verifica si el estudiante existe llamando al servicio de estudiantes
        EstudianteDto estudianteDto = estudianteFeign.getEstudianteById(conducta.getEstudianteId());
        if (estudianteDto == null) {
            throw new ResourceNotFoundException("Estudiante not found");
        }

        // Actualiza los datos de la conducta
        existingConducta.setEstudianteId(conducta.getEstudianteId());
        existingConducta.setDescripcion(conducta.getDescripcion());
        existingConducta.setNivel(conducta.getNivel());

        // Guarda la conducta actualizada
        return conductaRepository.save(existingConducta);
    }

    @Override
    public void deleteConducta(Integer id) {
        // Verifica si la conducta existe
        Conducta existingConducta = conductaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conducta not found"));

        // Elimina la conducta
        conductaRepository.delete(existingConducta);
    }
}