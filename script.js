let convidados = ['pedro', 'joão', 'thiago', 'felipe', 'matheus'];
/*a seguir temos a função de listar convidados 
ao clicar no botão listar convidados com ajuda da função alert 
será exibido um spam com as informaçẽs contidas no nosso lista*/
function listarConvidados() {
    alert("Lista de convidados: " + convidados.join(', '));
}
/*na função de adicionar os convidados criamos uma nova variavel 
para receber o valor inserido na caixa de texto que possui o id novoConvidado*/

function adicionarConvidados() {
    let novoConvidado = document.getElementById("novoConvidado").value;

    if (novoConvidado.trim() !== '') {//usamos esse .trim a frente para que a nossa estrutura saiba se foi adicionado um valor a  caixa de texto
        convidados.push(novoConvidado);//nesse comando fazemos com que o valor digitado seja inserido no nosso lista
        alert("Estaremos convidando também a(o): " + novoConvidado);//será exibido um alerta na tela informando as mudanças realizadas na lista
        document.getElementById("novoConvidado").value = ''; // Limpa a caixa de texto após adicionar

    } else {//para caso a caixa de texto estiver vazia
        alert("Por favor, digite o nome do convidado.");//sera gerado um alerta na tela informando que não a dados a serem trabalhados
    }
}

function removerConvidados() {
    let convidadoARemover = document.getElementById("novoConvidado").value;//aqui é criada mais uma variavel que recebe 
    if (convidadoARemover.trim() !== '') {//verificando se o campo não está vazio
        const indice = convidados.indexOf(convidadoARemover);
        if (indice !== -1) {// verificando se o nome realmente está na lista para que possa ser removido 
            convidados.splice(indice, 1);
            alert("O convidado " + convidadoARemover + " foi removido.");
            document.getElementById("novoConvidado").value = ''; // Limpa a caixa de texto após remover
        } else {
            alert("O convidado " + convidadoARemover + " não foi encontrado no array.");
        }
    } else {
        alert("Por favor, digite o nome do convidado a ser removido.");
    }
}

function textoInformativo(){
    alert("Clique em Listar convidados para exibir uma lista com todos os convidados atuais. \n Digite o nome do convidado que deseja adicionar e clique na opção de adicionar. \n Digite o nome de um convidado que já se encontra na lista e clique em remover");
}
