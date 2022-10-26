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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.system.exception.AlunoNotFoundException;
import com.school.system.model.*;
import com.school.system.repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class AlunoController {

	@Autowired
	private AlunoRepository alunosRepository;

	@PostMapping("/alunos")
	public @ResponseBody Aluno salvarNovoAluno(@RequestBody Aluno aluno) {
		// TODO: Verificar se aluno de mesmo CPF/matricula já não existe.
		return alunosRepository.save(aluno);
	}

	@GetMapping("/alunos")
	public @ResponseBody List<Aluno> obterTodosAlunos() {
		// TODO: Usar a classe Pageable para fazer a paginação no frontend
		return alunosRepository.findAll();
	}

	@GetMapping("/alunos/{matricula}")
	public @ResponseBody Aluno obterAlunoPelaMatricula(@PathVariable("matricula") Integer matricula) {
		return alunosRepository.findById(matricula).orElseThrow(() -> new AlunoNotFoundException(matricula));
	}

	@PutMapping("/alunos/{matricula}")
	public @ResponseBody Aluno atualizarAlunoPelaMatricula(@RequestBody Aluno body, @PathVariable("matricula") Integer matricula) {
		// Só pode existir um único aluno por matrícula

		if (!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}

		Aluno aluno = alunosRepository.findById(matricula).get();

		aluno.setNomeCompleto(body.getNomeCompleto());
		aluno.setTelefone(body.getTelefone());
		aluno.setEndereco(body.getEndereco());
		aluno.setCpf(body.getCpf());
		aluno.setIdTurma(body.getIdTurma());

		return alunosRepository.save(aluno);
	}

	@DeleteMapping("/alunos/{matricula}")
	public @ResponseBody String deleteAlunos(@PathVariable("matricula") Integer matricula) {
		if (!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}

		alunosRepository.deleteById(matricula);

		return "Student with matricula: " + matricula + " has been deleted successfully!";
	}
	
}
