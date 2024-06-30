package com.example.msconducta.repository;


import com.example.msconducta.entity.Conducta;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConductaRepository extends JpaRepository <Conducta,Integer> {

}
