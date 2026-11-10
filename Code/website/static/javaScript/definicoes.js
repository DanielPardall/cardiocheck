
document.addEventListener('DOMContentLoaded', function() {
    var logoutModal = document.getElementById('logout-modal');
    var deleteAccountModal = document.getElementById('delete-account-modal');

    // botões que abrem os modais
    var logoutBtn = document.querySelectorAll('.btn')[1];
    var deleteAccountBtn = document.querySelector('.btn.btn-eliminar');

    // botões dentro dos modais
    var confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    var confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    var cancelBtns = document.querySelectorAll('.cancelar-btn');

    // abrir modal de Encerrar Sessão
    logoutBtn.addEventListener('click', function() {
        logoutModal.style.display = 'flex';
    });

    // abrir modal de Eliminar Conta
    deleteAccountBtn.addEventListener('click', function() {
        deleteAccountModal.style.display = 'flex';
    });

    // Fechar modais
    Array.from(cancelBtns).forEach(btn => {
        btn.addEventListener('click', function() {
            logoutModal.style.display = 'none';
            deleteAccountModal.style.display = 'none';
        });
    });

    

    // Ação de confirmar Encerrar Sessão
    confirmLogoutBtn.addEventListener('click', function() {
        fetch('/logout', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => { 
            window.location.href = data.redirect;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });

    // Ação de confirmar Eliminar Conta
    confirmDeleteBtn.addEventListener('click', function() {
        fetch('/eliminar_conta', {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {  
            window.location.href = data.redirect;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });

});
