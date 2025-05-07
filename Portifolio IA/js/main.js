// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const navMenu = document.querySelector('.nav-menu');

menuMobile.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação no Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Gerenciamento de Projetos
const projetos = [
    {
        titulo: 'Lista de Tarefas com IA',
        descricao: 'Sistema inteligente de gerenciamento de tarefas que utiliza inteligência artificial para priorizar e organizar atividades. O sistema aprende com os padrões do usuário e sugere a melhor forma de organizar as tarefas diárias.',
        tecnologias: ['Python', 'Machine Learning', 'NLP', 'Flask'],
        link: 'https://github.com/Lehguto12/Lista-de-tarefas-IA'
    },
    {
        titulo: 'ChatBot com IA',
        descricao: 'ChatBot inteligente desenvolvido com técnicas de processamento de linguagem natural. Capaz de manter conversas naturais, responder perguntas e auxiliar usuários em diversas tarefas.',
        tecnologias: ['Python', 'NLP', 'TensorFlow', 'API REST'],
        link: 'https://github.com/Lehguto12/Chat-Bot-IA.git'
    },
    {
        titulo: 'Portfólio Web',
        descricao: 'Portfólio pessoal desenvolvido com HTML, CSS e JavaScript. Design moderno e responsivo com animações suaves e interações dinâmicas.',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        link: 'https://github.com/Lehguto12/Portif-lio.git'
    },

];

function criarCardProjeto(projeto) {
    return `
        <div class="projeto-card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <div class="projeto-tecnologias">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${projeto.link}" class="projeto-link" target="_blank">Ver Projeto</a>
        </div>
    `;
}

function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    container.innerHTML = projetos.map(projeto => criarCardProjeto(projeto)).join('');
}

// Formulário de Contato
const form = document.getElementById('contato-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', { nome, email, mensagem });
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
}); 