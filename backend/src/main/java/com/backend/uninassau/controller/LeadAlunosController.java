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
public class LeadAlunosController {
	
	@Autowired
	private LeadRepository leadRepository;
	
	@PostMapping("/leads")
	public @ResponseBody String salvarNovoLead(@RequestBody LeadAlunos novoLead) {
		
		leadRepository.save(novoLead);
		return "Lead Salvo com Sucesso!" ;
	}
	
	@GetMapping("/leads")
	public @ResponseBody List<LeadAlunos> obterTodosLeads(){
		return leadRepository.findAll();
	}
	
	@GetMapping("/lead/{idLead}")
	public @ResponseBody LeadAlunos obterLeadPorId(@PathVariable("idLead") Integer idLead) {
		return leadRepository.findById(idLead).orElseThrow(/*() -> new LeadNotFoundException(idLead)*/);
	}
	
	@PutMapping("/leads/{idLead}")
	public @ResponseBody String atualizarLeadPorId(@RequestBody LeadAlunos novoLead, @PathVariable("idLead") Integer idLead) {
		
		if(!leadRepository.existsById(idLead)) {
			/*throw new LeadNotFoundException(idLead);*/
		}
		
		LeadAlunos lead = leadRepository.findById(idLead).get();
		
			lead.setDataCadastro(novoLead.getDataCadastro());
			lead.setDataNovoContato(novoLead.getDataNovoContato());
			lead.setNomeCompleto(novoLead.getNomeCompleto());
			lead.setObservacao(novoLead.getObservacao());
			lead.setStatus_2(novoLead.getStatus_2());
			lead.setTelefone(novoLead.getTelefone());
			
			leadRepository.save(novoLead);
			
			return "Lead Atualizado com Sucesso";
		
	
	}
	
	@DeleteMapping("/leads/{idLead}")
	public @ResponseBody String deleteLead(@PathVariable("idLead") Integer idLead) {
		/*if(!leadRepository.existsById(idLead)) {
			throw new LeadNotFoundException(idLead);
		}*/
		
		leadRepository.deleteById(idLead);
		
		return "Lead de ID: " + idLead +" Foi deletado com Sucesso!";
	}
}
