package com.example.msmatricula.service.Impl;


import com.example.msmatricula.dto.EstudianteDto;
import com.example.msmatricula.entity.Horario;
import com.example.msmatricula.entity.Matricula;
import com.example.msmatricula.feign.EstudiantesFeign;
import com.example.msmatricula.repository.MatriculaRepository;
import com.example.msmatricula.service.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MatriculaServiceImpl implements MatriculaService {
    @Autowired
    private MatriculaRepository matriculaRepository;
    @Autowired
    private EstudiantesFeign estudiantesFeign;


    @Override
    public List<Matricula> lista() {
        return matriculaRepository.findAll();
    }

    @Override
    public Matricula guardar(Matricula matricula) {

        return matriculaRepository.save(matricula);
    }

    @Override
    public Optional<Matricula> buscarPorId(Integer id) {
        Optional<Matricula> matricula = matriculaRepository.findById(id);
        EstudianteDto estudianteDto = estudiantesFeign.buscarPorId(matricula.get().getEstudianteId()).getBody();
        List<Horario> horarios = matricula.get().getDetallehorario().stream().map(horario -> {
            horario.setEstudianteDto(estudiantesFeign.buscarPorId(horario.getEstudianteId()).getBody());
            return horario;
        }).toList();
        matricula.get().setEstudianteDto(estudianteDto);
        matricula.get().setDetallehorario(horarios);
        return matriculaRepository.findById(id);
    }
    @Override
    public Matricula actualizar(Matricula matricula) {
        return matriculaRepository.save(matricula);
    }

    @Override
    public void eleminar(Integer id) {
        matriculaRepository.deleteById(id);

    }
}
