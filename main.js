const Botões = document.querySelectorALL (".Botão");

for(let i=0;i <Botões-length;i++){
    Botões[i].onclick = function(){

            for(let j=0;j <Botões-length;j++){
                Botões[j].classList.remove("ativo");
            }
    
        Botões[i].classList.add("ativo");
    }
    console.log();
}
