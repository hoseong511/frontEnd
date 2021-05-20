const focusInput = document.querySelector('#exampleInputEmail1');
const inputModal = document.querySelector('#exampleModal');

inputModal.addEventListener('shown.bs.modal', () => {
  focusInput.focus();
});


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
