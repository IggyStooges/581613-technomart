  var link = document.querySelector(".write-us");
  var popup = document.querySelector(".pop-up");
  var close = popup.querySelector(".pop-up-close");

  var maplink = document.querySelector(".map-link");
  var mapup = document.querySelector(".map-up");
  var mapclose = document.querySelector(".map-up-close");

  var innerlink = document.querySelector(".huy");
  var innerup = document.querySelector(".inner-popup");
  var innerclose = document.querySelector(".inner-up-close");

  var login = popup.querySelector("[name=your-name]");
  var email = popup.querySelector("[name=your-mail]");
  var area = popup.querySelector(".letter-area");
  var form = popup.querySelector(".pop-up-form");
  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener("click",
    function (evt) {
      evt.preventDefault();
      popup.classList.add("pop-up-show");

      if (storage) {
        login.value = storage;
        email.focus();
      } else {
        login.focus();
      }
    });


  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("pop-up-show");
    popup.classList.remove("pop-up-error");
  });


  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("pop-up-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("pop-up-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  maplink.addEventListener("click",
    function (evt) {
      evt.preventDefault();
      mapup.classList.add("pop-up-show");
    });


  mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapup.classList.remove("pop-up-show");
  });



  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("pop-up-show")) {
        popup.classList.remove("pop-up-show");
        popup.classList.remove("pop-up-error");
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapup.classList.contains("pop-up-show")) {
        mapup.classList.remove("pop-up-show");
      }
    }
  });


  innerlink.addEventListener("click",
    function (evt) {
      evt.preventDefault();
      innerup.classList.add("pop-up-show");
    });


  innerclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    innerup.classList.remove("pop-up-show");
  });
