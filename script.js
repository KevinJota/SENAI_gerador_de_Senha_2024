function gerarsenha() {
    let chars = 'zxcvbnmasdfghjklqwertyuiop';
    let senhatamanho = document.getElementById('chkCaracteres').value;
    let numsenhas = document.getElementById('chkSenhas').value;
    let senhas = '';

    // aqui verifica se o usuario permitiu o uso de outras caracteres pelo checkbox .checked
    if (document.getElementById('chkMaiusculas').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (document.getElementById('chkNumeros').checked) chars += '0123456789';
    if (document.getElementById('chkEspeciais').checked) chars += '!@#$%^&*()';

    // Gerando as senhas
    for (let j = 0; j < numsenhas; j++) {
        let senha = '';
        for (let i = 0; i < senhatamanho; i++) {
            let Nrandom = Math.floor(Math.random() * chars.length);
            senha += chars.substring(Nrandom, Nrandom + 1);
        }
        senhas += senha + '\n';
    }
    
    document.getElementById('senha').value = senhas.trim();
}

// essa função verifica se os valores dos inputs de checknumber estao dentro do limite
// caso esteja fora do limite o valor é reajustado
function limitarValor(input) {
    let min = parseInt(input.min);
    let max = parseInt(input.max);
    
    let valor = parseInt(input.value);
    
    // Verifica se o valor está dentro do limite que eu coloquei
    if (valor < min) {
        input.value = min; 
    } else if (valor > max) {
        input.value = max; 
    }
}

// este aqui limpa o campo do text area
function limpar(){
    document.getElementById('senha').value = '';
}