package com.example.msconducta.controller;


import com.example.msconducta.entity.Conducta;
import com.example.msconducta.service.ConductaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/conducta")
public class ConductaController {

    @Autowired
    private ConductaService conductaService;

    @GetMapping
    public List<Conducta> getAllConductas() {
        return conductaService.getAllConductas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conducta> getConductaById(@PathVariable Integer id) {
        Conducta conducta = conductaService.getConductaById(id);
        return ResponseEntity.ok(conducta);
    }

    @PostMapping
    public ResponseEntity<Conducta> createConducta(@RequestBody Conducta conducta) {
        Conducta newConducta = conductaService.createConducta(conducta);
        return new ResponseEntity<>(newConducta, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Conducta> updateConducta(@PathVariable Integer id, @RequestBody Conducta conducta) {
        Conducta updatedConducta = conductaService.updateConducta(id, conducta);
        return ResponseEntity.ok(updatedConducta);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConducta(@PathVariable Integer id) {
        conductaService.deleteConducta(id);
        return ResponseEntity.noContent().build();
    }
}
