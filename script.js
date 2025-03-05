// 动态添加内容示例
document.addEventListener('DOMContentLoaded', function () {
    const hobbiesList = document.querySelector('.hobbies ul');

    // 动态添加一个爱好
    const newHobby = document.createElement('li');
    newHobby.textContent = '学习新技术';
    hobbiesList.appendChild(newHobby);

    // 添加交互效果：点击爱好时改变背景色
    hobbiesList.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            item.style.backgroundColor = '#cce5ff';
        });
    });
});
