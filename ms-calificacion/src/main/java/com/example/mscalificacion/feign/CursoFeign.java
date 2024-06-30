package com.example.mscalificacion.feign;



import com.example.mscalificacion.dto.CursoDto;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "ms-curso-service", path = "/curso")
public interface CursoFeign {
    @GetMapping("/{id}")
    @CircuitBreaker(name = "getCursoById", fallbackMethod = "fallbackDocente")
    public ResponseEntity<CursoDto> getCursoById(@PathVariable(required = true) Integer id) ;
    default ResponseEntity<CursoDto> fallbackDocente (Integer id, Exception e) {


        return ResponseEntity.ok(new CursoDto());
    }
}

