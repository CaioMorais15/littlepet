var OnOff = true;

// Oculta o loader após 3 segundos
setTimeout (function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
}, 3000);

//----------------------------------------------------------

// Função para mostrar a página de loading
function showLoader() {
  OnOff = true;
  var loader = document.createElement("div");
  loader.setAttribute("id", "loader");

  var loaderText = document.createElement("p");
  loaderText.setAttribute("class", "loader-text");
  loaderText.innerHTML=`
  
  <div class="spinner" >
  <div class="rect1"></div>
      
     
  <div class="rect2"></div>
      
     
  <div class="rect3"></div>
      
     
  <div class="rect4"></div>
      
     
  <div class="rect5"></div>
    
</div>
`

  loader.appendChild(loaderText);

 document.body.appendChild(loader);
}

//----------------------------------------------------------

// Função para esconder a página de loading
function hideLoader() {
  var loader = document.getElementById("loader");

  if (loader) {
    OnOff = false;
    loader.remove();
  }
}

//----------------------------------------------------------

// Mostrar a página de loading assim que a página for carregada
window.addEventListener("load", function () {
  if (OnOff){
    showLoader();

  }else{
    hideLoader();
  }

  // Simulando um tempo de carregamento de 3 segundos

  setTimeout(
    function () {
      hideLoader();
    },

    800
  );
});

//----------------------------------------------------------

//Parte do formulário da página Contatos e Agendamentos
function formContatos(){
  var enviar = document.getElementById("enviar")
  
  if (enviar) {
    
  }
}


frmContato.addEventListener("submit", function (event) {
  event.preventDefault();

  var sucesso = document.getElementById("confirmacao");
  sucesso.style.display = "flex";

  frmContato.reset();

  setTimeout(function () {
      sucesso.style.display = "none";
  },3000);
});

