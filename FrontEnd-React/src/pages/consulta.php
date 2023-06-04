<?php
$client = new SoapClient('https://soapregistro-production.up.railway.app/ws/registro.wsdl');
$parametros = array("aula" => "400", "nombre" => "Alex","fecha"=>"2022-01-01", "hora"=>"12:00");
$response = $client->__soapCall('MostrarRegistros', array($parametros));
$datos = (array) $response;
$jsonResponse = json_encode($datos);
echo $jsonResponse;
?>
