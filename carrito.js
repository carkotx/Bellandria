
const item = document.getElementById('item')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
      fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('carrito.json')
        const data = await res.json()
      // console.log(data)  
       pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    console.log(data)
    data.forEach(producto => {
        console.log(producto)
        templateCard.querySelector('h5').texContent = producto.title
        templateCard.querySelector('p').texContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    item.appendChild(fragment)
}