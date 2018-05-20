<?php
namespace AppBundle\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
/**
 * @MongoDB\Document
 */
class Postulante{
	/**
     * @MongoDB\Id
    */
     protected $id;

    /**
     * @MongoDB\Field(type="string")
    */
    protected $Nombre;

    /**
     * @MongoDB\Field(type="string")
    */
    protected $Telefono;

    /**
     * @MongoDB\Field(type="string")
    */
    protected $Email;

    /**
     * @MongoDB\Field(type="string")
    */
    protected $Mensaje;

    /**
     * Get id
     *
     * @return id $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nombre
     *
     * @param string $nombre
     * @return $this
     */
    public function setNombre($nombre)
    {
        $this->Nombre = $nombre;
        return $this;
    }

    /**
     * Get nombre
     *
     * @return string $nombre
     */
    public function getNombre()
    {
        return $this->Nombre;
    }

    /**
     * Set telefono
     *
     * @param string $telefono
     * @return $this
     */
    public function setTelefono($telefono)
    {
        $this->Telefono = $telefono;
        return $this;
    }

    /**
     * Get telefono
     *
     * @return string $telefono
     */
    public function getTelefono()
    {
        return $this->Telefono;
    }

    /**
     * Set mensaje
     *
     * @param string $mensaje
     * @return $this
     */
    public function setMensaje($mensaje)
    {
        $this->Mensaje = $mensaje;
        return $this;
    }

    /**
     * Get mensaje
     *
     * @return string $mensaje
     */
    public function getMensaje()
    {
        return $this->Mensaje;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return $this
     */
    public function setEmail($email)
    {
        $this->Email = $email;
        return $this;
    }

    /**
     * Get email
     *
     * @return string $email
     */
    public function getEmail()
    {
        return $this->Email;
    }
}
