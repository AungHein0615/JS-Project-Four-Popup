const cardlist = [
    
    {id : 1, City : "Yangon" , img : "https://o.remove.bg/downloads/5dc79f25-98ef-4fb0-b5a4-7b9adfbb3255/29876766-3d-small-people-with-a-green-question-mark-removebg-preview.png"},

    {id : 2, City : "Mandalay" , img : "https://o.remove.bg/downloads/22a8716a-0abb-4492-a1a9-46be800e6d9e/eec0e84f197f87b7b2a95881ab4f72ea-removebg-preview.png"},

    {id : 3, City : "NayPyiDaw" , img : "https://o.remove.bg/downloads/ee3a286e-8039-4d4d-b116-526581f5034e/f2ca09d5e5d1b9fd42794cd6cbd82d61-removebg-preview.png"}
]


const myModal = new bootstrap.Modal('#exampleModal')

const buttons = document.querySelectorAll('.button')

const bodys = document.querySelector('.modal-body')
const footer = document.querySelector('.modal-footer')

buttons.forEach((button,index) => {
    button.addEventListener('click', () => {
        myModal.show()
        bodys.innerHTML= cardlist[index].City
        footer.innerHTML = cardlist[index].City
    });
});
