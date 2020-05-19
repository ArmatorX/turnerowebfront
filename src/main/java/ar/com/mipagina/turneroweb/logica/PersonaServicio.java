package ar.com.mipagina.turneroweb.logica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import ar.com.mipagina.turneroweb.modelo.Persona;
import ar.com.mipagina.turneroweb.persistencia.PersonaRepositorio;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaServicio {
	
	@Autowired
	private PersonaRepositorio repositorio;

	public List<Persona> listarTodos() {
		Sort orden = Sort.by(Direction.ASC, "nombre");
		
		return repositorio.findAll(orden);
	}
	
	public Page<Persona> listarTodosFiltradoPorNombre(String nombre, Pageable pagina) {
		//Pageable pagina = PageRequest.of(0, 10);
		
		return repositorio.findByNombreContainingIgnoreCase(nombre, pagina);
	}
	
	public List<Persona> listarTodosFiltradoPorLocalidad(String nombre) {
		return repositorio.findByLocalidad_NombreContainingIgnoreCase(nombre);
	}
	
	public Optional<Persona> getPersona(Integer id) {
		//return repositorio.getOne(id); // getOne() no anda con el postgres por cosas del lazy fetch.
		return repositorio.findById(id);
	}

	public Persona guardar(Persona p) {
		return repositorio.save(p);
	}

	public Persona actualizar(Persona p) {
		if (p.getId() == null) {
			throw new RuntimeException("Error: El objeto no tiene id.");
		}
		
		return repositorio.save(p);
	}

	public void eliminar(Integer id) {
		repositorio.deleteById(id);
	}
}
