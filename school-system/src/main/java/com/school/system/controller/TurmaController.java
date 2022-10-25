package controller;

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

import repository.*;
import model.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class TurmaController {
	
	@Autowired
	private TurmaRepository turmaRepository;
	
	@PostMapping("/add/new_turma/add")
	Turma newTurma(@RequestBody Turma newTurma) {
		return turmaRepository.save(newTurma);
	}
	
	@GetMapping("/turmas")
	List<Turma> getAllTurmas(){
		return turmaRepository.findAll();
	}
	
	@GetMapping("/turma/{idTurma}")
	Turma getTurmaById(@PathVariable Integer idTurma) {
		return turmaRepository.findById(idTurma).orElseThrow(/*() -> new TurmaNotFoundException(idTurma)*/);
	}
	
	@PutMapping("/turma/{idTurma}")
	Turma updateTurma(@RequestBody Turma newTurma, @PathVariable Integer idTurma) {
		return turmaRepository.findById(idTurma).map(turma -> {
			turma.setIdCurso(newTurma.getIdCurso());
			turma.setIdProfessor(newTurma.getIdProfessor());
			turma.setValor(newTurma.getValor());
			return turmaRepository.save(turma);
		}).orElseThrow(/*() -> new TurmaNotFoundException(idTurma)*/);
	}
	
	@DeleteMapping("/turma/{idTurma}")
	String deleteTurma(@PathVariable("idTurma") Integer idTurma) {
		/*if(!turmaRepository.existsById(idTurma)) {
			throw new TurmaNotFoundException(idTurma);
		}*/
		
		return "Turma de ID: " + idTurma +" Foi deletada com Sucesso!.";
	}
}
