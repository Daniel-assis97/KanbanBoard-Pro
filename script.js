const bd = document.body
const btnBack = document.querySelector('.btn-dark')
const btnColumn = document.querySelectorAll('.btn-submit')
const columnCards = document.querySelectorAll('.column-cards')
let cardSendoArrastado = null;

const getInfo = () => JSON.parse(localStorage.getItem('GetItem')) ?? []
const setInfo = (lista) => localStorage.setItem('GetItem', JSON.stringify(lista))

btnBack.addEventListener('click', ()=> {
    const dark = bd.classList.toggle('darkmode')

    btnBack.textContent = dark ? 'Modo Claro' : 'Modo Escuro'
})

const AdicionarTarefa = (statusColuna) => {
    const titulo = prompt('Digite o nome da tarefa')

    const novaTarefa = {
        id: Date.now(),
        titulo: titulo,
        status: statusColuna
    }

    if (titulo.trim() === "") return;

    const lista = getInfo()
    lista.push(novaTarefa)
    setInfo(lista)

    criarElemento(novaTarefa)
}

const criarElemento = (tarefa) => {
    const card = document.createElement('div')
    card.classList.add('element-div')
    card.setAttribute('draggable', 'true')

    card.dataset.id = tarefa.id

    card.innerHTML = `
        <p>${tarefa.titulo}</p>
        <button class="btn-delete">🗑️</button>
    `
    
    const botaoDeletar = card.querySelector('.btn-delete');
    botaoDeletar.addEventListener('click', () => {
        excluirTarefa(card.dataset.id);
    });

    card.addEventListener('dragstart', () => {
        console.log("Opa, comecei a arrastar o card:", tarefa.titulo);
        card.classList.add('dragging')
        cardSendoArrastado = card;
    })

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging')
        cardSendoArrastado = null;
    })

    const coluna = document.getElementById(tarefa.status)
    coluna.appendChild(card)
}

const carregarInfo = () => {
    columnCards.forEach(coluna => coluna.innerHTML = "")

    const lista = getInfo()
    lista.forEach(tarefa => criarElemento(tarefa))
}

btnColumn.forEach(botao => {

    botao.addEventListener('click', (event)=> {
        const colunaSecao = event.target.parentElement.nextElementSibling
        const statusColuna = colunaSecao.id

        AdicionarTarefa(statusColuna)
    })
})

function excluirTarefa(idTarefa){
        const lista = getInfo()
        const listaFiltrada = lista.filter(tarefa => tarefa.id !== Number(idTarefa));
        setInfo(listaFiltrada)

        carregarInfo()
    }

columnCards.forEach(element => {
    element.addEventListener('dragover', (event) => {
        event.preventDefault()
    })
            
    element.addEventListener('drop', () => {
        console.log('Soltou na coluna: ', element.id)

        if(cardSendoArrastado){
            element.appendChild(cardSendoArrastado)

            const idTarefaMovida = Number(cardSendoArrastado.dataset.id)
            const lista = getInfo()
            const tarefaEncontrada = lista.find(tarefa => tarefa.id === idTarefaMovida)
        
            if (tarefaEncontrada) {
                tarefaEncontrada.status = element.id
            }

            setInfo(lista)
        }
    })
});

carregarInfo();