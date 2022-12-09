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
public class ProfessorController {
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@PostMapping("/professores")
	public @ResponseBody String salvarNovoProfessor(@RequestBody Professor novoProfessor) {
		
		professorRepository.save(novoProfessor);
		return "Professor Salvo com Sucesso";
	}
	
	@GetMapping("/professores")
	public @ResponseBody List<Professor> obterTodosProfessores(){
		return professorRepository.findAll();
	}
	
	@GetMapping("/professor/{idProfessor}")
	public @ResponseBody Professor obterProfessorPorId(@PathVariable("idProfessor") Integer idProfessor) {
		return professorRepository.findById(idProfessor).orElseThrow(/*() -> new ProfessorNotFoundException(idTurma)*/);
	}
	
	@PutMapping("/professores/{idProfessor}")
	public @ResponseBody String atualizarProfessorPorId(@RequestBody Professor novoProfessor, @PathVariable("idProfessor") Integer idProfessor) {
		
		if(!professorRepository.existsById(idProfessor)) {
			/*throw new ProfessorNotFoundException(idProfessor);*/
		}
		
		
		Professor professor = professorRepository.findById(idProfessor).get();
		
		
		professor.setNome(novoProfessor.getNome());
		professor.setTelefone(novoProfessor.getTelefone());
		professor.setValorHoraAula(novoProfessor.getValorHoraAula());
		
		professorRepository.save(professor);
		
		return "Professor Atualizado com Sucesso";
		
	}
	
	@DeleteMapping("/professores/{idProfessor}")
	public @ResponseBody String deleteProfessor(@PathVariable("idProfessor") Integer idProfessor) {
		/*if(!turmaRepository.existsById(idProfessor)) {
			throw new ProfessorNotFoundException(idProfessor);
		}*/
		
		professorRepository.deleteById(idProfessor);
		
		return "Professor de ID: " + idProfessor +" Foi deletado com Sucesso!.";
	}
}	
