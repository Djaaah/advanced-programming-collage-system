package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Curso{
	
	@Id
	@GeneratedValue
	private Integer idCurso;
	
	private String nomeCurso;
	private Float chAula;
	private Float chTotal;
	private String turno;
	private Float valor;
	private int seg;
	private int ter;
	private int qua;
	private int qui;
	private int sex;
	private int sab;
	
	public Integer getIdCurso() {
		return idCurso;
	}
	public void setIdCurso(Integer idCurso) {
		this.idCurso = idCurso;
	}
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	public Float getChAula() {
		return chAula;
	}
	public void setChAula(Float chAula) {
		this.chAula = chAula;
	}
	public Float getChTotal() {
		return chTotal;
	}
	public void setChTotal(Float chTotal) {
		this.chTotal = chTotal;
	}
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}
	public int getSeg() {
		return seg;
	}
	public void setSeg(int seg) {
		this.seg = seg;
	}
	public int getTer() {
		return ter;
	}
	public void setTer(int ter) {
		this.ter = ter;
	}
	public int getQua() {
		return qua;
	}
	public void setQua(int qua) {
		this.qua = qua;
	}
	public int getQui() {
		return qui;
	}
	public void setQui(int qui) {
		this.qui = qui;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public int getSab() {
		return sab;
	}
	public void setSab(int sab) {
		this.sab = sab;
	}
}
