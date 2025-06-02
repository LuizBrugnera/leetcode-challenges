function maxProfit(prices) {
    let totalProfit = 0;

    // Iterar através do array de preços
    for (let i = 1; i < prices.length; i++) {
        // Se o preço de hoje é maior do que o de ontem, podemos obter lucro
        if (prices[i] > prices[i - 1]) {
            // Adicionar a diferença ao total de lucro
            totalProfit += prices[i] - prices[i - 1];
        }
    }

    // Retornar o lucro total acumulado
    return totalProfit;
}

// Analisando a complexidade:
// Tempo: O(n), onde n é o número de dias (elementos no array `prices`).
// Porque nós percorremos o array uma única vez.
// Espaço: O(1), nós apenas utilizamos uma variável para armazenar o lucro total.

