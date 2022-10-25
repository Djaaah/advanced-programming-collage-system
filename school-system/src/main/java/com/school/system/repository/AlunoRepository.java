package repository;


import org.springframework.data.jpa.repository.JpaRepository;
import model.Alunos;

public interface AlunoRepository extends JpaRepository<Alunos, Integer>{
	
}
