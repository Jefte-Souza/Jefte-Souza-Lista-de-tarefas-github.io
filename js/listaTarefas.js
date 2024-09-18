let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //pegar o valor que foi digitado no input
    let valorInput = input.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput !==undefined)){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`;

        //adiciona uma nova tarefa na area main
        main.innerHTML += novoItem;

        //deixa o campo input vazio após adcionar uma tarefa
        input.value = "";
        input.focus();


    }

}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//função para marcar e desmarcar a tarefa
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    // muda o icone para marcado
    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle'); 
        item.parentNode.appendChild(item);  //move a terefa cricada para o final
    }

    // muda o icone para desmarcado
    else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');

        var parent = item.parentNode;
        parent.insertBefore(item, parent.firstChild)
    }
}


input.addEventListener("keyup", function(event){
    //se o enter for clicado será equivalente ao botao adicionar ter sido clicado
    if (event.keyCode ===13) {
        event.preventDefault();
        btnAdd.click();
    }
})




































