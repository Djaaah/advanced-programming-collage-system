package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import exception.AlunoNotFoundException;
import model.*;
import repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;
	
	@PostMapping("/add/new_curso/add")
	Curso newCurso(@RequestBody Curso newCurso) {
		return cursoRepository.save(newCurso);
	}
	
	@GetMapping("/cursos")
	List<Curso> getAllCursos(){
		return cursoRepository.findAll();
	}
	
	@GetMapping("/curso/{idCurso}")
	Curso getCursoById(@PathVariable Integer idCurso) {
		return cursoRepository.findById(idCurso).orElseThrow(/*() -> new CursoNotFoundException(idCurso)*/);
	}
	
	@PutMapping("/curso/{idCurso}")
	Curso updateCurso(@RequestBody Curso newCurso, @PathVariable Integer idCurso) {	
		return cursoRepository.findById(idCurso).map(curso -> {
			curso.setNomeCurso(newCurso.getNomeCurso());
			curso.setChAula(newCurso.getChAula());
			curso.setChTotal(newCurso.getChTotal());
			curso.setTurno(newCurso.getTurno());
			curso.setValor(newCurso.getValor());
			
			return cursoRepository.save(curso);
		}).orElseThrow(/*() -> new CursoNotFoundException(idCurso)*/);
	}
}
