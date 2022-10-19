package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class DiaAula {

	@Id
	@GeneratedValue
	private Integer idCurso;
	
	private Integer dataAula;

	public Integer getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(Integer idCurso) {
		this.idCurso = idCurso;
	}

	public Integer getDataAula() {
		return dataAula;
	}

	public void setDataAula(Integer dataAula) {
		this.dataAula = dataAula;
	}
	
	
}
