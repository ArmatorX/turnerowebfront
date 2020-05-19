package ar.com.mipagina.turneroweb.persistencia;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ar.com.mipagina.turneroweb.modelo.Persona;

@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Integer>{

	Page<Persona> findByNombreContainingIgnoreCase(String nombre, Pageable pagina);

	List<Persona> findByLocalidad_NombreContainingIgnoreCase(String nombre);
}
