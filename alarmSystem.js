// Importando módulos necessários
const readline = require('readline');

// Simulação de estado do sistema de alarme
let alarmeAtivado = false; // Estado inicial do alarme
let alarmeDisparado = false;

// Função para ativar/desativar o alarme
function alternarSistemaAlarme() {
    alarmeAtivado = !alarmeAtivado;
    console.log(`Sistema de alarme ${alarmeAtivado ? 'ATIVADO' : 'DESATIVADO'}`);
}

// Função para simular o disparo do alarme
function dispararAlarme() {
    if (alarmeAtivado && !alarmeDisparado) {
        alarmeDisparado = true;
        console.log('🚨 Alarme DISPARADO! Movimento detectado! 🚨');
        // Aqui você poderia acionar uma sirene ou notificação real
    }
}

// Função para simular o reset do alarme
function resetarAlarme() {
    if (alarmeDisparado) {
        alarmeDisparado = false;
        console.log('Alarme reiniciado. Sistema pronto.');
    }
}

// Simulação de sensores de presença
function simularSensor(sensorId) {
    console.log(`Sensor ${sensorId}: Movimento detectado!`);
    dispararAlarme();
}

// Interface de leitura de comandos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para monitorar o input do usuário
function monitorarEntrada() {
    rl.question('Digite "ativar", "desativar", "simular" ou "resetar": ', (comando) => {
        switch (comando.toLowerCase()) {
            case 'ativar':
                alternarSistemaAlarme();
                break;
            case 'desativar':
                alternarSistemaAlarme();
                break;
            case 'simular':
                if (alarmeAtivado) {
                    simularSensor(1); // Simulação de movimento no sensor 1
                } else {
                    console.log('O sistema está desativado. Não é possível simular o alarme.');
                }
                break;
            case 'resetar':
                resetarAlarme();
                break;
            default:
                console.log('Comando inválido. Tente novamente.');
        }
        monitorarEntrada(); // Continua monitorando os comandos
    });
}

// Inicialização do sistema de alarme
console.log('Sistema de Alarme Iniciado.');
monitorarEntrada();
