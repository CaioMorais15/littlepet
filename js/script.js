// Oculta o loader após 3 segundos
setTimeout(function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}, 3000);

// Função para mostrar a página de loading
function showLoader() {
  var loader = document.createElement("div");
  loader.setAttribute("id", "loader");

  var loaderText = document.createElement("p");
  loaderText.setAttribute("class", "loader-text");
  loaderText.innerHTML=`<div class="spinner" >
  <div class="rect1"></div>
      
     
  <div class="rect2"></div>
      
     
  <div class="rect3"></div>
      
     
  <div class="rect4"></div>
      
     
  <div class="rect5"></div>
    
</div>`;

  loader.appendChild(loaderText);

  document.body.appendChild(loader);
}

// Função para esconder a página de loading
function hideLoader() {
  var loader = document.getElementById("loader");

  if (loader) {
    loader.remove();
  }
}

// Mostrar a página de loading assim que a página for carregada
window.addEventListener("load", function () {
  showLoader();

  // Simulando um tempo de carregamento de 3 segundos

  setTimeout(
    function () {
      hideLoader();
    },

    1500
  );
});
