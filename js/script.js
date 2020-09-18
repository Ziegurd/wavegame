(function() {
  "use strict"

  loadCountry();
  $("#modal-default").iziModal("close");
})();

function loadCountry() {
  $("#country").html("");
  $("#country").append(new Option("Country", ""));
  $.getJSON("https://restcountries.eu/rest/v2/all", function(data) {
    data.forEach((e, i) => {
      $("#country").append(new Option(e.name, e.name));
    });
  });
}

function register(e) {
  e.preventDefault();
  $("#modal-content").html("");

  let data = $("#form").serializeArray();
  data.forEach((e, i) => {
    $("#modal-content").append(`<li>${e.name} : ${e.value}</li>`);
  });

  $("#modal-default").iziModal("open");
}

$("#modal-default").iziModal({
  history: true,
    // top: 50,
    // bottom: 50,
    // timeout: 5000,
    timeoutProgressbar: true,
    timeoutProgressbarColor: 'white',
    arrowKeys: true,
    width: 900,
    padding: 20,
    restoreDefaultContent: true,
    group: 'grupo1',
    loop: true,
    fullscreen: false,
    onResize: function(modal){
        // console.log(modal.modalHeight);
    },
    afterRender: function(modal){
        // modal.open();
    },
});

$("#btnRegister").on("click", register);
