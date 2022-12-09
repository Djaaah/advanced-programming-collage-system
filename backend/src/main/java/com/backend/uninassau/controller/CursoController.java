package com.backend.uninassau.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.uninassau.model.*;
import com.backend.uninassau.repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class CursoController {

	@Autowired
	private CursoRepository cursoRepository;
	
	@PostMapping(path="/cursos")
	public @ResponseBody String salvarNovoCurso(@RequestBody Curso novoCurso) {

		cursoRepository.save(novoCurso);
		return "Curso salvo com Sucesso";
	}
	
	@GetMapping("/cursos")
	public @ResponseBody List<Curso> obterTodosCursos(){
		return cursoRepository.findAll();
	}
	
	@GetMapping("/curso/{idCurso}")
	public @ResponseBody Curso obterCursoPeloId(@PathVariable("idCurso") Integer idCurso) {
		return cursoRepository.findById(idCurso).orElseThrow(/*() -> new CursoNotFoundException(idCurso)*/);
	}
	
	@PutMapping("/cursos/{idCurso}")
	public @ResponseBody String atualizarCursoPorId(@RequestBody Curso novoCurso, @PathVariable("idCurso") Integer idCurso) {	
		 
		if(!cursoRepository.existsById(idCurso)) {
			/*throw new CursoNotFoundException(idCurso);*/
		}
			
			Curso curso = cursoRepository.findById(idCurso).get();
			
			curso.setNomeCurso(novoCurso.getNomeCurso());
			curso.setChTotal(novoCurso.getChTotal());
			curso.setTurno(novoCurso.getTurno());
			curso.setValor(novoCurso.getValor());
			curso.setSeg(novoCurso.getSeg());
			curso.setTer(novoCurso.getTer());
			curso.setQua(novoCurso.getQua());
			curso.setQui(novoCurso.getQui());
			curso.setSex(novoCurso.getSex());
			curso.setSab(novoCurso.getSab());
			
			cursoRepository.save(novoCurso);
			
			return "Curso Atualizado com Sucesso";
				
		
	}
	
	@DeleteMapping("/cursos/{idCurso}")
	public @ResponseBody String deleteCurso(@PathVariable("idCurso") Integer idCurso) {
		/*if(!turmaRepository.existsById(idCurso)) {
			throw new TurmaNotFoundException(idCurso);
		}*/
		
		cursoRepository.deleteById(idCurso);
		
		return "Curso de ID: " + idCurso + " Foi deletado com Sucesso!.";
	}
}
