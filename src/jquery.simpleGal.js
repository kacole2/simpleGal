(function($){

  $.fn.extend({

    simpleGal: function (options) {

      var defaults = {
        mainImage: ".placeholder"
      };

      options = $.extend(defaults, options);

      return this.each(function () {
        $(".caption").hide();

        var thumbnail = $(this).find("a"),
            mainImage = $(this).siblings().find(options.mainImage);

        $(".main-image").children(".caption").show().innerWidth(mainImage.innerWidth() - 1);

        thumbnail.on("click", function (e) {
          e.preventDefault();
          var galleryImage = $(this).attr("href");
          mainImage.attr("src", galleryImage);

          $(".main-image").find(".caption").remove();

          var galleryCaption = $(this).parent().children(".caption").clone().show();
          galleryCaption.innerWidth(mainImage.innerWidth() - 1);
          mainImage.after(galleryCaption);

        });

      });

    }

  });

})(jQuery);