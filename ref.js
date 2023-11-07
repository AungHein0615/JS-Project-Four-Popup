// const cardlist = [
    
//     {id : 1, City : "Yangon" , img : "https://o.remove.bg/downloads/5dc79f25-98ef-4fb0-b5a4-7b9adfbb3255/29876766-3d-small-people-with-a-green-question-mark-removebg-preview.png"},

//     {id : 2, City : "Mandalay" , img : "https://o.remove.bg/downloads/22a8716a-0abb-4492-a1a9-46be800e6d9e/eec0e84f197f87b7b2a95881ab4f72ea-removebg-preview.png"},

//     {id : 3, City : "NayPyiDaw" , img : "https://o.remove.bg/downloads/ee3a286e-8039-4d4d-b116-526581f5034e/f2ca09d5e5d1b9fd42794cd6cbd82d61-removebg-preview.png"}
// ]

// const cardContainer = document.getElementById("cardContainer")

// const imgDiv = (getID,getImg,getClass) => {
//     const cardDiv = document.getElementById("divID"+getID)
//     const img = document.createElement("img")
//     img.setAttribute("src",getImg)
//     img.classList.add("imgStyle_"+getClass)
//     cardDiv.append(img)
// }

// const bodyText = (getID,getLocation,getNumber,getModalId) => {
//     const cardDiv = document.getElementById("divID"+getID)

//     const title = document.createElement("h3")
//     title.append("Our Show Room From " + getLocation)
//     title.classList.add("titleStyle")

//     const locate = document.createElement("div")
//     locate.append("Location")
//     locate.setAttribute("id","location_"+getNumber)
//     locate.setAttribute("data-bs-toggle","modal")
//     locate.setAttribute("data-bs-target","#modal"+getModalId)
//     locate.classList.add("addressStyle")
//     cardDiv.append(title,locate)

// }

// const modal_dialog1 = document.querySelector("#modal1")
// const modal_dialog2 = document.querySelector("#modal2")
// const modal_dialog3 = document.querySelector("#modal3")
// modal_dialog1.setAttribute("id","modal1")
// modal_dialog2.setAttribute("id","modal2")
// modal_dialog3.setAttribute("id","modal3")


// const headerClose = document.querySelectorAll(".modal-header")
// headerClose.forEach((close) => {
//     close.classList.add("btn","btn-close")
//     close.setAttribute("data-bs-dismiss","modal")
// })

// const bodyTitle = document.querySelectorAll('.modal-body')
// bodyTitle.forEach((title) => {
//     title.append("Hello")
// })


// for(const card of cardlist){

//     const number = card.id
    
//     const cardDiv = document.createElement("div")
//     cardDiv.classList.add("style_"+number)
//     cardDiv.setAttribute("id","divID"+number)
//     cardContainer.append(cardDiv)

//     imgDiv(number,card.img,number)
//     bodyText(number,card.City,number,number)

 
    
// }


// <div class="col-2 cardBox"
//             style="width: 15rem; height: 25rem;
//             background-color: rebeccapurple;
//             "
//             >
//             <img src="" alt="..." 
//                 style="width: 13rem; height: 15rem;">

//             <h3 class="titleStyle"></h3>

//             <h5 class="addressStyle" data-bs-target="#modal" data-bs-toggle="modal"></h5>

//             <div class="modal fade" id="modal" data-bs-backdrop="static" >
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <button class="btn btn-close" data-bs-dismiss="modal"></button>
//                         </div>
//                         <div class="modal-body"></div>
//                         <div class="modal-footer"></div>
//                     </div>
//                 </div>
//             </div>
//             </div>
