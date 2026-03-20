const result = document.getElementById('result')
const end = document.getElementById('end')

async function getCep() {
    
    const cep = await fetch(`https://h-apigateway.conectagov.estaleiro.serpro.gov.br/api-cep/v1/consulta/cep/`)
    const data = await cep.json()

    console.log(data)
}

getCep()




