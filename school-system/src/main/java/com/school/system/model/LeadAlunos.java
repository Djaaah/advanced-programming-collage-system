package com.school.system.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LeadAlunos {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer idLead;

	private String nomeCompleto;
	private String telefone;
	private Date dataCadastro;
	private String status2;
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

	public String getStatus2() {
		return status2;
	}

	public void setStatus2(String status2) {
		this.status2 = status2;
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
