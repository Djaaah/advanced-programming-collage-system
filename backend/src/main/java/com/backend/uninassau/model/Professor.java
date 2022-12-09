package com.backend.uninassau.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Professor{
	
	@Id
	@GeneratedValue
	@Column(unique=true, nullable=false)
	private Integer idProfessor;
	
	@Column(unique=true, nullable=false)
	private String nome;
	@Column(nullable=false)
	private String telefone;
	@Column(nullable=false)
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
