package ar.com.mipagina.turneroweb.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Persona {
	@Id
	@GeneratedValue
	private Integer id;
	private String nombre;
	private String apellido;
	@ManyToOne
	private Localidad localidad;
}
