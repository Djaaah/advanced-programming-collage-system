package model;

import java.util.Date;

import javax.persistence.Id;

public class Feriado {
	
	@Id
	private Date dataFeriado;
	private Integer descricao;
	
	public Date getDataFeriado() {
		return dataFeriado;
	}
	public void setDataFeriado(Date dataFeriado) {
		this.dataFeriado = dataFeriado;
	}
	public Integer getDescricao() {
		return descricao;
	}
	public void setDescricao(Integer descricao) {
		this.descricao = descricao;
	}
	
}
