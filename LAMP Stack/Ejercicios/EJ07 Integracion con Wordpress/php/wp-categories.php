<?php
	#INCLUIR CABECERAS DE WORDPRESS: 
	include 'wordpress/wp-blog-header.php';
	
	#INICIALIZAR Y CAPTURAR VALORES:
	$PaginaActual = $_GET ['p'];
	$CantPosts = 7;
	$Categoria = 1;
			
	#DETERMINAR LA PAGINA ACTUAL:
	if ($PaginaActual == '' OR $PaginaActual < 1):
		$PaginaActual = 1;
	endif;
	
	#PEDIR POSTS A WORDPRESS:
	query_posts('cat=' . $Categoria . '&posts_per_page=' . $CantPosts . '&paged=' . $PaginaActual);
?>

<?php while (have_posts()): ?>
	<?php the_post(); ?>
	<div class="Post">
		<h3><?php the_title(); ?></h3>
		<div class='ContenidoPost'>
			<script type="text/javascript">
				$('p').css('clear','both');
			</script>
			<?php the_post_thumbnail(array(150, 150)); ?>
			<?php the_excerpt(); ?>
			<a href="post.php?id=<?php the_ID(); ?>">Seguir leyendo &gt;</a><br/>
			<span><strong>Autor:</strong><?php the_author(); ?></span>
			<span><strong>Publicado:</strong><?php the_time('j/m/y') ?></span>
			<div class="clear"></div>
		</div>
	</div>
	<hr/>
<?php endwhile ?>

<?php
	#Determino posibilidad de paginacion:
	$Min = "1";
	$Max = $wp_query -> max_num_pages;
	
	#Mensaje 404:
	if($Max == "0"):
		echo '<p class="centrar"><br/>Lo sentimos, no se encontraron contenidos actualmente dentro de esta sección.</p><br/><hr class="x2" />';
	endif;
?>

<script languaje="JavaScript">
$(document).ready(function() {			
	var phpMinimo="<?php echo $Min ?>";
	var phpMaximo="<?php echo $Max ?>";
	var phpActual="<?php echo $PaginaActual ?>";
	
	if (phpActual < phpMaximo){
		$('#IDlnkSiguiente').removeClass('oculto');
		$('#IDlnkSiguiente').addClass('visible');
	} else {
		$('#IDlnkSiguiente').removeClass('visible');
		$('#IDlnkSiguiente').addClass('oculto');
	}
	
	if (phpActual > phpMinimo){
		$('#IDlnkAnterior').removeClass('oculto');
		$('#IDlnkAnterior').addClass('visible');
	} else {
		$('#IDlnkAnterior').removeClass('visible');
		$('#IDlnkAnterior').addClass('oculto');
	}
});
</script>

<div class="centrar">
	<a id="IDlnkAnterior" href="index.php?p=<?php echo $PaginaActual-1; ?>">&lt; Anterior</a>
	<a id="IDlnkSiguiente" href="index.php?p=<?php echo $PaginaActual+1; ?>">Siguiente &gt;</a>	
	<br/>
	<?php echo 'Página '. ( get_query_var('paged') ? get_query_var('paged') : 1 ) . ' de ' . $wp_query->max_num_pages; ?>
</div>