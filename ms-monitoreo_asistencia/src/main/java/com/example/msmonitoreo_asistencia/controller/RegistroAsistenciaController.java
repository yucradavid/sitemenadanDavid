package com.example.msmonitoreo_asistencia.controller;


import com.example.msmonitoreo_asistencia.entity.RegistroAsistencia;
import com.example.msmonitoreo_asistencia.service.RegistroAsistenciaService;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/registroasistencia")
public class RegistroAsistenciaController {
    @Autowired
    private RegistroAsistenciaService registroAsistenciaService;

    @GetMapping
    public List<RegistroAsistencia> getAllRegistroAsistencias() {
        return registroAsistenciaService.getAllAsistenciasRegistroAsistencias();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegistroAsistencia> getRegistroAsistenciaId(@PathVariable Integer id) {
        RegistroAsistencia asistencia = registroAsistenciaService.getRegistroAsistenciaId(id);
        return ResponseEntity.ok(asistencia);
    }

    @PostMapping
    public ResponseEntity<RegistroAsistencia> createRegistroAsistencia(@RequestBody RegistroAsistencia registroAsistencia) {
        RegistroAsistencia newAsistencia = registroAsistenciaService.createAsistenciaRegistroAsistencia(registroAsistencia);
        return new ResponseEntity<>(newAsistencia, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RegistroAsistencia> updateAsistenciaRegistroAsistencia(@PathVariable Integer id, @RequestBody RegistroAsistencia registroAsistencia) {
        RegistroAsistencia updatedAsistenciaAsistencia = registroAsistenciaService.updateAsistenciaRegistroAsistencia(id, registroAsistencia);
        return ResponseEntity.ok(updatedAsistenciaAsistencia);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAsistencia(@PathVariable Integer id) {
        registroAsistenciaService.deleteRegistroAsistencia(id);
        return ResponseEntity.noContent().build();
    }
}
