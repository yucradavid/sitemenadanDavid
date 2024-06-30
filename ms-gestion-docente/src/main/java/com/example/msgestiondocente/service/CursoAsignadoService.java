package com.example.msgestiondocente.service;




import com.example.msgestiondocente.entity.CursoAsignado;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public interface CursoAsignadoService {
    List<CursoAsignado> lista();
    CursoAsignado guardar(CursoAsignado cursoAsignado);
    Optional<CursoAsignado> buscarPorId(Integer id);
    CursoAsignado actualizar(CursoAsignado cursoAsignado);
    void eleminar(Integer id);
}
