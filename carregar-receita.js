document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const receitaId = params.get('id');

    const receita = receitas.find(r => r.id === receitaId);

    const titleElement = document.getElementById('recipe-title');
    const imageElement = document.getElementById('recipe-image');
    const ingredientsList = document.getElementById('recipe-ingredients');
    const instructionsList = document.getElementById('recipe-instructions');
    const contentContainer = document.getElementById('recipe-content-container');
    const notFoundMessage = document.getElementById('recipe-not-found');

    if (receita) {
        document.title = receita.titulo;
        titleElement.textContent = receita.titulo;
        imageElement.src = receita.imagem;
        imageElement.alt = receita.titulo;

        ingredientsList.innerHTML = '';
        instructionsList.innerHTML = '';

        receita.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientsList.appendChild(li);
        });

        receita.preparo.forEach(passo => {
            const li = document.createElement('li');
            li.textContent = passo;
            instructionsList.appendChild(li);
        });

        contentContainer.style.display = 'grid';

    } else {
        document.title = 'Receita Não Encontrada';
        titleElement.textContent = 'Receita Não Encontrada';
        imageElement.style.display = 'none';
        notFoundMessage.style.display = 'block';
    }
});