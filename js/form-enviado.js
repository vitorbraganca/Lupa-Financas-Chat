function funcionamentoBtn(){
    const sectionPena = document.getElementById('pena');
    const sectionAprender = document.getElementById('call-aprender');


    const btnNao = document.getElementById('nao-preciso');
    btnNao.addEventListener('click', mostrarNao => {
        sectionAprender.classList.remove('ativo');
        sectionPena.classList.add('ativo');
    })

    const btnSim = document.getElementById('aprender');
    btnSim.addEventListener('click', mostrarSim => {
        sectionPena.classList.remove('ativo');
        sectionAprender.classList.add('ativo');
    })

}

funcionamentoBtn();


window.onload = function(){

    const conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        showProgressBar: true,
        robotImage: "http://lupanasfinancas.vitorbraganca.com/img/robot-img.svg",
        userImage: "http://lupanasfinancas.vitorbraganca.com/img/user-img.svg",
        theme: "dark-theme",
        submitCallback: function () {
            alert('Vou fazer alguns cálculos e enviar para o seu e-mail!');
        }
    });
};