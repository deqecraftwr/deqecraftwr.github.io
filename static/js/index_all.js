// 创建画布元素
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// 获取画布上下文
var ctx = canvas.getContext("2d");

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义一些喜庆的颜色
var colors = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#4B0082", "#EE82EE"];

// 定义一些喜庆的元素
var elements = [];

// 创建元素对象
function createElements() {
    for (var i = 0; i < 100; i++) {
        var element = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
        };
        elements.push(element);
    }
}

// 绘制元素
function drawElements() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = element.color;
        ctx.fill();
        ctx.closePath();
    }
}

// 更新元素位置
function updateElements() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.x += element.speedX;
        element.y += element.speedY;

        if (element.x < 0 || element.x > canvas.width) {
            element.speedX *= -1;
        }

        if (element.y < 0 || element.y > canvas.height) {
            element.speedY *= -1;
        }
    }
}

// 绘制元素
function drawElements() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 在动画正中间绘制"元旦快乐"
    ctx.font = "100px 楷体"; // 设置字体样式
    ctx.textAlign = "center"; // 水平居中对齐
    ctx.textBaseline = "middle"; // 垂直居中对齐
    ctx.fillStyle = "red"; // 设置文本颜色
    ctx.fillText("各位，元旦快乐！", canvas.width / 2, canvas.height / 2); // 在画布正中心绘制文本
    
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fillStyle = element.color;
        ctx.fill();
        ctx.closePath();
    }
}

// 动画循环
function loop() {
    drawElements();
    updateElements();
    requestAnimationFrame(loop);
}

// 初始化
function init() {
    createElements();
    loop();
}

// 调整画布大小
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// 开始绘制
init();
