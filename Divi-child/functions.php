<?php
function my_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_script( 'rek-ai', "https://static.rek.ai/560d434f.js");
    wp_enqueue_script( 'rek-ai-autocomplete', "https://static.rek.ai/addon/rekai_autocomplete.min.js", array("rek-ai"));
    wp_enqueue_script( 'hultsfred-custom', get_stylesheet_directory_uri() . "/custom.js", array( 'jquery', 'rek-ai-autocomplete' ), "1.0");

}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );

?>
