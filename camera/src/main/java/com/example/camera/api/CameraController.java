package com.example.camera.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.camera.repo.CameraRepository;

import src.main.java.com.example.camera.Camera;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CameraController {

	@Autowired
	private CameraRepository repo;
	
	@GetMapping("/cameras")
	public List<Camera> getAllCameras(){
		return repo.findAll();
	}
	
	@PostMapping("/camera")
	public void insertCamera(@RequestBody Camera camera) {
		repo.save(camera);
	}
	
	@GetMapping("/camera/{name}")
	public List<Camera> getCameraByName(@PathVariable("name") String name){
		if(name.equals("")) {
			return repo.findAll();
		}else {
			return repo.findByName(name);
		}
	}
	
	@DeleteMapping("/camera/{id}")
	public Optional<Camera> deleteCamera(@PathVariable("id") String id) {
		Optional<Camera> camera = repo.findById(id);
		repo.deleteById(id);
		return camera;
	}
	
}
