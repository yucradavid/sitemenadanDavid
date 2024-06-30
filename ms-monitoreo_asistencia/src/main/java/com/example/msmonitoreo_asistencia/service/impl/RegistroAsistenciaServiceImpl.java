package com.example.msmonitoreo_asistencia.service.impl;


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

    @Autowired
    private EstudianteFeign estudianteFeign;

    @Override
    public List<RegistroAsistencia> lista() {
        return registroAsistenciaRepository.findAll();
    }

    @Override
    public RegistroAsistencia guardar(RegistroAsistencia registroAsistencia) {
        return registroAsistenciaRepository.save(registroAsistencia);
    }

    @Override
    public Optional<RegistroAsistencia> buscarPorId(Integer id) {
        Optional<RegistroAsistencia> registroAsistencia = registroAsistenciaRepository.findById(id);

        // Obtener información del estudiante si el registro existe
        registroAsistencia.ifPresent(registro -> {
            EstudianteDto estudianteDto = estudianteFeign.buscarPorId(registro.getEstudianteId().intValue()).getBody();
            registro.setEstudianteDto(estudianteDto);
        });

        return registroAsistencia;
    }
    @Override
    public RegistroAsistencia actualizar(RegistroAsistencia registroAsistencia) {
        return registroAsistenciaRepository.save(registroAsistencia);
    }

    @Override
    public void eleminar(Integer id) {
        registroAsistenciaRepository.deleteById(id);
    }
}
