package com.school.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.school.system.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Integer>{
	
}
