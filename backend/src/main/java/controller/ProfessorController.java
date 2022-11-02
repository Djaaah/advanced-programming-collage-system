package controller;

import repository.*;

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

import model.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProfessorController {
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@PostMapping("/add/new_prof/add")
	public @ResponseBody String salvarNovoProfessor(@RequestBody Professor novoProfessor) {
		
		for (int i = 0; i < professorRepository.findAll().size(); i++) {
			if(novoProfessor.getIdProfessor().equals(professorRepository.findAll().get(i).getIdProfessor())) {
				return "ID de Professor Já Cadastrado!";
			}
		}
		
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
	
	@PutMapping("/professor/{idProfessor}")
	public @ResponseBody String atualizarProfessorPorId(@RequestBody Professor novoProfessor, @PathVariable("idProfessor") Integer idProfessor) {
		
		if(!professorRepository.existsById(idProfessor)) {
			/*throw new ProfessorNotFoundException(idProfessor);*/
		}
		
		for (int i = 0; i < professorRepository.findAll().size(); i++) {
			if(novoProfessor.getIdProfessor().equals(professorRepository.findAll().get(i).getIdProfessor())) {
				return "ID de Professor Já Cadastrado!";
			}
		}
		
		Professor professor = professorRepository.findById(idProfessor).get();
		
		
		professor.setNome(novoProfessor.getNome());
		professor.setTelefone(novoProfessor.getTelefone());
		professor.setValorHoraAula(novoProfessor.getValorHoraAula());
		professor.setIdTurma(novoProfessor.getIdTurma());
		
		professorRepository.save(professor);
		
		return "Professor Atualizado com Sucesso";
		
	}
	
	@DeleteMapping("/professor/{idProfessor}")
	public @ResponseBody String deleteProfessor(@PathVariable("idProfessor") Integer idProfessor) {
		/*if(!turmaRepository.existsById(idProfessor)) {
			throw new ProfessorNotFoundException(idProfessor);
		}*/
		
		professorRepository.deleteById(idProfessor);
		
		return "Professor de ID: " + idProfessor +" Foi deletado com Sucesso!.";
	}
}	
