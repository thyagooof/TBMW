let section = document.getElementById('resultados-pesquisa');
let resultado = '';

for (let dado of dados) {
    resultado += `
        <div class="caixa-resultado">
            <div class="item-resultado">
                <h2>#${dado.id} - ${dado.nome}</h2>
                <div class="descricao">
                    <img src="${dado.imagem}" alt="${dado.nome}">
                    <div class="descricao-texto">
                        <p class="descricao-meta">${dado.ponto_forte}</p>
                        <p class="descricao-meta">${dado.efeito_adicional}</p>
                        <div class="tipo"><strong>Limitação:</strong> ${dado.limitacao}</div> 
                    </div>
                </div>
            </div>
        </div>
    `
}
section.innerHTML = resultado;

function procurar() {
    let pesquisa = document.getElementById('pesquisa').value;
    section.innerHTML = '';
    resultado = '';
    for (let dado of dados) {
        if (dado.id.includes(pesquisa) || dado.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
            resultado += `
                <div class="caixa-resultado">
                    <div class="item-resultado">
                        <h2>#${dado.id} - ${dado.nome}</h2>
                        <div class="descricao">
                            <img src="${dado.imagem}" alt="${dado.nome}">
                            <div class="descricao-texto">
                                <p class="descricao-meta">${dado.ponto_forte}</p>
                                <p class="descricao-meta">${dado.efeito_adicional}</p>
                                <div class="tipo"><strong>Limitação:</strong> ${dado.limitacao}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
    section.innerHTML = resultado;
}