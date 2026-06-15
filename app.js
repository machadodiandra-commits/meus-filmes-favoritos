// ============================================================
// DADOS DOS FILMES
// ============================================================
const movies = [
  {
    id: 1,
    title: "Off Campus (O Acordo)",
    year: 2023,
    genre: "Romance",
    category: "comedia",
    rating: 4.8,
    duration: "1h 45min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200",
    description: "Baseado no best-seller de Elle Kennedy. Hannah Wells finalmente encontrou alguém que a faz sentir desejo, mas ela não tem a menor ideia de como seduzi-lo. Sua única esperança é fazer um acordo com Garrett Graham, o capitão do time de hóquei, para que ele finja ser seu namorado em troca de ajuda com as notas.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["Romance Universitário", "Hóquei", "Best-seller", "Comédia Romântica"]
  },
  {
    id: 2,
    title: "Interestelar",
    year: 2014,
    genre: "Ficção Científica",
    category: "ficcao",
    rating: 4.9,
    duration: "2h 49min",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200",
    description: "As reservas naturais da Terra estão se esgotando. Um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie humana.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["Espaço", "Tempo", "Drama", "Visual Incrível"]
  },
  {
    id: 3,
    title: "Batman: O Cavaleiro das Trevas",
    year: 2008,
    genre: "Ação",
    category: "acao",
    rating: 5.0,
    duration: "2h 32min",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1200",
    description: "Com a ajuda de Jim Gordon e Harvey Dent, Batman mantém a ordem em Gotham City. Mas um jovem e anárquico criminoso conhecido como Coringa surge para causar o caos e testar os limites do herói.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["DC Comics", "Coringa", "Épico", "Crime"]
  },
  {
    id: 4,
    title: "Homem-Aranha: Através do Aranhaverso",
    year: 2023,
    genre: "Animação",
    category: "animacao",
    rating: 4.9,
    duration: "2h 20min",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=1200",
    description: "Depois de se reunir com Gwen Stacy, Miles Morales é catapultado através do Multiverso, onde ele encontra uma equipe de Pessoas-Aranha encarregada de proteger sua própria existência.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/shW9i6k8cB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["Marvel", "Multiverso", "Estilo Único", "Ação"]
  },
  {
    id: 5,
    title: "O Menu",
    year: 2022,
    genre: "Terror / Suspense",
    category: "terror",
    rating: 4.5,
    duration: "1h 47min",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
    description: "Um jovem casal viaja para uma ilha remota para comer em um restaurante exclusivo, onde o chef preparou um menu luxuoso, com algumas surpresas chocantes.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/C_uTkUGcHv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["Gastronomia", "Sátira", "Tensão", "Mistério"]
  },
  {
    id: 6,
    title: "Top Gun: Maverick",
    year: 2022,
    genre: "Ação",
    category: "acao",
    rating: 4.8,
    duration: "2h 10min",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800",
    banner: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1200",
    description: "Depois de mais de trinta anos de serviço como um dos melhores aviadores da Marinha, Pete Mitchell está onde pertence, ultrapassando os limites como um piloto de teste corajoso.",
    trailerIframe: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/giXco2jaZ_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    tags: ["Aviões", "Tom Cruise", "Adrenalina", "Nostalgia"]
  }
];

// ============================================================
// ESTADO DA APLICAÇÃO
// ============================================================
let currentFilter = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('movie_favorites')) || [];

// ============================================================
// ELEMENTOS DO DOM
// ============================================================
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sidebarItems = document.querySelectorAll('.sidebar__item');
const chips = document.querySelectorAll('.chip');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const emptyState = document.getElementById('emptyState');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');

// Elementos do Modal
const modalBanner = document.getElementById('modalBanner');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalTags = document.getElementById('modalTags');
const modalFavBtn = document.getElementById('modalFavBtn');
const modalPlayBtn = document.getElementById('modalPlayBtn');

// ============================================================
// FUNÇÕES PRINCIPAIS
// ============================================================

// Renderizar os cards de filmes
function renderMovies() {
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = currentFilter === 'all' || 
                         movie.category === currentFilter || 
                         (currentFilter === 'favoritos' && favorites.includes(movie.id));
    return matchesSearch && matchesFilter;
  });

  moviesGrid.innerHTML = '';

  if (filteredMovies.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  filteredMovies.forEach((movie, index) => {
    const isFav = favorites.includes(movie.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
      <div class="card__thumb">
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="card__overlay">
          <div class="card__rating">
            <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            <span>${movie.rating}</span>
          </div>
        </div>
        <div class="card__play-btn">
          <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <button class="card__fav-btn ${isFav ? 'active' : ''}" data-id="${movie.id}" title="Favoritar">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        ${movie.year === 2023 ? '<span class="card__badge">Novo</span>' : ''}
      </div>
      <div class="card__info">
        <h3 class="card__title">${movie.title}</h3>
        <div class="card__meta">
          <span class="card__year">${movie.year} • ${movie.duration}</span>
          <span class="card__genre">${movie.genre}</span>
        </div>
      </div>
    `;

    // Eventos do Card
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card__fav-btn')) {
        toggleFavorite(movie.id);
        return;
      }
      openModal(movie);
    });

    moviesGrid.appendChild(card);
  });
}

// Alternar Favorito
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removido dos favoritos");
  } else {
    favorites.push(id);
    showToast("Adicionado aos favoritos! ❤");
  }
  localStorage.setItem('movie_favorites', JSON.stringify(favorites));
  renderMovies();
  updateModalFavBtn(id);
}

// Abrir Modal
function openModal(movie) {
  modalTitle.textContent = movie.title;
  modalDesc.textContent = movie.description;
  modalMeta.innerHTML = `
    <span class="rating">★ ${movie.rating}</span>
    <span>${movie.year}</span>
    <span>${movie.duration}</span>
    <span>${movie.genre}</span>
  `;
  
  modalTags.innerHTML = movie.tags.map(tag => `<span class="modal__tag">${tag}</span>`).join('');
  
  // Configurar o banner ou iframe
  modalBanner.innerHTML = `<img src="${movie.banner}" alt="${movie.title}">`;
  
  updateModalFavBtn(movie.id);
  
  // Botão Assistir (Carrega o iframe)
  modalPlayBtn.onclick = () => {
    modalBanner.innerHTML = movie.trailerIframe;
  };

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Configurar botão de favoritar no modal
  modalFavBtn.onclick = () => toggleFavorite(movie.id);
}

function updateModalFavBtn(id) {
  if (favorites.includes(id)) {
    modalFavBtn.classList.add('active');
  } else {
    modalFavBtn.classList.remove('active');
  }
}

// Fechar Modal
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  // Limpa o iframe ao fechar para parar o som
  setTimeout(() => { modalBanner.innerHTML = ''; }, 300);
}

// Mostrar Toast
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// EVENT LISTENERS
// ============================================================

// Filtros da Sidebar e Chips
function handleFilterClick(filter) {
  currentFilter = filter;
  
  // Atualiza UI da Sidebar
  sidebarItems.forEach(item => {
    if (item.dataset.filter === filter) item.classList.add('active');
    else item.classList.remove('active');
  });

  // Atualiza UI dos Chips
  chips.forEach(chip => {
    if (chip.dataset.filter === filter) chip.classList.add('active');
    else chip.classList.remove('active');
  });

  renderMovies();
  if (window.innerWidth <= 768) sidebar.classList.remove('open');
}

sidebarItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    handleFilterClick(item.dataset.filter);
  });
});

chips.forEach(chip => {
  chip.addEventListener('click', () => handleFilterClick(chip.dataset.filter));
});

// Busca
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderMovies();
});

// Toggle Sidebar Mobile
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Fechar modal no X ou fora dele
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
});
