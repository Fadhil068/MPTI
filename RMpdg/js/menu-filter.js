const menuItems = document.querySelectorAll('.menu-item');
const tabBtns   = document.querySelectorAll('.tab-btn');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const searchInput  = document.getElementById('searchInput');
const menuEmpty    = document.getElementById('menuEmpty');

// ===== FILTER FUNGSI =====
function filterMenu(category, keyword = '') {
  let visible = 0;

  menuItems.forEach(item => {
    const cat     = item.dataset.category;
    const name    = item.querySelector('h3').textContent.toLowerCase();
    const desc    = item.querySelector('p').textContent.toLowerCase();
    const kw      = keyword.toLowerCase();

    const matchCat = category === 'semua' || cat === category;
    const matchKw  = name.includes(kw) || desc.includes(kw);

    if (matchCat && matchKw) {
      item.style.display = 'flex';
      visible++;
    } else {
      item.style.display = 'none';
    }
  });

  menuEmpty.style.display = visible === 0 ? 'block' : 'none';
}

// ===== TAB FILTER =====
let activeFilter = 'semua';

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    filterMenu(activeFilter, searchInput.value);
  });
});

// ===== SIDEBAR FILTER =====
sidebarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    activeFilter = link.dataset.cat;

    // Sinkronkan tab button
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === activeFilter);
    });

    filterMenu(activeFilter, searchInput.value);
  });
});

// ===== SEARCH =====
searchInput.addEventListener('input', () => {
  filterMenu(activeFilter, searchInput.value);
});