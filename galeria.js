document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('recipes-grid-container');
    const searchBar = document.getElementById('search-bar');
    const noResultsMessage = document.getElementById('no-results-message');

    function renderRecipes(recipesToRender) {
        gridContainer.innerHTML = '';

        if (recipesToRender.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }

        recipesToRender.forEach((receita, index) => {
            const card = document.createElement('article');
            card.className = 'recipe-card';
            card.style.animationDelay = `${index * 0.1}s`;

            card.innerHTML = `
                <img src="${receita.imagem}" alt="${receita.titulo}">
                <div class="card-content">
                    <h3>${receita.titulo}</h3>
                    <p>${receita.descricao}</p>
                    <a href="receita.html?id=${receita.id}" class="btn btn-secondary">Ver Receita</a>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    searchBar.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        const filteredRecipes = receitas.filter(receita => {
            const includesInTitle = receita.titulo.toLowerCase().includes(searchTerm);
            const includesInIngredients = receita.ingredientes.some(ing => ing.toLowerCase().includes(searchTerm));
            return includesInTitle || includesInIngredients;
        });

        renderRecipes(filteredRecipes);
    });

    setTimeout(() => {
        renderRecipes(receitas);
    }, 500);
});