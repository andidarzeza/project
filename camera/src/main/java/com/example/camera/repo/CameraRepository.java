package com.example.camera.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;

import src.main.java.com.example.camera.Camera;

public interface CameraRepository extends MongoRepository<Camera, String>{

	Optional<Camera> findById(String id);
	List<Camera>findByName(String name);
	
}
