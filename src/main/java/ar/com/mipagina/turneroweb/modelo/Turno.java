package ar.com.mipagina.turneroweb.modelo;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Entity
@Data
public class Turno {
	@Id
	@GeneratedValue
	private Integer id;
	private Integer orden;
	// @Temporal(TemporalType.TIMESTAMP)
	// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy",timezone = "America/Argentina/Cordoba")
	private Date fecha;
	private String nombreApellido;
	@ManyToOne
	private Categoria categoria;
	
}
