package com.example.msgestion_estudiantes.controller;

import com.example.msgestion_estudiantes.entity.Historial_Académico;
import com.example.msgestion_estudiantes.service.Historial_AcadémicoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/historialacadémico")
public class Historial_AcadémicoController {
    @Autowired
    private Historial_AcadémicoService historialAcadémicoService;

    @GetMapping
    ResponseEntity<List<Historial_Académico>> lista(){
        return ResponseEntity.ok(historialAcadémicoService.lista());
    }
    @PostMapping
    ResponseEntity<Historial_Académico> guardar(@RequestBody Historial_Académico historial_académico){
        return ResponseEntity.ok(historialAcadémicoService.guardar((historial_académico)));
    }

    @GetMapping("/{id}")
    ResponseEntity<Historial_Académico> buscarPorId(@PathVariable(required = true) Integer id){
        return ResponseEntity.ok(historialAcadémicoService.buscarPorId(id).get());

    }

    @PutMapping
    ResponseEntity<Historial_Académico> actualizar(@RequestBody Historial_Académico historial_académico){
        return ResponseEntity.ok(historialAcadémicoService.actualizar((historial_académico)));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<Historial_Académico>> eleminar(@PathVariable(required = true) Integer id){
        historialAcadémicoService.eleminar(id);
        return ResponseEntity.ok(historialAcadémicoService.lista());

    }
}
