package ar.com.mipagina.turneroweb.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ar.com.mipagina.turneroweb.logica.PersonaServicio;
import ar.com.mipagina.turneroweb.modelo.Persona;

@RestController 
@RequestMapping("/personas")
public class PersonaControlador {
	
	@Autowired
	private PersonaServicio servicio;
	
	@GetMapping
	public List<Persona> listarTodos() {
		return servicio.listarTodos();
	}
	
	@GetMapping(params = {"nombre"})
	public Page<Persona> listarTodosFiltradoPorNombre(String nombre, Pageable pagina) {
		return servicio.listarTodosFiltradoPorNombre(nombre, pagina);
	}
	
	@GetMapping(params = {"localidad"})
	public List<Persona> listarTodosFiltradoPorLocalidad(String nombre) {
		return servicio.listarTodosFiltradoPorLocalidad(nombre);
	}
	
	@RequestMapping(value = "/{id}")
	public Optional<Persona> getPersona(@PathVariable(name = "id") Integer id) {
		return servicio.getPersona(id);
	}
	
	@PostMapping
	public Persona guardar(@RequestBody Persona p) {
		return servicio.guardar(p);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Persona actualizar(@RequestBody Persona p, @PathVariable(name = "id") Integer id) {
		return servicio.actualizar(p);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable(name = "id") Integer id) {
		servicio.eliminar(id);
	}
}