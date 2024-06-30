package com.example.msconducta.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class EstudianteDto {
    private String id;
    private String nombre;
    private String apellido;
    private Date fechaNacimiento;
    private String direccion;


}
