/* Новые элементы должны добавляться в список по нажатию на Enter */

const input = document.querySelector('#input');
const items = document.querySelector('#items');

input.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
         const messageText = input.value;

    /* Пустые элементы не должны добавляться */

    const newMessage = document.createElement('div');
    newMessage.classList.add('items');
    newMessage.textContent = messageText;

    if(messageText != '') {
        items.append(newMessage);
    };

    /* Если кликнуть на элемент списка, он зачеркивается */
    /* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

    newMessage.addEventListener('click', function() {
                newMessage.classList.toggle('done');
        });

        /* Очищать input после добавления нового элемента в список */

        input.value = '';

    }
   
});








