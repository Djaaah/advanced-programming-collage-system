package repository;


import org.springframework.data.jpa.repository.JpaRepository;
import model.Alunos;

public interface AlunosRepository extends JpaRepository<Alunos, Integer>{
	
}
