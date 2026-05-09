// Acessando elementos no DOM
const newItem = document.getElementById("newItem") // acessa input form
const list = document.getElementById("items") // acessa lista
const form = document.querySelector("form") // acessa formulario

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
  trashIcon.classList.add("remove")
  trashIcon.src = "assets/icons/trash.svg"
  trashIcon.alt = "Remover item"

  // montagem
  itemLabel.appendChild(checkBox)
  itemLabel.appendChild(checkSpan)
  itemLabel.appendChild(textSpan) // monta o texto inserido no label
  itemLabel.appendChild(trashIcon)
  list.prepend(itemLabel) // monta o label dentro da lista

  // mensagem de sucesso
  console.log("item enviado")

  // limpando o formulário após envio
  newItem.value = ""
})