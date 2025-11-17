// src/services/logService.js

// Importa o modelo de Log que você criou no Commit 1
const Log = require('../models/log'); 

/**
 * Registra um evento de auditoria no banco de dados.
 * @param {number} userId - ID do usuário que realizou a ação.
 * @param {string} action - Descrição da ação (ex: 'LOGIN_SUCESSO', 'ORDER_ACEITO').
 * @param {string} resourceType - Tipo de recurso afetado (ex: 'USER', 'ORDER').
 * @param {number} resourceId - ID do recurso afetado (ex: ID do pedido).
 * @param {object} details - Detalhes adicionais da mudança (opcional).
 */
exports.recordLog = async ({ userId, action, resourceType, resourceId, details }) => {
    try {
        await Log.create({
            userId,
            action,
            resourceType,
            resourceId,
            details,
        });
        // Console.log útil para ver o log no terminal de desenvolvimento
        console.log(`[LOG SUCESSO] ${action} por UserID: ${userId || 'N/A'}. Recurso: ${resourceType} ${resourceId || ''}`);

    } catch (error) {
        // É crucial que a falha em registrar o log NÃO PARE a operação principal (ex: login/aceite de pedido).
        console.error("ERRO CRÍTICO ao registrar o log de auditoria:", error);
    }
};