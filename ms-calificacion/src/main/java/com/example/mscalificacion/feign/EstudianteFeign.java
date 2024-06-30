package com.example.mscalificacion.feign;


import com.example.mscalificacion.dto.EstudianteDto;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-gestionestudiantes-service", path = "/estudiantes")
public interface EstudianteFeign {
    @GetMapping("/{id}")
    @CircuitBreaker(name = "getEstudianteById", fallbackMethod = "fallbackEstudiante")
    public ResponseEntity<EstudianteDto> getEstudianteById(@PathVariable(required = true) Integer id);


}
