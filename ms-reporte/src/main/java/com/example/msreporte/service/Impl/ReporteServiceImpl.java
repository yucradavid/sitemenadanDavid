package com.example.msreporte.service.Impl;

import java.util.List;
import java.util.Optional;

import com.example.msreporte.dto.DocenteDto;
import com.example.msreporte.dto.EstudianteDto;
import com.example.msreporte.dto.MatriculaDto;
import com.example.msreporte.dto.RegistroAsistenciaDto;
import com.example.msreporte.entity.Reporte;
import com.example.msreporte.feign.AdmatriculaFeign;
import com.example.msreporte.feign.EstudianteFeign;
import com.example.msreporte.feign.GestionDocenteFeign;
import com.example.msreporte.feign.MonitoreoAsistenciaFeign;
import com.example.msreporte.repository.ReporteRepository;
import com.example.msreporte.service.ReporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ReporteServiceImpl implements ReporteService {
    @Autowired
    private ReporteRepository reporteRepository;
    @Autowired
    private GestionDocenteFeign gestionDocenteFeign;
    @Autowired
    private EstudianteFeign estudianteFeign;
    @Autowired
    private AdmatriculaFeign admatriculaFeign;
    @Autowired
    private MonitoreoAsistenciaFeign monitoreoAsistenciaFeign;


    @Override
    public List<Reporte> lista() {
        return reporteRepository.findAll();
    }

    @Override
    public Reporte guardar(Reporte reporte) {
        return reporteRepository.save(reporte);
    }

    @Override
    public Optional<Reporte> buscarPorId(Integer id) {
        Optional<Reporte> reporte = reporteRepository.findById(id);
        // Suponiendo que tienes métodos en tus clientes Feign para buscar los DTOs necesarios
        DocenteDto docenteDto = gestionDocenteFeign.buscarPorId(reporte.get().getDocenteid()).getBody();
        EstudianteDto estudianteDto = estudianteFeign.buscarPorId(reporte.get().getEstudianteid()).getBody();
        MatriculaDto matriculaDto = admatriculaFeign.buscarPorId(reporte.get().getMatriculaid()).getBody();
        RegistroAsistenciaDto registroAsistenciaDto = monitoreoAsistenciaFeign.buscarPorId(reporte.get().getAsistenciaid()).getBody();

        // Setear los DTOs en el reporte
        reporte.get().setDocenteDto(docenteDto);
        reporte.get().setEstudianteDto(estudianteDto);
        reporte.get().setMatriculaDto(matriculaDto);
        reporte.get().setRegistroAsistenciaDto(registroAsistenciaDto);

        return reporte;
    }


    @Override
    public Reporte actualizar(Reporte reporte) {
        return reporteRepository.save(reporte);
    }

    @Override
    public void eleminar(Integer id) {
        reporteRepository.deleteById(id);

    }
}
