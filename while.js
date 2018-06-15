/*while (boolean) {codigo} */


/* enquanto andar for diferente de zero vai mais um poquinho - funcionamento do while é igual ao if, a diferença é o
acontece dentro do código, ele roda em loop, o while é um if que é rodado várias vezes
jeitos de escrever o menos um, -- é o mais utilizado
    andar = andar -1;
    andar -= andar 1;
    andar--;
    
    termos sempre que usar no WHILE: INICIALIZAÇÃO, CONDIÇÃO, ATUALIZAÇÃO, senão da bug do CIEE
    
    dentro do WHILE, existe um loop
    ----------------------------    
    let andar = 5;
    let subindo = false;
    
    while (andar  !== 0){
        alert (`espera mais ${andar}`);
        
        if (andar === 1){
            subindo = true;
        }
        
        */

let andar = 5;

while (andar !== 0){
    alert(`espera mais um pouquinho. andar atual: ${andar}`);
    andar--;
}

alert ("Pode sair que ja chegou no térreo.");
