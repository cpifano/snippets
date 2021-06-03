<?php
	$url_api = 'http://IP/url/';
	$cURL = curl_init($url_api);

	$datos = array(
		"institution"	=> "INSTITUTION",
		"user"				=> "user",
		"password"		=> "password",
		"id"					=> "1234567-8",
		"IssuerOfPatientID"	=> "",
		"IssuerOfPatientIDQualifiers" => array (
			"UniversalEntityID" => "",
			"UniversalEntityIDType" => ""
		)
	);

	$json = json_encode($datos);

	curl_setopt($cURL, CURLOPT_POSTFIELDS, $json);
	curl_setopt($cURL, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);

	$result = curl_exec($cURL);
	curl_close($cURL);

	$json_result = json_decode($result, true);
?>
