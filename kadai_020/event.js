const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');
    btn.textContent = 'Clicked!';
});
