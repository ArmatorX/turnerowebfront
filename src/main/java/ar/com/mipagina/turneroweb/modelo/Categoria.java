package ar.com.mipagina.turneroweb.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Categoria {
	@Id
	@GeneratedValue
	private Integer id;
	private String nombre;
	private String descripcion;
}
