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

import exception.AlunoNotFoundException;
import model.*;
import repository.*;

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
	
	@GetMapping("/alunos/{matricula}")
	Alunos getAlunosById(@PathVariable Integer matricula) {
		return alunosRepository.findById(matricula).orElseThrow(() -> new AlunoNotFoundException(matricula));
	}
	
	@PutMapping("/alunos/{matricula}")
	Alunos updateAlunos(@RequestBody Alunos newAluno, @PathVariable Integer matricula) {	
		return alunosRepository.findById(matricula).map(alunos -> {
			alunos.setNomeCompleto(newAluno.getNomeCompleto());
			alunos.setTelefone(newAluno.getTelefone());
			alunos.setEndereco(newAluno.getEndereco());
			alunos.setCpf(newAluno.getCpf());
			alunos.setIdTurma(newAluno.getIdTurma());
			return alunosRepository.save(alunos);
		}).orElseThrow(() -> new AlunoNotFoundException(matricula));
	}
	
	@DeleteMapping("/alunos/{matricula}")
	String deleteAlunos(@PathVariable("matricula") Integer matricula) {
		if(!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}
		
		alunosRepository.deleteById(matricula);
		return "Student with matricula: " + matricula +" has been Deleted Success.";
		
	}
}
