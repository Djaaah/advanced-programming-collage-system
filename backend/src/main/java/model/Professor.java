package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Professor{
	
	@Id
	@GeneratedValue
	private Integer idProfessor;
	
	private String nome;
	private String telefone;
	private Float valorHoraAula;
	
	public Integer getIdProfessor() {
		return idProfessor;
	}
	public void setIdProfessor(Integer idProfessor) {
		this.idProfessor = idProfessor;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public Float getValorHoraAula() {
		return valorHoraAula;
	}
	public void setValorHoraAula(Float valorHoraAula) {
		this.valorHoraAula = valorHoraAula;
	}
}
