// Acessando elementos no DOM
const form = document.querySelector("form") // acessa formulario
const newItem = document.getElementById("newItem") // acessa input form
const list = document.getElementById("items") // acessa lista
const removeMessage = document.querySelector(".remove") // acessa mensagem erro
const oldTrashIcons = document.querySelectorAll(".removeIcon") // acessa todos os icones de lixeira existentes

oldTrashIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const itemToRemove = icon.closest("label")
    deleteItem(itemToRemove)
  })
})

// Enviar o item
form.addEventListener("submit", (event) => {
  const itemLabel = document.createElement("label") // cria label
  const textSpan = document.createElement("span") // cria o span texto
  // cria os demais elementos do label
  const checkBox = document.createElement("input")
  const checkSpan = document.createElement("span")
  const trashIcon = document.createElement("img")

  // evitar que a página recarregue
  event.preventDefault()

  // validação
  if (newItem.value.trim() === "") {
    return
  }

  // configuração
  textSpan.textContent = newItem.value // pega o conteudo do newItem e adiciona no textSpan
  itemLabel.classList.add("item") // add a classe da label "item" no label criado

  // montando ícone de checkbox
  checkBox.type = "checkbox"
  checkBox.id = "cbox-" + Date.now()
  checkSpan.classList.add("check")
  checkSpan.innerHTML = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 7L4.25 8.75L9.5 3.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

  // montando ícone de remover item
  trashIcon.classList.add("removeIcon")
  trashIcon.src = "assets/icons/trash.svg"
  trashIcon.alt = "Remover item"

  // montagem
  itemLabel.appendChild(checkBox)
  itemLabel.appendChild(checkSpan)
  itemLabel.appendChild(textSpan) // monta o texto inserido no label
  itemLabel.appendChild(trashIcon)
  list.prepend(itemLabel) // monta o label dentro da lista

  // adiciona escuta de clique no botão de remover
  trashIcon.addEventListener("click", () => {
    deleteItem(itemLabel)
  })

  // mensagem de sucesso
  console.log("item enviado")

  const button = form.querySelector("button")
  button.textContent = "Adicionado ✔︎"
  button.style.opacity = "0.6"

  setTimeout(() => {
    button.textContent = "Adicionar item"
    button.style.opacity = "1"
  }, 1000)

  // limpando o formulário após envio
  newItem.value = ""
})

function deleteItem(item) {
  // apaga o label da lista
  item.remove()

  // mostra mensagem
  removeMessage.style.opacity = "1"

  setTimeout(() => {
    removeMessage.style.opacity = "0"
  }, 3000)
}
