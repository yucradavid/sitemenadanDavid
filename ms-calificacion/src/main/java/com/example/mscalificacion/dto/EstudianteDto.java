package com.example.mscalificacion.dto;

import lombok.Data;

import java.util.Date;

@Data
public class EstudianteDto {
    private Integer id;
    private String nombre;
    private String apellido;
    private Date fechaNacimiento;
    private String direccion;
}
