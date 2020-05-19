package ar.com.mipagina.turneroweb.web;

import java.sql.Date;
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

import ar.com.mipagina.turneroweb.logica.TurnoServicio;
import ar.com.mipagina.turneroweb.modelo.Turno;

@RestController 
@RequestMapping("/turno")
public class TurnoControlador {
	
	@Autowired
	private TurnoServicio servicio;
	
	@GetMapping
	public List<Turno> listarTodos() {
		return servicio.listarTodos();
	}
	
	@RequestMapping(value = "/{id}")
	public Optional<Turno> getTurno(@PathVariable(name = "id") Integer id) {
		return servicio.getTurno(id);
	}
	
	@GetMapping(params = {"fecha"})
	public Page<Turno> getTurnosPorFecha(Date fecha, Pageable pagina) {
		return servicio.getTurnosPorFecha(fecha, pagina);
	}
	
	@GetMapping(params = {"nombreApellido"})
	public Page<Turno> getTurnosPorNombreApellido(String nombreApellido, Pageable pagina) {
		return servicio.getTurnosPorNombreApellido(nombreApellido, pagina);
	}

	@PostMapping
	public Turno guardar(@RequestBody Turno t) {
		return servicio.guardar(t);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public Turno actualizar(@RequestBody Turno t, @PathVariable(name = "id") Integer id) {
		return servicio.actualizar(t);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable(name = "id") Integer id) {
		servicio.eliminar(id);
	}
}