export function scrollToTop() {
  if (!document) return;
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  });
}
