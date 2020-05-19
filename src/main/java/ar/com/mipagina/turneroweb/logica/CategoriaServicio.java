package ar.com.mipagina.turneroweb.logica;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import ar.com.mipagina.turneroweb.modelo.Categoria;
import ar.com.mipagina.turneroweb.persistencia.CategoriaRepositorio;

@Service
public class CategoriaServicio {

	@Autowired
	private CategoriaRepositorio repositorio;

	public List<Categoria> listarTodos() {
		return repositorio.findAll();
	}
	
	public List<Categoria> listarTodosFiltradoPorNombreYDescripcion(String nombre, String descripcion) {
		return repositorio.findByNombreContainingIgnoreCaseAndDescripcionContainingIgnoreCase(nombre, descripcion);
	}
	

	public List<Categoria> listarTodosFiltradoPorNombreODescripcion(String nombre, String descripcion) {
		return repositorio.findByNombreContainingIgnoreCaseOrDescripcionContainingIgnoreCase(nombre, descripcion);
	}
	
	public Page<Categoria> listarTodosFiltradosPorNombre(String nombre, Pageable pagina) {
		return repositorio.findByNombreContainingIgnoreCase(nombre, pagina);
	}
	
	public Page<Categoria> listarTodosFiltradosPorDescripcion(String descripcion, Pageable pagina) {
		return repositorio.findByDescripcionContainingIgnoreCase(descripcion, pagina);
	}
	
	public Optional<Categoria> getCategoria(Integer id) {
		//return repositorio.getOne(id); // getOne() no anda con el postgres por cosas del lazy fetch.
		return repositorio.findById(id);
	}

	public Categoria guardar(Categoria c) {
		return repositorio.save(c);
	}

	public Categoria actualizar(Categoria c) {
		if (c.getId() == null) {
			throw new RuntimeException("Error: El objeto no tiene id.");
		}
		
		return repositorio.save(c);
	}

	public void eliminar(Integer id) {
		repositorio.deleteById(id);
	}
}
