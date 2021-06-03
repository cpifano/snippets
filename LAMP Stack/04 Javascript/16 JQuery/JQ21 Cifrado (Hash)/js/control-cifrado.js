/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	
	$("#IDbtnCifrar").click(function(){
		/*MD5*/
		var CifradoMD5 = hex_md5($('#IDtxtPassword').val());
		$('#IDlblMD5').text(CifradoMD5);
		
		/*SHA1*/
		var CifradoSHA1 = hex_sha1($('#IDtxtPassword').val());
		$('#IDlblSHA1').text(CifradoSHA1);
		
		/*SHA2*/
		var Cifrado256 = hex_sha256($('#IDtxtPassword').val());
		$('#IDlblSHA256').text(Cifrado256);
		
		var Cifrado512 = hex_sha512($('#IDtxtPassword').val());
		$('#IDlblSHA512').text(Cifrado512);
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/