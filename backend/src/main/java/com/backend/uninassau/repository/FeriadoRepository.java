package com.backend.uninassau.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.uninassau.model.Feriado;

public interface FeriadoRepository extends JpaRepository<Feriado, Date>{

}
