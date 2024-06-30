package com.example.msconducta.service;


import com.example.msconducta.entity.Conducta;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ConductaService {
    List<Conducta> getAllConductas();
    Conducta getConductaById(Integer id);
    Conducta createConducta(Conducta conducta);
    Conducta updateConducta(Integer id, Conducta conducta);
    void deleteConducta(Integer id);
}
