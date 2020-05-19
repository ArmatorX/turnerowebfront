package ar.com.mipagina.turneroweb.persistencia;

import java.sql.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.com.mipagina.turneroweb.modelo.Persona;
import ar.com.mipagina.turneroweb.modelo.Turno;

@Repository
public interface TurnoRepositorio extends JpaRepository<Turno, Integer>{

	Page<Turno> findByFecha(Date fecha, Pageable pagina);
	Page<Turno> findByNombreApellidoContainingIgnoreCase(String nombre, Pageable pagina);
}
