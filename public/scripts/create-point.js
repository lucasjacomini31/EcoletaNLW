function PopulateUf(){
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json())
    .then( states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

PopulateUf();

function getCity(event){
    const citySelect = document.querySelector("[name=city]");
    const stateInput = document.querySelector("[name=state]");
        
    const ufValue = event.target.value;

    const indexOfStateSelected = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfStateSelected].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = `<option value>Selecione a cidade</option>`;
    citySelect.disabled = true;
    
    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

        }

        citySelect.disabled = false;
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCity)



//Itens Coleta    
//pegar todos li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(items of itemsToCollect){
    items.addEventListener("click", haddleSelectedItems)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function haddleSelectedItems(event) {
    const itemLi = event.target
    
    //add or remove a class with javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //pegar itens selecionados buscando pelo index.
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //isso será true or false
        return itemFound
    })

    //se ja estiver selecionado
    if( alreadySelected >= 0){
        // tirar selecao
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }else{
        //se nao estiver selecionado
        //adicionar a seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido
    collectedItems.value = selectedItems
}
