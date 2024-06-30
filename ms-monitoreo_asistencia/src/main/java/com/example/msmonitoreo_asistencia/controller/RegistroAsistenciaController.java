package com.example.msmonitoreo_asistencia.controller;


import com.example.msmonitoreo_asistencia.entity.RegistroAsistencia;
import com.example.msmonitoreo_asistencia.service.RegistroAsistenciaService;


import com.itextpdf.text.DocumentException;
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
    ResponseEntity<List<RegistroAsistencia>> lista(){
        return ResponseEntity.ok(registroAsistenciaService.lista());
    }
    @PostMapping
    ResponseEntity<RegistroAsistencia> guardar(@RequestBody RegistroAsistencia registroAsistencia) {
        return ResponseEntity.ok(registroAsistenciaService.guardar((registroAsistencia)));
    }

    @GetMapping("/{id}")
    ResponseEntity<RegistroAsistencia> buscarPorId(@PathVariable(required = true) Integer id){
        return ResponseEntity.ok(registroAsistenciaService.buscarPorId(id).get());

    }

    @PutMapping
    ResponseEntity<RegistroAsistencia> actualizar(@RequestBody RegistroAsistencia registroAsistencia){
        return ResponseEntity.ok(registroAsistenciaService.actualizar((registroAsistencia)));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<List<RegistroAsistencia>> eleminar(@PathVariable(required = true) Integer id){
        registroAsistenciaService.eleminar(id);
        return ResponseEntity.ok(registroAsistenciaService.lista());

    }


}
