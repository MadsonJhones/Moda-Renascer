function showProductDetails(title, price, description, color, size, imageUrl) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalColor').textContent = color;
    document.getElementById('modalSize').textContent = size;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('productModal').style.display = 'block';
}

function closeProductDetails() {
    document.getElementById('productModal').style.display = 'none';
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}