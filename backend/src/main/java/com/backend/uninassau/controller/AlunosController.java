package com.backend.uninassau.controller;

import java.util.ArrayList;
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

import com.backend.uninassau.exception.AlunoNotFoundException;
import com.backend.uninassau.model.*;
import com.backend.uninassau.repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class AlunosController {
	
	@Autowired
	private AlunosRepository alunosRepository;
	
	@PostMapping("/alunos")
	public @ResponseBody String salvarNovoAluno(@RequestBody Alunos novoAluno) {
		
		alunosRepository.save(novoAluno);
		return "Aluno cadastrado com Sucesso!";
	}

	@GetMapping("/alunos")
	public @ResponseBody List<Alunos> obterTodosAlunos(){
		
		// Fazer Páginação ??
		
		return alunosRepository.findAll();
	}
	
	@GetMapping("/aluno/{matricula}")
	public @ResponseBody Alunos obterAlunoPelaMatricula(@PathVariable("matricula") Integer matricula) {
		return alunosRepository.findById(matricula).orElseThrow(() -> new AlunoNotFoundException(matricula));
	}
	
	@PutMapping("/alunos/{matricula}")
	public @ResponseBody String atualizarAlunoPelaMatricula(@RequestBody Alunos novoAluno, @PathVariable("matricula") Integer matricula) {	
		
		if(!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}
		
		Alunos aluno = alunosRepository.findById(matricula).get();
		
		aluno.setNomeCompleto(novoAluno.getNomeCompleto());
		aluno.setTelefone(novoAluno.getTelefone());
		aluno.setEndereco(novoAluno.getEndereco());
		aluno.setCpf(novoAluno.getCpf());
		aluno.setIdTurma(novoAluno.getIdTurma());
		
		alunosRepository.save(aluno);
		
		return "Aluno Atualizado com Sucesso!";	
	}
	
	@DeleteMapping("/alunos/{matricula}")
	public @ResponseBody String deleteAlunos(@PathVariable("matricula") Integer matricula) {
		if(!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}
		
		alunosRepository.deleteById(matricula);
		return "Aluno de matricula: " + matricula + " foi deletado com sucesso.";
	}
	
	@GetMapping("/alunos/{idTurma}")
	List<Alunos> obterAlunosPorTurma(@PathVariable("idTurma") Integer idTurma){
		
		List<Alunos> alunos = new ArrayList<Alunos>();
		
		for (int i = 0; i < alunosRepository.findAll().size(); i++) {
			if(obterTodosAlunos().get(i).getIdTurma() == idTurma) {
				alunos.add(obterTodosAlunos().get(i));
			}
		}
		return alunos;
	}
}
