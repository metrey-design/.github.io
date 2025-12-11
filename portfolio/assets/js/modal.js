// modal.js - open/close modal for any element with [data-open-modal]
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.modal-close');

  function openModal(e){
    if(e) e.preventDefault();
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(e){
    if(e) e.preventDefault && e.preventDefault();
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }

  // openers: any element with data-open-modal attribute
  document.querySelectorAll('[data-open-modal]').forEach(btn => btn.addEventListener('click', openModal));
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(backdrop) backdrop.addEventListener('click', closeModal);
});
