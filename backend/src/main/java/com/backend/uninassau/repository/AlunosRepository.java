package com.backend.uninassau.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import  com.backend.uninassau.model.Alunos;

public interface AlunosRepository extends JpaRepository<Alunos, Integer>{
	
}
