package com.backend.uninassau.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.uninassau.model.LeadAlunos;

public interface LeadRepository extends JpaRepository<LeadAlunos, Integer>{

}
