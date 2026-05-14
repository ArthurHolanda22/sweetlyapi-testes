const validateOrderData = (data) => {
    // Reduz complexidade ciclomática movendo a lógica para fora do controlador
    if (!data.itemName || data.itemName.trim() === '') {
        return { valid: false, message: 'O nome do item é obrigatório.' };
    }
    if (!data.quantity || data.quantity <= 0) {
        return { valid: false, message: 'A quantidade deve ser maior que zero.' };
    }
    return { valid: true };
};

module.exports = { validateOrderData };