package com.school.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.school.system.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer>{

}
