const numeroSenha = document.querySelect('.parametro-senha_texto');
let tamanhoSenha =12;
numerosenha.textContent = tamanhoSenha;
const letrasMaiusculas ='ABCDEFGHJKlMOPQRSTUVWXYZ';
const letrasMaiusculas ='abcdefghjklmopqrstuvwxy';
const numeros ='0123456789';
const simbolos ='!@%*?';
const botoes = document.querySelectorA11('.parametro-senha_botao');
const campoSenha = document.querSelector('#campo-senha');
const checkbox = document.queryselectorA11('.checkbox');
const forcaSenha = document.queryselector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSnha >1){ 
 tamanhoSenha--;
    }
 numerosenha.textConttent = tamanhoSenha;
 geraSenha();
}
function aumentaTamanho(){
  if(tamanhoSenha < 20){
     tamanhoSenha++;
}
numeroSenha.textContent = tamanhoSenha;
    geraSena();
}
