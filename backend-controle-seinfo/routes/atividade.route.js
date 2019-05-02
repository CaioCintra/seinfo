module.exports = function(app) {
 
    const atividades = require('../controllers/atividade.controller.js');
  
    // Insere uma atividade
    app.post('/api/atividade', atividades.create);
  
    //Procura uma atividade pelo id
    app.get('/api/atividade/:atividadeId', atividades.findById);
  
    // Procura todas as atividades
    app.get('/api/atividades', atividades.findAll);
  
    // Update de uma atividade pelo ID 
    app.patch('/api/atividade/:atividadeId', atividades.atualiza);
  
    // Deleta uma atividade pelo ID
    app.delete('/api/atividade/:atividadeId', atividades.delete);
  }
  