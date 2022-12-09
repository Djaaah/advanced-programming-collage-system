package com.backend.uninassau.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity

public class Alunos{
	
	@Id
	@GeneratedValue
	@Column(unique=true, nullable=false)
	private Integer matricula;
	
	@Column(nullable=false)
	private String nomeCompleto;
	@Column(nullable=false)
	private String telefone;
	@Column(nullable=false)
	private String endereco;
	
	@Column(unique=true, nullable=false)
	private String cpf;
	
	
	@Column(nullable=false)
	private int idTurma;
	
	public Integer getMatricula() {
		return matricula;
	}
	public void setMatricula(Integer matricula) {
		this.matricula = matricula;
	}
	public String getNomeCompleto() {
		return nomeCompleto;
	}
	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public int getIdTurma() {
		return idTurma;
	}
	public void setIdTurma(int turmaId) {
		this.idTurma = turmaId;
	}
}
