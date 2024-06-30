package com.example.msmonitoreo_asistencia.feign;

import com.example.msmonitoreo_asistencia.dto.EstudianteDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-gestionestudiantes-service", path = "/estudiante")
public interface EstudianteFeign {

    @GetMapping("/{id}")
    public ResponseEntity<EstudianteDto> buscarPorId(@PathVariable Integer id);
}
