package com.example.msmonitoreo_asistencia.service;

import com.example.msmonitoreo_asistencia.entity.RegistroAsistencia;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface RegistroAsistenciaService {
    List<RegistroAsistencia> getAllAsistenciasRegistroAsistencias();
    RegistroAsistencia getRegistroAsistenciaId(Integer id);
    RegistroAsistencia createAsistenciaRegistroAsistencia(RegistroAsistencia registroAsistencia);
    RegistroAsistencia updateAsistenciaRegistroAsistencia(Integer id, RegistroAsistencia registroAsistencia);
    void deleteRegistroAsistencia(Integer id);
}
