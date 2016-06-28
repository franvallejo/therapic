<!DOCTYPE html>
<html lang="es">
<head>

    <title>Simple Start Projetc </title>

    <meta name="description" content="">
    <meta name="author" content="">


    <? require_once /* $_SERVER['DOCUMENT_ROOT']. */
    "templates/metas.template.php"; ?>

</head>
<body>

<? /* require_once /* $_SERVER['DOCUMENT_ROOT']. "templates/header.template.php";  */ ?>

<main class="fixed total-cover">
    <section id="portada" class="bg-cover bg-parallax">
        <div class="container-fluid bg-dark-filter">
            <div class="row height-100 no-margin">
                <div class="col-xs-12 wrapper cover">
                    <div class="centrador">
                        <div class="text-center">
                            <div class="col-xs-12">
                                <div class="lineas">
                                    <h1 class="text-big">
                                        THERAPIC
                                    </h1>
                                </div>
                            </div>
                            <div class="col-xs-12">
                                <div class="inline">
                                    <h3 class="text-med">Centro de Fisioterapia Avanzada
                                        <div class="linea"></div>
                                    </h3>
                                </div>
                            </div>
                            <div class="col-xs-12 absolute bottom margin-md">
                                <div class="inline">
                                    <div id="scroll-main" class="text-big flecha">
                                        <i class="fa fa-angle-down color-light"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="main-page">
        <div class="container-fluid no-padding">
            <div class="row no-margin ">
                <div id="menu" class="col-xs-12 height-100 no-padding">
                    <div class="col-xs-6 no-padding">
                        <div  class="col-xs-12  no-padding choose-menu menu-1 height-50">
                            <div id="section-1" class="col-xs-12 no-padding  wrapper cover bg-cover">
                                <div class="centrador text-center bg-dark-filter">
                                    <h2 class="">Section 1</h2>
                                    <div class="caja-activo"></div>
                                </div>
                            </div>
                        </div>
                        <div  class="col-xs-12  no-padding choose-menu menu-1 height-50">
                            <div id="section-2" class="col-xs-12 no-padding  wrapper cover bg-cover">
                                <div class="centrador text-center bg-dark-filter">
                                    <h2 class="">Section 2</h2>
                                    <div class="caja-activo"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-6 no-padding">
                        <div  class="col-xs-12  no-padding choose-menu menu-2 height-33">
                            <div id="section-3" class="col-xs-12 no-padding  wrapper cover bg-cover">
                                <div class="centrador text-center bg-dark-filter">
                                    <h2 class="">Section 3</h2>
                                    <div class="caja-activo"></div>
                                </div>
                            </div>
                        </div>
                        <div  class="col-xs-12  no-padding choose-menu menu-2 height-33">
                            <div id="section-4" class="col-xs-12 no-padding  wrapper cover bg-cover">
                                <div class="centrador text-center bg-dark-filter">
                                    <h2 class="">Section 4</h2>
                                    <div class="caja-activo"></div>
                                </div>
                            </div>
                        </div>
                        <div  class="col-xs-12  no-padding choose-menu menu-2 height-33">
                            <div id="section-5" class="col-xs-12 no-padding  wrapper cover bg-cover">
                                <div class="centrador text-center bg-dark-filter">
                                    <h2 class="">Section 5</h2>
                                    <div class="caja-activo"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content" class="col-xs-0 height-100 bg-light relative overscroll">
                    <div class="close-content ">
                        <i class="fa fa-angle-left color-dark"></i>
                    </div>
                    <div id="main-content"></div>
                </div>
            </div>

        </div>
    </section>
</main>


<div class="container">
    <!-- Option for gallery
    <form class="form-inline">
        <div class="form-group">
            <button id="video-gallery-button" type="button" class="btn btn-success btn-lg">
                <i class="glyphicon glyphicon-film"></i>
                Launch Video Gallery
            </button>
        </div>
        <div class="form-group">
            <button id="image-gallery-button" type="button" class="btn btn-primary btn-lg">
                <i class="glyphicon glyphicon-picture"></i>
                Launch Image Gallery
            </button>
        </div>
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-success btn-lg active">
            <i class="glyphicon glyphicon-leaf"></i>
            <input id="borderless-checkbox" type="checkbox"> Borderless
            </label>
            <label class="btn btn-primary btn-lg">
            <i class="glyphicon glyphicon-fullscreen"></i>
            <input id="fullscreen-checkbox" type="checkbox"> Fullscreen
            </label>
        </div>
    </form>
-->
    <!-- The container for the Gallery
    <div id="gallery"></div>
-->
</div>

<? /* require_once  $_SERVER['DOCUMENT_ROOT']. "templates/footer.template.php"; */ ?>

<!-- Contenedor de Gallery al ser mostrada
<!-- The Bootstrap Image Gallery, should be a child element of the document body
<div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">
    <!-- The container for the modal slides
    <div class="slides"></div>
    <!-- Controls for the borderless lightbox
    <h3 class="title"></h3>
    <a class="prev">‹</a>
    <a class="next">›</a>
    <a class="close">×</a>
    <a class="play-pause"></a>
    <ol class="indicator"></ol>
    <!-- The modal dialog, which will be used to wrap the lightbox content
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-hidden="true">&times;</button>
                    <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body next"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left prev">
                        <i class="glyphicon glyphicon-chevron-left"></i>
                        Previous
                    </button>
                    <button type="button" class="btn btn-primary next">
                        Next
                        <i class="glyphicon glyphicon-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> -->


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="assets/js/ie10-viewport-bug-workaround.js"></script>

<!--  Plugin Ajustar texto responsive por Jquery -->
<script src="vendors/jquery.fittext.js"></script>
<!-- jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' }); -->

<!-- Plugin Efecto selector 'galeria' -->
<script src="vendors/isotope.pkgd.min.js"></script>

<!-- Plugin Blue Imp - Bootstrap gallery -->
<!-- <script src="//blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js"></script>
<script src="vendors/Bootstrap-Image-Gallery-3.1.3/js/bootstrap-image-gallery.js"></script> -->

<!-- JS Principal -->
<script src="assets/js/main.js"></script>


</body>
</html>
