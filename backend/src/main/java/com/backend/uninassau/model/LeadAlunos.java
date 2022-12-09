package com.backend.uninassau.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class LeadAlunos {
	
	@Id
	@GeneratedValue
	@Column(unique=true, nullable=false)
	private Integer idLead;

	@Column(nullable=false)
	private String nomeCompleto;
	
	@Column(unique=true, nullable=false)
	private String telefone;
	@Column(nullable=false)
	private Date dataCadastro;
	@Column(nullable=false)
	private String status_2;
	@Column(nullable=false)
	private Date dataNovoContato;
	private String observacao;
	
	public Integer getIdLead() {
		return idLead;
	}
	public void setIdLead(Integer idLead) {
		this.idLead = idLead;
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
	public Date getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	public String getStatus_2() {
		return status_2;
	}
	public void setStatus_2(String status_2) {
		this.status_2 = status_2;
	}
	public Date getDataNovoContato() {
		return dataNovoContato;
	}
	public void setDataNovoContato(Date dataNovoContato) {
		this.dataNovoContato = dataNovoContato;
	}
	public String getObservacao() {
		return observacao;
	}
	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
}
