const result = document.getElementById("result");
const end = document.getElementById("end");
const btn = document.getElementById("seachr");
const span = document.getElementById("span");

async function getCep() {
  const cep = end.value;

  if (!cep || cep.length < 8) {
    console.log("Digite um CEP válido");
    return;
  }

  try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
    const data = await response.json();

    if (!response.ok) {
      result.innerHTML = `<p class="text-red-500">CEP não encontrado!</p>`;
      return;
    }
    
    result.innerHTML = `
    <div> 
        <h3>Cep: ${data.cep}</h3>
        <h3>Rua: ${data.street}</h3>
        <h3>Bairro: ${data.neighborhood}</h3>
        <h3>Cidade: ${data.city}</h3>
        <h3>Estado: ${data.state}</h3>
    </div>     
  `;

    end.value = "";
  } catch (error) {
    console.log(error);
    result.innerHTML = `<p class="text-red-500">Erro na busca. Tente novamente.</p>`;
  }
}

btn.addEventListener("click", getCep);
