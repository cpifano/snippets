<?php
	#INCLUIR CABECERAS DE WORDPRESS: 
	include 'wordpress/wp-blog-header.php';
	
	#INICIALIZAR Y CAPTURAR VALORES:
	$IDPost = $_GET ['id'];
	
	#PEDIR POST A WORDPRESS:
	$Post = get_post($IDPost);
	
	#CARGAR CONTENIDOS:
	$Titulo = $Post -> post_title;
	$Autor = get_userdata($Post -> post_author);
	$Autor = $Autor -> display_name;
	$Contenido = $Post -> post_content;
	$Contenido = apply_filters('the_content', $Contenido);
	$Contenido = str_replace(']]>', ']]&gt;', $Contenido);
	$Fecha = get_post_time('j/m/y', false, $Post, false);
	$Avatar = get_avatar($Post -> post_author);
?>

<div class="Post">
	<h3><?php echo $Titulo; ?></h3>
	<div class='ContenidoPost'>
		<?php echo $Contenido; ?>
		<span><strong>Fecha de publicación:</strong><?php echo $Fecha; ?></span><br/>
		<span><strong>Autor:</strong><?php echo $Autor; ?></span><br/>
		<span><?php echo $Avatar; ?></span>
		<div class="clear"></div>
	</div>
</div>