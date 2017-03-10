const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const rect = this.getBoundingClientRect();
  const offsetTop = rect.top + window.scrollY;
  highlight.style.width = `${rect.width}px`;
  highlight.style.height = `${rect.height}px`;
  highlight.style.transform = `translate(${rect.left}px, ${offsetTop}px)`;
}

triggers.forEach((a) => {
  a.addEventListener('mouseenter', highlightLink);
});
