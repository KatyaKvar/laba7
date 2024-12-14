const blocksContainer = document.getElementById('blocksContainer');
const createBlockButton = document.getElementById('createBlock');

const images = new Map([
    ['image1.jpg', 'resources/image1.jpg'],
    ['image2.jpg', 'resources/image2.jpg'],
    ['image3.jpg', 'resources/image3.jpg'],
    ['image4.jpg', 'resources/image4.jpg'],
    ['image5.jpg', 'resources/image5.jpg']
]);

createBlockButton.addEventListener('click', () => {
    const size = document.getElementById('blockSize').value;
    const image = document.getElementById('blockImage').value;
    const text = document.getElementById('blockText').value;
    const x = document.getElementById('blockX').value;
    const y = document.getElementById('blockY').value;

    createBlock(size, image, text, x, y);
});

const createBlock = (size, image, text, x, y) => {
    const block = document.createElement('div');
    block.className = 'block';
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.left = `${x}px`;
    block.style.top = `${y}px`;

    const img = document.createElement('img');
    img.src = images.get(image);
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    block.appendChild(img);
    block.appendChild(paragraph);
    blocksContainer.appendChild(block);

    // Привязка для изменения содержимого блока
    const updateBlockContent = (newImage, newText, newX, newY) => {
        img.src = images.get(newImage);
        paragraph.textContent = newText;
        block.style.left = `${newX}px`;
        block.style.top = `${newY}px`;
    };

    // Пример использования bind для изменения содержимого
    const changeContentButton = document.createElement('button');
    changeContentButton.textContent = 'Изменить содержимое';
    changeContentButton.onclick = function() {
        const newImage = prompt('Введите новое изображение (image1.jpg, image2.jpg и т.д.):');
        const newText = prompt('Введите новый текст:');
        const newX = prompt('Введите новую координату X:');
        const newY = prompt('Введите новую координату Y:');
        updateBlockContent(newImage, newText, newX, newY);
    };

    block.appendChild(changeContentButton);
}; 