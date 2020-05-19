package ar.com.mipagina.turneroweb.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Localidad {
	@Id
	@GeneratedValue
	private Integer id;
	private String nombre;
	private String codigoPostal;
}
