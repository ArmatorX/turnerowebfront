package ar.com.mipagina.turneroweb.logica;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import ar.com.mipagina.turneroweb.modelo.Turno;
import ar.com.mipagina.turneroweb.persistencia.TurnoRepositorio;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TurnoServicio {
	
	@Autowired
	private TurnoRepositorio repositorio;

	public List<Turno> listarTodos() {
		Sort orden = Sort.by(Direction.ASC, "fecha");
		
		return repositorio.findAll(orden);
	}
	
	public Optional<Turno> getTurno(Integer id) {
		//return repositorio.getOne(id); // getOne() no anda con el postgres por cosas del lazy fetch.
		return repositorio.findById(id);
	}
	
	public Page<Turno> getTurnosPorFecha(Date fecha, Pageable pagina) {
		return repositorio.findByFecha(fecha, pagina);
	}

	public Page<Turno> getTurnosPorNombreApellido(String nombre, Pageable pagina) {
		return repositorio.findByNombreApellidoContainingIgnoreCase(nombre, pagina);
	}
	
	public Turno guardar(Turno t) {
		return repositorio.save(t);
	}

	public Turno actualizar(Turno t) {
		if (t.getId() == null) {
			throw new RuntimeException("Error: El objeto no tiene id.");
		} else if (new java.util.Date().compareTo(t.getFecha()) > 0) {
			throw new RuntimeException("Error: No se puede modificar un turno cuya fecha ya ha ocurrido.");
		}
		
		return repositorio.save(t);
	}

	public void eliminar(Integer id) {
		if (new java.util.Date().compareTo(repositorio.getOne(id).getFecha()) > 0) {
			throw new RuntimeException("Error: No se puede eliminar un turno cuya fecha ya ha ocurrido.");
		}
		
		repositorio.deleteById(id);
	}
}
