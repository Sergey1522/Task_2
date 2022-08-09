var formElement = document.querySelector('#formElement');

formElement.addEventListener(
  'focus',
  function (evt) {
    var activeElement = formElement.querySelector('.focused');

    if (activeElement) {
      activeElement.classList.remove('focused');
    }
    evt.target.classList.add('focused');
  },
  true
);

formElement.addEventListener('focus', function () {
  var activeElement = formElement.querySelector('.focused');
  if (activeElement) {
    activeElement.classList.add('focused');
  }
});