// public/js/delete-modal.js
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("confirmDeleteModal");
  const contactNameSpan = document.getElementById("contactName");
  const deleteForm = document.getElementById("deleteContactForm");

  modal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const contactId = button.getAttribute("data-contact-id");
    const contactName = button.getAttribute("data-contact-name");

    // Atualiza o nome no texto
    contactNameSpan.textContent = contactName;

    // Atualiza o action do formulário
    deleteForm.setAttribute("action", `/contacts/delete/${contactId}`);
  });
});
