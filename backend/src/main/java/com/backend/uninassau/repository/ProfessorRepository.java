package com.backend.uninassau.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.uninassau.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer>{

}
