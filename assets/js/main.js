var sectionHeight = function() {
    var total    = $(window).height(),
        $section = $('section').css('height','auto');
  
    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
    }
  }
  
  $(window).resize(sectionHeight);
  
  $(function() {
    $.ajax({
      type: "GET",
      url: 'sitemap.xml',
      dataType: "xml",
      success: function(xml) {
        $("nav").prepend("<ul class='pages'></ul>");
        var url = $(xml).find('loc');
        $("nav ul.pages").append("<li class='bold-text'>Pages</li>");
        $.each(url, (k, v) => {
          var page = $(v)[0].innerHTML;
          var pageName;
          if (page === 'http://' + window.location.host + '/' || page === 'https://' + window.location.host + '/' || page === 'http://' + window.location.host + '//' || page === 'https://' + window.location.host + '//') {
            pageName = 'docs home';
          } else {
            pageName = page.replace(/(.*:\/\/.*\/)/g, '');
            pageName = pageName.replace('.html', '');
          }
          pageName = pageName[0].toUpperCase() + pageName.slice(1);
          $("nav ul.pages").append("<li><a href='" + page + "'>" + pageName + "</a></li>");
        });
      },
      error: function() {
        console.log('While getting pageUrl error occured');
      }
    });

    $("nav").append("<ul class='page-content'></ul>");
    $("nav ul.page-content").append("<li class='bold-text'>Page content:</li>");
    $("section h1, section h2, section h3").each(function(){
      $("nav ul.page-content").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
      $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $("nav ul.page-content li:first-child a").parent().addClass("active");
    });
  
    $("nav ul.page-content li").on("click", "a", function(event) {
      var position = $($(this).attr("href")).offset().top - 190;
      $("html, body").animate({scrollTop: position}, 400);
      $("nav ul.page-content li a").parent().removeClass("active");
      $(this).parent().addClass("active");
      event.preventDefault();
    });
  
    sectionHeight();
  
    $('img').on('load', sectionHeight);
  });