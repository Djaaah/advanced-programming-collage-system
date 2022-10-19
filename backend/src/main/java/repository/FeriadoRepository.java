package repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Feriado;

public interface FeriadoRepository extends JpaRepository<Feriado, Date>{

}
