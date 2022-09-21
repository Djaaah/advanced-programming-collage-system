package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import model.Alunos;
import repository.AlunosRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class AlunosController {
	
	@Autowired
	private AlunosRepository alunosRepository;
	
	
	
	@PostMapping("/add/new_aluno/add")
	Alunos newAluno(@RequestBody Alunos newAluno) {
		return alunosRepository.save(newAluno);
	}
	
	@GetMapping("/alunos")
	List<Alunos> getAllAlunos(){
		return alunosRepository.findAll();
	}
	
}
