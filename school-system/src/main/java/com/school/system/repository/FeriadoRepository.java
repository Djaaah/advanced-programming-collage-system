package com.school.system.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.system.model.Feriado;

public interface FeriadoRepository extends JpaRepository<Feriado, Date>{

}
