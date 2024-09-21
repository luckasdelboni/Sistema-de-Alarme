// Importando módulos necessários
const readline = require('readline');

let alarmeArmado = false // estado inicial do alarme
let alarmeDisparado = false 

// Função para ativar/desativar o alarme
function alternarSistemaAlarme() {
    alarmeAtivado = !alarmeAtivado;
    console.log(`Sistema de alarme ${alarmeAtivado ? 'ATIVADO' : 'DESATIVADO'}`);
}
