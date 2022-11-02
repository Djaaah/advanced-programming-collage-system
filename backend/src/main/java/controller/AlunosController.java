package controller;

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

import exception.AlunoNotFoundException;
import model.*;
import repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class AlunosController {
	
	@Autowired
	private AlunosRepository alunosRepository;
	
	@PostMapping("/add/new_aluno/add")
	public @ResponseBody String salvarNovoAluno(@RequestBody Alunos novoAluno) {
		for (int i = 0; i < alunosRepository.findAll().size(); i++) {
			if(novoAluno.getCpf().contentEquals(alunosRepository.findAll().get(i).getCpf())) {
				return "CPF Já cadastrado!";
			}
		}
		
		for (int i = 0; i < alunosRepository.findAll().size(); i++) {
			if(novoAluno.getMatricula().equals(alunosRepository.findAll().get(i).getMatricula())) {
				return "Matricula Já cadastrado!";
			}
		}
		
		alunosRepository.save(novoAluno);
		return "Aluno cadastrado com Sucesso!";
	}

	@GetMapping("/alunos")
	public @ResponseBody List<Alunos> obterTodosAlunos(){
		
		// Fazer Páginação ??
		
		return alunosRepository.findAll();
	}
	
	@GetMapping("/alunos/{matricula}")
	public @ResponseBody Alunos obterAlunoPelaMatricula(@PathVariable("matricula") Integer matricula) {
		return alunosRepository.findById(matricula).orElseThrow(() -> new AlunoNotFoundException(matricula));
	}
	
	@PutMapping("/alunos/{matricula}")
	public @ResponseBody String atualizarAlunoPelaMatricula(@RequestBody Alunos novoAluno, @PathVariable Integer matricula) {	
		
		if(!alunosRepository.existsById(matricula)) {
			throw new AlunoNotFoundException(matricula);
		}
		
		for (int i = 0; i < alunosRepository.findAll().size(); i++) {
			if(novoAluno.getCpf().contentEquals(alunosRepository.findAll().get(i).getCpf())) {
				return "CPF Já cadastrado!";
			}
		}
		
		for (int i = 0; i < alunosRepository.findAll().size(); i++) {
			if(novoAluno.getMatricula().equals(alunosRepository.findAll().get(i).getMatricula())) {
				return "Matricula Já cadastrado!";
			}
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
	
	@GetMapping("/alunos/pturma/{idTurma}")
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
