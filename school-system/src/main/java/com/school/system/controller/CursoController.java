package com.school.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.system.model.*;
import com.school.system.repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;

	@PostMapping("/cursos")
	public Curso addNewCurso(@RequestBody Curso curso) {
		return cursoRepository.save(curso);
	}

	@GetMapping("/cursos")
	public List<Curso> getAllCursos() {
		return cursoRepository.findAll();
	}

	@GetMapping("/cursos/{idCurso}")
	public Curso getCursoById(@PathVariable Integer idCurso) {
		return cursoRepository.findById(idCurso).orElseThrow(/* () -> new CursoNotFoundException(idCurso) */);
	}

	@PutMapping("/cursos/{idCurso}")
	public Curso updateCurso(@RequestBody Curso newCurso, @PathVariable Integer idCurso) {
		return cursoRepository.findById(idCurso).map(curso -> {
			curso.setNomeCurso(newCurso.getNomeCurso());
			curso.setChAula(newCurso.getChAula());
			curso.setChTotal(newCurso.getChTotal());
			curso.setTurno(newCurso.getTurno());
			curso.setValor(newCurso.getValor());
			curso.setSeg(newCurso.getSeg());
			curso.setTer(newCurso.getTer());
			curso.setQua(newCurso.getQua());
			curso.setQui(newCurso.getQui());
			curso.setSex(newCurso.getSex());
			curso.setSab(newCurso.getSab());
			return cursoRepository.save(curso);
		}).orElseThrow(/* () -> new CursoNotFoundException(idCurso) */);
	}

	@DeleteMapping("/cursos/{idCurso}")
	public String deleteCurso(@PathVariable("idCurso") Integer idCurso) {
		/*
		 * if(!turmaRepository.existsById(idCurso)) {
		 * throw new TurmaNotFoundException(idCurso);
		 * }
		 */

		return "Curso de ID: " + idCurso + " Foi deletado com Sucesso!.";
	}
}
