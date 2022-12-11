(function(){
  const COUNTER_THRESHOLD = 5; // Change this to decrease/increase senstivity
  const COUNTER_RESET_DURATION = 400;

  let animating = false;
  let counter = 0;

  function resetDelta() {
    counter = 0
  }
  let deboucncedReset = debounce(resetDelta, COUNTER_RESET_DURATION);

  function handleScroll(event) {
    //event.wheelDelta can be positive or negative based on the direction of scroll
    counter += 1 * (Math.sign(event.wheelDelta));

    //Scroll down if value of counter is negative and absolute value is greater than threshold
    if (!animating && (Math.abs(counter) >= COUNTER_THRESHOLD) && counter < 0) {
      let targetSection = $('section.active').next('section');
      if (targetSection.length) {
        scrollToSection(targetSection);
      }
    }
    //Scroll up if value of counter is positive and absolute value is greater than threshold
    else if (!animating && (Math.abs(counter) >= COUNTER_THRESHOLD) && counter > 0) {
      let targetSection = $('section.active').prev('section');
      if (targetSection.length) {
        scrollToSection(targetSection);
      }
    }
    // prevent default scrolling behaviour of mouse wheel
    event.preventDefault()

    //Reset counter to 0 , 400 miliseconds after stopping the mousewheel
    deboucncedReset()
  }

  function scrollToSection(target) {
    animating = true;
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 800, function() {
      animating = false;
      $('section.active').removeClass('active');
      target.addClass('active');
    });
  }

  function debounce(func, delay) {
    let debounceTimer
    return function() {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer
        = setTimeout(() => func.apply(context, args), delay)
    }
  }


  //Test support for passive listeners
  let supportsPassive = false;
  try {
    let options = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, options);
    window.removeEventListener("testPassive", null, options);
  } catch (e) {}

  let wheelOptions = supportsPassive ? {
    passive: false
  } : false;

  // Older browsers used 'mousewheel' event
  let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  document.addEventListener(wheelEvent, handleScroll, wheelOptions);
})(jQuery);