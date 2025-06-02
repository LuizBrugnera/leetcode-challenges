function numIslands(grid) {
    if (grid.length === 0) return 0; // Verifica se a grade está vazia

    let count = 0; // Contador de ilhas

    // Função recursiva para explorar a ilha
    function dfs(row, col) {
        // Verifique se as coordenadas estão fora dos limites ou se é água
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return; // Se for água ou fora dos limites, saia
        }

        // Marque a terra como visitada
        grid[row][col] = '0';

        // Explore todas as direções adjacentes (cima, baixo, esquerda, direita)
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    // Percorre cada célula da grade
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // Se encontrar uma '1', é uma nova ilha, então incrementa o contador
            if (grid[i][j] === '1') {
                count++; // Incrementa o contador de ilhas
                dfs(i, j); // Realiza a busca em profundidade a partir dessa célula
            }
        }
    }

    return count; // Retorna o número total de ilhas
}

// Exemplo de uso
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '1'],
    ['0', '0', '0', '1', '1'],
    ['0', '0', '0', '0', '0']
];

console.log(numIslands(grid)); // Saída: 3
