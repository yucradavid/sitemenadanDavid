package com.example.msconducta.feign;


import com.example.msconducta.dto.EstudianteDto;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-gestionestudiantes-service", path = "/estudiantes")
public interface EstudianteFeign {
    @GetMapping("/estudiantes/{id}")
    EstudianteDto getEstudianteById(@PathVariable("id") Integer id);
}
