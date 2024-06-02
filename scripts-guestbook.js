function submitEntry() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || message.trim() === '') {
        alert('이름과 메시지를 입력해주세요.');
        return;
    }

    const data = {
        name: name,
        message: message
    };

    let entries = [];
    const storedEntries = localStorage.getItem('guestbook_entries');
    if (storedEntries) {
        entries = JSON.parse(storedEntries);
    }
    entries.push(data);

    localStorage.setItem('guestbook_entries', JSON.stringify(entries));

    displayEntries(entries);
}

function displayEntries(entries) {
    const guestbookList = document.getElementById('guestbook-list');
    guestbookList.innerHTML = '';

    entries.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.message}`;

        // 삭제 버튼 추가
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            deleteEntry(index);
        };
        li.appendChild(deleteButton);

        guestbookList.appendChild(li);
    });
}

function deleteEntry(index) {
    let entries = [];
    const storedEntries = localStorage.getItem('guestbook_entries');
    if (storedEntries) {
        entries = JSON.parse(storedEntries);
    }
    entries.splice(index, 1); // 선택된 인덱스의 항목 삭제
    localStorage.setItem('guestbook_entries', JSON.stringify(entries));
    displayEntries(entries);
}

function fetchGuestbook() {
    const storedEntries = localStorage.getItem('guestbook_entries');
    if (storedEntries) {
        const entries = JSON.parse(storedEntries);
        displayEntries(entries);
    }
}

fetchGuestbook();
