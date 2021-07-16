const burgerMenuBtnElem = document.querySelector('#burgerMenuButton')
const shedowElem = document.querySelector('.shedow')
const menuSettingsElem = document.querySelector('.menu__settings')
const allChatsHiddenElem = document.querySelector('.all-chats__hidden')
const nightModeElem = document.querySelector('.pusk')
const menuElem = document.querySelector('.menu')
const settingsModalElement = document.querySelector(".settings__modal")
const chatModalElem = document.querySelector(".chat__modal")
const allChatsListElem = document.querySelector('.all-chats__list')
const rigthChatModal = document.querySelector('.rigth__chat__modal') 
const leftArrowButton = document.querySelector(".left-arrow_button")
const settingsElement = document.querySelector("#settings")
const threeDot = document.querySelector("#threedot")
const threedotList = document.querySelector(".threedot__list")
const closeSettings = document.querySelector("#closeSettings")

const emojiList = document.querySelector(".emoji-list")
const messageTextForm = document.querySelector(".message__form")
const emojiButton = document.querySelector(".emoji__button")
const centerChatElem = document.querySelector('.center-chat')
const rigthAllChatsHidden = document.querySelector('.rigth__all-chats__hidden')
const ikkinchi = document.querySelector('.ikkinchi')
const profileIconButtonElem = document.querySelector('.right__unchun')
const smilebtn = document.querySelector('.emoji__button')
const bor = document.querySelector('.yoq')
const contacts = document.querySelectorAll('.contactLi')
const userLi = document.querySelector('.contactLi')
let tanlangan = 0

const messageTextareaElem = document.querySelector('.message__textarea')

const emojies = ["😀", "😋", "😅", "😏", "😀", "😃", "😄", "😁", "😆", "😄", "😅", "😂", "😏", "😞", "😅", "😚", "🙊", "😌", "😀", "😋", "😆", "😐", "😕", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤚", "🖐", "✋"]

let inputValue = ""
let currentChat = 1
//nastroyka
let local = JSON.parse(localStorage.getItem('DATA'))


burgerMenuBtnElem.addEventListener('click', () => {
    menuElem.style.transform = 'none'
    shedowElem.style.display = 'block'

})
settingsElement.addEventListener("click", evt => {
    settingsModalElement.classList.remove("settingsHidden")
    menuElem.classList.add("hidden")
    menuElem.style.transform = "translateX(-100%)"


})
closeSettings.addEventListener("click", evt => {
    settingsModalElement.classList.add("settingsHidden")
    shedowElem.style.display = 'none'

})
threeDot.addEventListener("click", event => {
    threedotList.classList.toggle("threedotHidden")
})
shedowElem.addEventListener('click', () => {
    settingsModalElement.classList.add("settingsHidden")
    menuElem.style.transform = 'translateX(-100%)'
    shedowElem.style.display = 'none'
})


//kontakt

let user = (local) ? local : {
    config: {
        background: 'red',
        myName: 'Javohir',
        myOldNames: [],
        myProfilePhoto: 'https://via.placeholder.com/150'
    },
    chats: [{
            chatId: 1,
            chatName: 'Muhammadbek',
            profileImg: 'https://picsum.photos/100?random=1&grayscale',
            chatNumber: '+998 99 142-34-71',
            chatMessages: [{
                sender: 'Muhammadbek',
                message: 'qale ishla',
                messageTime: '22:30'
            }]
        },
        {
            chatId: 2,
            chatName: 'Axmadbek',
            profileImg: 'https://picsum.photos/100?random=2',
            chatNumber: '+998 99 999-99-99',
            chatMessages: [{
                sender: 'Axmadbek',
                message: 'salom',
                messageTime: '22:35'
            }]
        },
        {
            chatId: 3,
            chatName: 'Xabibullohbek',
            profileImg: 'https://picsum.photos/100?random=3',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Xabibullohbek',
                message: 'qattasan',
                messageTime: '22:40'
            }]
        },
        {
            chatId: 4,
            chatName: 'Farruxbek',
            profileImg: 'https://picsum.photos/100?random=4',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Farruxbek',
                message: 'duvay',
                messageTime: '22:45'
            }]
        },
        {
            chatId: 5,
            chatName: 'Jonhbek',
            profileImg: 'https://picsum.photos/100?random=5',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Johnbek',
                message: 'oka qattasiz',
                messageTime: '22:50'
            }]
        },
        {
            chatId: 6,
            chatName: 'Sarvarbek',
            profileImg: 'https://picsum.photos/100?random=6',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Sarvarbek',
                message: 'salom',
                messageTime: '22:55'
            }]
        },
        {
            chatId: 7,
            chatName: 'Rustambek',
            profileImg: 'https://picsum.photos/100?random=7',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Rustambek',
                message: 'qalesz',
                messageTime: '20:00'
            }]
        },
        {
            chatId: 8,
            chatName: 'Oyatullohbek',
            profileImg: 'https://picsum.photos/100?random=8',
            chatNumber: '+998 99 333-33-33',
            chatMessages: [{
                sender: 'Oyatullohbek',
                message: 'kelasanmi?',
                messageTime: '22:05'
            }]
        }, {
            chatId: 9,
            chatName: 'Ozodbek',
            profileImg: 'https://picsum.photos/100?random=9&graysale&blur',
            chatNumber: '+998 12 34 56 78',
            chatMessages: [{
                sender: 'Ozodbek',
                message: 'zormi',
                messageTime: '22:20'
            }]
        }
    ]
}



localStorage.setItem('DATA', JSON.stringify(user))

//li click bolishi
const messageListElem = document.querySelector('.message__list')
const selectBoxElem = document.querySelector('.select-box')
const textLiElem = document.querySelector('.text__li')
const profileNameElem = document.querySelector('.profile__name')
const profileSlogElem = document.querySelector('.profile__slog')
const infoNameImgElem = document.querySelector('.info__name__img')
const infoNameTextElem = document.querySelector('.info__name__text')
const obileNumElem = document.querySelector('.obile__num')
const mobileNumElem = document.querySelector('.mobile__num')
const profileDivElem = document.querySelector('.profile__div')
const userInfoTimeElem = document.querySelector('.user__info__time')
const logouchun = document.querySelector('.logouchun')
const raqamuchun = document.querySelector('.raqamuchun')
const ismuchun = document.querySelector('.ismuchun')

const searchFormElement = document.querySelector(".search__form")
const searchInputElement = document.querySelector(".search__input")
const searchListElement = document.querySelector(".all-chats__list")
const searchNameElement = searchListElement.querySelectorAll(".account__name")

searchInputElement.addEventListener("click", event => {
    event.target.classList.add("border-input")
})

profileDivElem.addEventListener('click', () => {
    chatModalElem.style.display = 'block'
})
userInfoTimeElem.addEventListener('click', () => {
    chatModalElem.style.display = 'none'

})

function renderElem(profileImg, chatName, message, messageTime) {
    //created elements
    const newLiElem = document.createElement('li')
    const newDivElem = document.createElement('div')
    const newDivElem1 = document.createElement('div')
    const nemaElem = document.createElement('h5')
    const endmassageElem = document.createElement('p')
    const timeEndMassageElem = document.createElement('p')
    const imgElem = document.createElement('img')
    newDivElem.appendChild(imgElem)
    newDivElem.appendChild(newDivElem1)
    newDivElem1.appendChild(nemaElem)
    newDivElem1.appendChild(endmassageElem)
    newLiElem.appendChild(newDivElem)
    newLiElem.appendChild(timeEndMassageElem)

    // style elements
    newLiElem.style.display = 'flex'
    newLiElem.style.justifyContent = 'space-between'
    newLiElem.style.alignItems = 'top'
    newLiElem.style.marginBottom = '5px'
    newLiElem.style.marginTop = '5px'
    newLiElem.style.paddingLeft = '5px'
    newLiElem.style.paddingRight = '5px'
    newDivElem.style.display = 'flex'
    newDivElem1.style.marginLeft = '5px'
    endmassageElem.style.color = 'grey'
    timeEndMassageElem.style.color = 'grey'
    imgElem.style.height = '60px'
    imgElem.style.width = '60px'
    imgElem.style.borderRadius = '50%'
    // result
    imgElem.src = profileImg
    nemaElem.textContent = chatName
    endmassageElem.textContent = message
    timeEndMassageElem.textContent = messageTime

    newLiElem.classList.add('member')
    return newLiElem
}

renderMembers()
function renderMembers() {

    allChatsListElem.innerHTML = ''
    for (let elem of user.chats){
        let message = elem.chatMessages[0]
        allChatsListElem.appendChild(renderElem(elem.profileImg, elem.chatName, message.message, message.messageTime))
    }

}

renderNeededChatMsg()
function message(message, messageTime, msgSender){
    //created messeg elem
    const messageLiElem = document.createElement('li')
    const messagePElem = document.createElement('p')
    const messagePTimeElem = document.createElement('p')
    const messageDivElem = document.createElement('div')
    messageDivElem.appendChild(messagePElem)
    messageDivElem.appendChild(messagePTimeElem)
    messageLiElem.appendChild(messageDivElem)

    //style message elem
    messageDivElem.style.display = 'flex'
    messageDivElem.style.alignItems = 'flex-end'
    messageDivElem.style.flexDirection = 'column'
    messagePElem.classList.add('message-text')
    messagePTimeElem.classList.add('message-time')
    messagePElem.textContent = message
    messagePTimeElem.textContent = messageTime
    messageDivElem.style.background = 'rgba(250, 165, 165, 0.925)'
    messageLiElem.style.display = 'flex'
    messageLiElem.style.marginBottom = '5px'
    messageLiElem.style.marginTop = '5px'
    messageDivElem.style.padding = '5px'
    messageDivElem.style.borderRadius = '15px'
    if (msgSender == user.config.myName) {
        messageLiElem.classList.add('message-received')
    }
    return messageLiElem
}

returnMessage()
function returnMessage(){
    const memberElem = document.querySelectorAll('.member')
    memberElem.forEach((e, index)=>
        e.addEventListener('click', a=>{
            memberElem.forEach(i=> i.classList.add('active'))
            tanlangan = index
            messageListElem.innerHTML = ""
            messageTextareaElem.disabled = false
            bor.style.display = 'flex'
            renderNeededChatMsg()
            setTopChatInfo() 
            rigthinfo()
        })
    )

}
function renderNeededChatMsg() {
    messageListElem.innerHTML = ""

    for (let msg of user.chats[tanlangan].chatMessages) {
        messageListElem.appendChild(message(msg.message, msg.messageTime, msg.sender))
    }
}
function setTopChatInfo() {
    const chatProfileImg = document.querySelector('.info__name__img')
    const chatProfileName = document.querySelector('.profile__name')

    chatProfileImg.src = user.chats[tanlangan].profileImg
    chatProfileName.textContent = user.chats[tanlangan].chatName

}
function rigthinfo(){
    const rigthNemaElem = document.querySelector('.info__name__text')
    const righthNumberElem = document.querySelector('.mobile__num')
    const righthImgElem = document.querySelector('.mobile__img')
    rigthNemaElem.textContent = user.chats[tanlangan].chatName
    righthImgElem.src = user.chats[tanlangan].profileImg
    righthNumberElem.textContent = user.chats[tanlangan].chatNumber
}
function rigthinfo(){
    const rigthNemaElem = document.querySelector('.ismuchun')
    const righthNumberElem = document.querySelector('.raqamuchun')
    const righthImgElem = document.querySelector('.logouchun')
    rigthNemaElem.textContent = user.chats[tanlangan].chatName
    righthImgElem.src = user.chats[tanlangan].profileImg
    righthNumberElem.textContent = user.chats[tanlangan].chatNumber
}
messageTextForm.addEventListener('submit', event => {
    event.preventDefault()

    const mydate = new Date()

    user.chats[tanlangan].chatMessages.push({
        sender: user.config.myName,
        message: messageTextareaElem.value,
        messageTime: `${mydate.getHours()}:${mydate.getMinutes()}`
    })
    localStorage.setItem('DATA', JSON.stringify(user))

    renderNeededChatMsg()
    messageTextForm.reset()
})



const section = document.querySelector('.bodyi')
const settingsMainElem = document.querySelector('.settings__main')
nightModeElem.addEventListener('click', () => {
    section.classList.toggle('uzgardi')
    chatModalElem.classList.toggle('uzgardi')
    menuElem.classList.toggle('uzgardi')
    rigthChatModal.classList.toggle('uzgardi')


})


profileIconButtonElem.addEventListener('click', () => {
    rigthAllChatsHidden.style.display = 'block'
    centerChatElem.style.width = "43%"
})

ikkinchi.addEventListener('click', () => {
    rigthAllChatsHidden.style.display = 'none'
    centerChatElem.style.width = '70%'
})

function CreateSmile(smile){
    let smileLiElem = document.createElement('li')
    let smilenikbtn = document.createElement('button')
    smilenikbtn.textContent = smile
    smilenikbtn.classList.add = 'smiles'
    smileLiElem.style.margin = '2px'
    smileLiElem.appendChild(smilenikbtn)
    smilenikbtn.addEventListener('click', (e)=>{
    messageTextareaElem.value = smile
    })
    return smileLiElem

}

renderSmile()
function renderSmile(){
    emojiList.innerHTML = ''
    emojies.forEach((smile) => {    
    
    emojiList.appendChild(CreateSmile(smile))
})

}

const smilenik = document.querySelector('.smiles')

smilebtn.addEventListener('click', () => {
    emojiList.classList.toggle('emojiListHidden')
   
    
})
user.chats.forEach(chast => {
    chast.chatMessages.forEach(chatm => {
console.log(chatm.sender.toLowerCase().includes(searchInputElement.value.toLowerCase()))
            
        
    });
});