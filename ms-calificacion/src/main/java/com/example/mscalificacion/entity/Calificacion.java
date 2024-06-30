package com.example.mscalificacion.entity;

import com.example.mscalificacion.dto.CursoDto;
import com.example.mscalificacion.dto.EstudianteDto;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer estudianteId;

    private Integer cursoId;

    private Double nota;
    private String comentarios;







}
