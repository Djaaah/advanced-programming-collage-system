package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Turma{
	
	@Id
	@GeneratedValue
	private Integer idTurma;
	
	private Integer IdCurso;
	private Integer IdProfessor;
	private Float valor;
	
	public Integer getIdTurma() {
		return idTurma;
	}
	public void setIdTurma(Integer idTurma) {
		this.idTurma = idTurma;
	}
	public Integer getIdCurso() {
		return IdCurso;
	}
	public void setIdCurso(Integer idCurso) {
		IdCurso = idCurso;
	}
	public Integer getIdProfessor() {
		return IdProfessor;
	}
	public void setIdProfessor(Integer idProfessor) {
		IdProfessor = idProfessor;
	}
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}	
}
