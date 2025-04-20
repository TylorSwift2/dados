function exibirEstatisticas(seletor, tamanho, dados) {
    const div = document.querySelector(seletor);
    div.style.width = tamanho.width;
    div.style.height = tamanho.height;
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.background = '#f0f0f0';
    div.style.padding = '20px';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  
    const foto = document.createElement('img');
    foto.src = dados.urlFoto;
    foto.style.width = '100px';
    foto.style.height = '100px';
    foto.style.borderRadius = '50%';
    div.appendChild(foto);
  
    const nome = document.createElement('h2');
    nome.textContent = dados.nome;
    div.appendChild(nome);
    
    const commits = document.createElement('p');
    commits.textContent = `Commits: ${dados.commits}`;
    div.appendChild(commits);
    
    
   
    const estatisticas = document.createElement('p');
    estatisticas.textContent = `Pull Requests: ${dados.pulls}`;
    estatisticas.style.marginBottom = '10px';
    div.appendChild(estatisticas);

    const issues = document.createElement('p');
    issues.textContent = `Issues: ${dados.issues}`;
    div.appendChild(issues);
}

fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
        exibirEstatisticas('.usuario', { width: '300px', height: '400px' }, dados);
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));