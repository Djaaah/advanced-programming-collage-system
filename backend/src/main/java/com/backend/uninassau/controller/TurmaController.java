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
public class TurmaController {
	
	@Autowired
	private TurmaRepository turmaRepository;
	
	@PostMapping("/turmas")
	public @ResponseBody String salvarNovaTurma(@RequestBody Turma novaTurma) {
		
		
		
		turmaRepository.save(novaTurma);
		return "Turma salva com sucesso!";
	}
	
	@GetMapping("/turmas")
	public @ResponseBody List<Turma> obterTodasTurmas(){
		return turmaRepository.findAll();
	}
	
	@GetMapping("/turma/{idTurma}")
	public @ResponseBody Turma obterTurmasPorId(@PathVariable("idTurma") Integer idTurma) {
		return turmaRepository.findById(idTurma).orElseThrow(/*() -> new TurmaNotFoundException(idTurma)*/);
	}
	
	@PutMapping("/turmas/{idTurma}")
	public @ResponseBody String atualizarTurmaPorId(@RequestBody Turma novaTurma, @PathVariable("idTurma") Integer idTurma) {
	
		if(!turmaRepository.existsById(idTurma)) {
			/*throw new TurmaNotFoundException(idTurma);*/
		}
		
		Turma turma = turmaRepository.findById(idTurma).get();
			turma.setIdCurso(novaTurma.getIdCurso());
			turma.setIdProfessor(novaTurma.getIdProfessor());
			
			
			turmaRepository.save(turma);
			return "Turma Atualizada com Sucesso";
		
	}
	
	@DeleteMapping("/turmas/{idTurma}")
	public @ResponseBody String deleteTurma(@PathVariable("idTurma") Integer idTurma) {
		/*if(!turmaRepository.existsById(idTurma)) {
			throw new TurmaNotFoundException(idTurma);
		}*/
		
		turmaRepository.deleteById(idTurma);
		
		return "Turma de ID: " + idTurma +" Foi deletada com Sucesso!.";
	}
}
