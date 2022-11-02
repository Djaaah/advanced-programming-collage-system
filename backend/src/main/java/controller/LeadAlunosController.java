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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import model.*;
import repository.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class LeadAlunosController {
	
	@Autowired
	private LeadRepository leadRepository;
	
	@PostMapping("/add/new_lead/add")
	public @ResponseBody String salvarNovoLead(@RequestBody LeadAlunos novoLead) {
		
		for (int i = 0; i < leadRepository.findAll().size(); i++) {
			if(novoLead.getIdLead().equals(leadRepository.findAll().get(i).getIdLead())) {
				return "ID de Lead Já Cadastrado!";
			}
		}

		leadRepository.save(novoLead);
		return "Lead Salvo com Sucesso!" ;
	}
	
	@GetMapping("/lead_alunos")
	public @ResponseBody List<LeadAlunos> obterTodosLeads(){
		return leadRepository.findAll();
	}
	
	@GetMapping("/lead/{idLead}")
	public @ResponseBody LeadAlunos obterLeadPorId(@PathVariable("idLead") Integer idLead) {
		return leadRepository.findById(idLead).orElseThrow(/*() -> new LeadNotFoundException(idLead)*/);
	}
	
	@PutMapping("/lead/{idLead}")
	public @ResponseBody String atualizarLeadPorId(@RequestBody LeadAlunos novoLead, @PathVariable("idLead") Integer idLead) {
		
		if(!leadRepository.existsById(idLead)) {
			/*throw new LeadNotFoundException(idLead);*/
		}
		for (int i = 0; i < leadRepository.findAll().size(); i++) {
			if(novoLead.getIdLead().equals(leadRepository.findAll().get(i).getIdLead())) {
				return "ID de Lead Já Cadastrado!";
			}
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
	
	@DeleteMapping("/lead/{idLead}")
	public @ResponseBody String deleteLead(@PathVariable("idLead") Integer idLead) {
		/*if(!leadRepository.existsById(idLead)) {
			throw new LeadNotFoundException(idLead);
		}*/
		
		leadRepository.deleteById(idLead);
		
		return "Lead de ID: " + idLead +" Foi deletado com Sucesso!";
	}
}
