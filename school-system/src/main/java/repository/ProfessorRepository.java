package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer>{

}
