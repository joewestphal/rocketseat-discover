const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('modal-wrapper')

buttonOpenModal.onclick = function() {
    modalWrapper
    this.classList
    this.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEscKey= event.key=== 'escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})