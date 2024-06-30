package com.example.msmonitoreo_asistencia.service.impl;


import com.example.msmonitoreo_asistencia.Excepciones.ResourceNotFoundException;
import com.example.msmonitoreo_asistencia.dto.DocenteDto;
import com.example.msmonitoreo_asistencia.dto.EstudianteDto;
import com.example.msmonitoreo_asistencia.entity.RegistroAsistencia;

import com.example.msmonitoreo_asistencia.feign.GestionDocenteFeign;
import com.example.msmonitoreo_asistencia.feign.EstudianteFeign;
import com.example.msmonitoreo_asistencia.repository.RegistroAsistenciaRepository;
import com.example.msmonitoreo_asistencia.service.RegistroAsistenciaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistroAsistenciaServiceImpl implements RegistroAsistenciaService {
    @Autowired
    private RegistroAsistenciaRepository registroAsistenciaRepository;

    @Override
    public List<RegistroAsistencia> getAllAsistenciasRegistroAsistencias() {
        return registroAsistenciaRepository.findAll();
    }

    @Override
    public RegistroAsistencia getRegistroAsistenciaId(Integer id) {
        return registroAsistenciaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asistencia not found"));
    }

    @Override
    public RegistroAsistencia createAsistenciaRegistroAsistencia(RegistroAsistencia asistencia) {
        return registroAsistenciaRepository.save(asistencia);
    }

    @Override
    public RegistroAsistencia updateAsistenciaRegistroAsistencia(Integer id, RegistroAsistencia asistencia) {
        RegistroAsistencia existingAsistencia = registroAsistenciaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asistencia not found"));
        existingAsistencia.setEstudianteId(asistencia.getEstudianteId());
        existingAsistencia.setCursoId(asistencia.getCursoId());
        existingAsistencia.setFecha(asistencia.getFecha());
        existingAsistencia.setPresente(asistencia.getPresente());
        return registroAsistenciaRepository.save(existingAsistencia);
    }

    @Override
    public void deleteRegistroAsistencia(Integer id) {
        RegistroAsistencia existingAsistencia = registroAsistenciaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Asistencia not found"));
        registroAsistenciaRepository.delete(existingAsistencia);
    }
}
