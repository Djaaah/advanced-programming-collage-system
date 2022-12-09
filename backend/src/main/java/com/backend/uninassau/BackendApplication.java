package com.backend.uninassau;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;


@EntityScan(basePackages = "com.backend.uninassau.model")
@SpringBootApplication
@ComponentScan({"com.backend.uninassau.controller"})
@RequestMapping
@EnableJpaRepositories("com.backend.uninassau.repository")
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}
