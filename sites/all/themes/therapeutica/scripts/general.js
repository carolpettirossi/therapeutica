(function($) {

  $(document).ready(function() {
    applyCarousel();

    servicosSaude();

    mainMenu();

    loadAnchor();

  });

  Drupal.behaviors.forms = {
  attach: function (context, settings) {
    trabalheConoscoWebform();
    orcamentoForm();
  }
};

  function orcamentoForm() {
    if ($('#webform-component-atendente').length > 0) {
      $('#webform-component-atendente select option:first').text('- Escolha a atendente de sua preferência -');
    }

    if ($('#webform-component-especialidade').length > 0) {
      $('#webform-component-especialidade select option:first').text('- Escolha a especialidade que deseja orçamento -');
    }
  }

  function loadAnchor() {
    var anchor = getAnchor();
    if ($('.view-especialidades.view-display-id-page_1').length >0) {
      $('.view-especialidades.view-display-id-page_1 .views-row').hide();
      $('.view-especialidades.view-display-id-page_1 #' + anchor).show();

      var classe = $('.view-especialidades.view-display-id-page_1 #' + anchor).attr('class').split(' ')[1];
      $('ul li').removeClass('active');
      $('ul li a.'+classe).parent().addClass('active');
    }
  }

  function mainMenu() {
    $('#block-system-main-menu .content ul li a.active').parent().addClass('active-trail');
    $('#block-system-main-menu .content ul li a').click(function(){
      $('#block-system-main-menu .content ul li').removeClass('active-trail');
    });

    $('#block-system-main-menu .content ul li.expanded').not('.active-trail').hover(function() {
      $(this).find('ul').fadeIn();
    }, function() {
      $(this).find('ul').fadeOut();
    }
    );

    $('#block-system-main-menu .content ul > li:eq(1)').not('.active-trail').hover(function() {
      $(this).addClass('hover');
      if ($('#block-views-submenu-produtos-block').is(':hidden')) {
        $('#block-views-submenu-produtos-block').fadeIn();
      }
    }, function(e) {
      if (!$('#block-views-submenu-produtos-block ul:hover').length) {
        $('#block-views-submenu-produtos-block').fadeOut();
        $(this).removeClass('hover');
      }
    }
    );

    $('#block-views-submenu-produtos-block').hover(function(){
      
    }, function(e) {
      if (!$('#block-system-main-menu .content ul > li:eq(1)').hasClass('hover')) {
        $('#block-views-submenu-produtos-block').fadeOut();
      }

      if(e.offsetY>80) {
        $('#block-views-submenu-produtos-block').fadeOut();
        $('#block-system-main-menu .content ul > li:eq(1)').removeClass('hover');
      }
    }
    )

    $('#block-system-main-menu .content ul li.expanded a:first').click(function() {
      return false;
    });
  }

  function applyCarousel() {
    if ($('.view-especialidades.view-display-id-block').length > 0) {
      $('.view-especialidades.view-display-id-block').jcarousel();

      $('.view-especialidades.view-display-id-block').parent().append('<a class="jcarousel-prev" href="#">Prev</a><a class="jcarousel-next" href="#">Next</a>');

      $('.jcarousel-prev').jcarouselControl({
          target: '-=1'
      });

      $('.jcarousel-next').jcarouselControl({
          target: '+=1'
      });
    }
  }

  function trabalheConoscoWebform() {
    if ($('#webform-component-area-de-atuacao').length > 0) {
      $('#webform-component-area-de-atuacao select option:first').text('- Escolha a área na qual gostaria de atuar -');
    }
  }

  function servicosSaude() {
    $('.content-details .views-row').hide();
    $('.content-details .views-row:first').show();
    $('.menu ul li a.views-row-1').addClass('active');
    $('.menu ul li a.views-row-1').parent().addClass('active');

    $('.menu ul li a').click(function(){
      var content_id = $(this).attr('class').split(' ')[0];

      $('.content-details .views-row').hide();
      $('.content-details').find('.' + content_id).show();
      $('.menu ul li a').removeClass('active');
      $('.menu ul li').removeClass('active');
      $(this).addClass('active');
      $(this).parent().addClass('active');

      var actual_content = $('.content-details').find('.' + content_id).attr('id');
      window.location.hash = actual_content;
    })

  }

  function getAnchor() {  
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
  }

})(jQuery);