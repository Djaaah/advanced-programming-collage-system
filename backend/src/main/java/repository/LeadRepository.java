package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import model.LeadAlunos;

public interface LeadRepository extends JpaRepository<LeadAlunos, Integer>{

}
