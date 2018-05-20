<?php
namespace AppBundle\Controller;
use AppBundle\Document\Postulante;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
//php bin/console generate:bundle --namespace=AppBundle/Document
class MongodbController extends Controller{

	/**
     * @Route("/Inicio")
    */
    public function viewConfig(){
    	//cargamos la vista
    	return $this->render('viewmongodb/producto_view.html.twig');
    }

    /**
     * @Route("/ajax_frmtest")
     */
    public function formIndex(Request $request){
    	//comprobamos si la consulta es de tipo Ajax
    	if($request->isXmlHttpRequest()){
    
    		//optenemos los valores del formulario
 			$postulante = new Postulante();
            $Nombre = $request->request->get('Nombre');
            $Email = $request->request->get('Email');
            $Telefono = $request->request->get('Telefono');
            $Mensaje = $request->request->get('Mensaje');
            
            $postulante->setNombre($Nombre);
		    $postulante->setTelefono($Telefono);
		    $postulante->setMensaje($Mensaje);
		    $postulante->setEmail($Email);
		    $dm = $this->get('doctrine_mongodb')->getManager();
		    $dm->persist($postulante);
		    $dm->flush();
	    	//retornamos los resultados en tipo json
            $response = new JsonResponse();
            $response->setStatusCode(200);
            $response->setData(array(
                'response' => 'success',
                'post'=>array('id'=>$postulante->getId(),'Nombre'=>$Nombre,'Email'=>$Email,'Telefono'=>$Telefono)));
            return $response;
        }
    }

}