package com.example.msmonitoreo_asistencia.entity;

import com.example.msmonitoreo_asistencia.dto.DocenteDto;
import com.example.msmonitoreo_asistencia.dto.EstudianteDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class RegistroAsistencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer estudianteId;
    private Integer cursoId;
    private LocalDate fecha;
    private Boolean asistencia;

    @Transient
    private EstudianteDto estudianteDto; // No deberías tener este campo en la entidad




}
