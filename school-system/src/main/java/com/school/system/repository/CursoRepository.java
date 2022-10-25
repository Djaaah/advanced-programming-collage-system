package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Integer>{

}
