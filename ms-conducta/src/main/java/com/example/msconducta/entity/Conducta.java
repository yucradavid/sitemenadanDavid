package com.example.msconducta.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Conducta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer estudianteId;
    private String descripcion;
    private String nivel;





}
