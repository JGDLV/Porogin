$(document).ready(function () {

  $('form').each(function () {
    const form = $(this);
    const fileInput = $(this).find('input[type="file"]');
    const fileSpan = $(this).find('input[type="file"] ~ span');
    const fileText = 'Прикрепить файл';
    const phone = $(this).find('input[name*="phone"]');
    const privacyLabel = $(this).find('label[class*="privacy"]');
    const privacyInput = privacyLabel.find('input');

    privacyLabel.on('click', function () {
      if (privacyInput.attr('type') == 'checkbox') {
        privacyInput.is(':checked')
          ? privacyLabel.addClass('active')
          : privacyLabel.removeClass('active');
      } else if (privacyInput.attr('type') == 'radio') {
        privacyInput.is(':checked')
          ? (privacyLabel.siblings().removeClass('active'), privacyLabel.addClass('active'))
          : privacyLabel.removeClass('active');
      }
    });

    phone.each(function () {
      $(this).inputmask("+7 (999) 999-99-99");
    });

    fileInput.on('change', function () {
      const fileVal = $(this).val().replace(/.+[\\\/]/, '');
      fileVal !== '' ? fileSpan.text(fileVal) : fileSpan.text(fileText);
    });

    form.on('submit', function () {
      fileSpan.text(fileText);
      privacyLabel.removeClass('active');
    });
  });

  $(window).scroll(function () {
    $(this).scrollTop() > 600 ? $('#top').show(200) : $('#top').hide(200);
  });

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  // $('inline').magnificPopup({
  //   type: 'inline',
  //   removalDelay: 300,
  //   mainClass: 'mfp-fade',
  // });

  $('.installation-items, .goods__item-image-part').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true
      }
    });
  });

  $(document).on('click', '.goto', function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $('.dropdown').each(function () {
    const dropdownBlock = $(this);
    const dropdownItems = dropdownBlock.find('ul');
    const overlay = dropdownBlock.siblings('.dropdown__overlay');

    dropdownBlock.on('click', function () {
      dropdownItems.slideToggle(200);
      dropdownBlock.toggleClass('active');
      overlay.toggleClass('active');
    });

    overlay.on('click', function() {
      dropdownItems.slideUp(200);
      dropdownBlock.removeClass('active');
      overlay.removeClass('active');
    });

  });

  $('.goods-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev fas fa-chevron-left"></button>',
    nextArrow: '<button class="slick-next fas fa-chevron-right"></button>',
    fade: true,
  });

  $('.installation-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev fas fa-chevron-left"></button>',
    nextArrow: '<button class="slick-next fas fa-chevron-right"></button>',
    fade: true,
  });

});
