package com.example.camera.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.example.camera.repo.CameraRepository;

import src.main.java.com.example.camera.Camera;

@EnableMongoRepositories(basePackageClasses= CameraRepository.class)
@Configuration
public class MongoConfiguration{
	
}

