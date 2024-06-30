package com.example.mscalificacion.controller;


import com.example.mscalificacion.entity.Calificacion;
import com.example.mscalificacion.service.CalificacionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/calificacion")
public class CalificacionController {
    @Autowired
    private CalificacionService calificacionService;

    @GetMapping
    public ResponseEntity<List<Calificacion>> getAllCalificaciones() {
        List<Calificacion> calificaciones = calificacionService.getAllCalificaciones();
        return new ResponseEntity<>(calificaciones, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Calificacion> getCalificacionById(@PathVariable("id") Integer id) {
        Calificacion calificacion = calificacionService.getCalificacionById(id);
        return new ResponseEntity<>(calificacion, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Calificacion> createCalificacion(@RequestBody Calificacion calificacion) {
        Calificacion createdCalificacion = calificacionService.createCalificacion(calificacion);
        return new ResponseEntity<>(createdCalificacion, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Calificacion> updateCalificacion(@PathVariable("id") Integer id, @RequestBody Calificacion calificacion) {
        Calificacion updatedCalificacion = calificacionService.updateCalificacion(id, calificacion);
        return new ResponseEntity<>(updatedCalificacion, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCalificacion(@PathVariable("id") Integer id) {
        calificacionService.deleteCalificacion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}