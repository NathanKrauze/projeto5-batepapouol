function login() {
    const nome = prompt('Qual é o seu nome?')
    let objnome = {nome: nome};
    console.log(objnome);
    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objnome);
    promessa.then()

}

login()