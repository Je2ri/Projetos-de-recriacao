 interface Veículo {
    nome: string;
    placa: string;
    entrada: Date;
}

(function () {
    const $ = (query: string): HTMLInputElement | null =>
        document.querySelector(query);
    
    function pátio() {
        function ler() { }
        
        function adicionar(Veículo: Veículo) { 
            const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${Veículo.entrada} </td>
            <td>${Veículo.placa}</td>
            <td>${Veículo.nome}</td>
            <td>
                <button class="delete" data-placa="${Veículo.placa}">X</button>
            </td>
        `;
            
            $("#pátio")?.appendChild(row);
        }
        
        function remover() { }

        function salvar() {}
        
        function render() { }
        return { ler, adicionar, remover, salvar, render}
    }
    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }

        pátio().adicionar({ nome, placa, entrada: new Date() })
    })
})()