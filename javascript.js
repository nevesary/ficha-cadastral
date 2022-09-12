
const btn = document.querySelector("#btn")
const form = document.querySelector(".forms")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    if(form.reportValidity()) {

        const nomeCompleto = document.querySelector("#nome-completo").value
    
        const dataNascimento = document.querySelector("#data-nascimento").value
        const cpf = document.querySelector("#cpf").value
        const nomeMae = document.querySelector("#nome-mae").value 
        const raça = document.querySelector("#raça").value
        const sexo = document.querySelector("#sexo").value
        const email = document.querySelector("#email").value
        const tel = document.querySelector("#telefone").value
        const endereço = document.querySelector("#endereço").value
        const cep = document.querySelector("#cep").value
        const gestante = document.querySelector("#gestante").value
        const puérpera = document.querySelector("#puérpera").value
        const dose = document.querySelector("#dose").value
    
        console.log(
            `${nomeCompleto} ${dataNascimento} ${cpf} ${nomeMae} ${raça} ${sexo} ${email} 
            ${tel} ${endereço} ${cep} ${gestante} ${puérpera} ${dose}`
        )
    }
    
} )






