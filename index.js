// 获取页面宽度和高度
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

// 创建蒲公英的数量
var numDandelions = 50;

// 创建蒲公英的函数
function createDandelion() {
    // 创建一个蒲公英元素
    var dandelion = document.createElement('div');
    dandelion.className = 'dandelion';

    // 设置蒲公英的随机位置
    var xPos = Math.random() * screenWidth;
    var yPos = Math.random() * screenHeight;
    dandelion.style.left = xPos + 'px';
    dandelion.style.top = yPos + 'px';

    // 将蒲公英添加到页面中
    document.body.appendChild(dandelion);

    // 设置蒲公英的飞行动画
    var animationDuration = Math.random() * 8 + 4; // 随机持续时间（4到12秒）
    dandelion.style.animationDuration = animationDuration + 's';

    // 在动画结束后移除蒲公英元素
    dandelion.addEventListener('animationend', function() {
        dandelion.parentNode.removeChild(dandelion);
    });
}

// 初始化蒲公英
function initDandelions() {
    for (var i = 0; i < numDandelions; i++) {
        createDandelion();
    }
}

// 当页面加载完成时初始化蒲公英效果
window.onload = function() {
    initDandelions();
};
