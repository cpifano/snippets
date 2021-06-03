/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*DETERMINACION DE COLORES:-------------------------------------------------------------------------------*/
	function Color_Bolilla(IDlbl, IDimg){
		var ValorBolilla = $(IDlbl).html();
		
		if (ValorBolilla > 0 && ValorBolilla < 12){
			$(IDimg).attr('src', '../images/bolillas/verde.png');
		} else if(ValorBolilla > 11 && ValorBolilla < 23){
			$(IDimg).attr('src', '../images/bolillas/naranja.png');
		} else if(ValorBolilla > 22 && ValorBolilla < 34){
			$(IDimg).attr('src', '../images/bolillas/amarillo.png');
		} else if(ValorBolilla > 33 && ValorBolilla < 45){
			$(IDimg).attr('src', '../images/bolillas/violeta.png');
		} else {
			$(IDimg).attr('src', '../images/bolillas/transparente.png');
		} 
		
	}
	
	/*Determinar colores para las combinaciones*/
	Color_Bolilla('#IDlblNumeroC01', '#IDimgBolillaC01');
	Color_Bolilla('#IDlblNumeroC02', '#IDimgBolillaC02');
	Color_Bolilla('#IDlblNumeroC03', '#IDimgBolillaC03');
	Color_Bolilla('#IDlblNumeroC04', '#IDimgBolillaC04');
	Color_Bolilla('#IDlblNumeroC05', '#IDimgBolillaC05');
	
	/*Determinar colores para los numeros*/
	Color_Bolilla('#IDlblNumeroN01', '#IDimgBolillaN01');
	Color_Bolilla('#IDlblNumeroN02', '#IDimgBolillaN02');
	Color_Bolilla('#IDlblNumeroN03', '#IDimgBolillaN03');
	Color_Bolilla('#IDlblNumeroN04', '#IDimgBolillaN04');
	Color_Bolilla('#IDlblNumeroN05', '#IDimgBolillaN05');
	/*--------------------------------------------------------------------------------------------------------*/
	
});
/*------------------------------------------------------------------------------------------------------------*/