package com.example.msgestion_estudiantes.service;


import com.example.msgestion_estudiantes.entity.Historial_Académico;


import java.util.List;
import java.util.Optional;

public interface Historial_AcadémicoService {
    List<Historial_Académico> lista();
    Historial_Académico guardar(Historial_Académico historial_académico);
    Optional<Historial_Académico> buscarPorId(Integer id);
    Historial_Académico actualizar(Historial_Académico historial_académico);
    void eleminar(Integer id);
}
