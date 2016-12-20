import '../less/ComponentPolyLine.less';
import ComponentBaseFactory from './ComponentBase.js';

let ComponentPolyLineFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPolyLine');

    // 
    var oCanvas = $('<canvas/>').get(0);
    console.log(oCanvas);
    var ctx = oCanvas.getContext('2d');
    oCanvas.width = config.width;
    oCanvas.height = config.height;
    Component.append(oCanvas);
    var oCanvasW = config.width;
    var oCanvasH = config.height;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle ='#F00';

    var step = 10;
    // 水平线 10个格 11条线
    for (let i = 0; i < step + 1; i++) {
        var y = (oCanvasH / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(oCanvasW, y);
    }
    ctx.stroke();

    // 垂直线
    for (let i = 0; i < config.data.length + 2; i++) {
        var x = (oCanvasW / (config.data.length + 1) ) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, oCanvasH);
    }
    ctx.stroke();

    var data = config.data;
    var textW = (config.width / 2) / (config.data.length + 1);
    data.forEach((ele, index) => {
        var x = textW * (index + 1)
        var oText = $('<div class="text"/>');
        oText.text(ele[0]);
        oText.css({width: textW, position: 'absolute', left: x - textW / 2, bottom: -20, textAlign: 'center'});
        Component.append(oText)
    });



    let oCanvasTop = $('<canvas/>').get(0);
    let ctxTop = oCanvasTop.getContext('2d');
    oCanvasTop.width = config.width;
    oCanvasTop.height = config.height;
    Component.append(oCanvasTop);




    
    function draw (per) {
        ctxTop.clearRect(0, 0, config.width, config.height);
        ctxTop.beginPath();
        let colW = config.width / (config.data.length + 1);
        // 画圆
        data.forEach((ele, index) => {
            let x = colW * (index + 1);
            let y = config.height * (1 - ele[1] * per);
            ctxTop.moveTo(x, y);
            ctxTop.arc(x, y, 5, 0, Math.PI * 2);
        }) 
        ctxTop.stroke();
        // 连线
        ctxTop.moveTo(colW, config.height* (1 - config.data[0][1] * per));
        data.forEach((ele, index) => {
            let x1 = colW * (index + 1);
            let y1 = config.height * (1 - ele[1] * per);
            ctxTop.lineTo(x1, y1);
            if (index == config.data.length - 1) {
                ctxTop.stroke();
                ctxTop.lineTo(x1, config.height);
                ctxTop.lineTo(colW, config.height);
                ctxTop.fillStyle = 'rgba(255, 0, 0, 0.37)';
                ctxTop.fill();
            }
        });
        // 写文本
        data.forEach((ele, index)=> {
            let x = colW * (index + 1);
            let y = config.height * (1 - ele[1] * per);
            ctxTop.moveTo(x, y);
            ctxTop.font = '40px Arial';
            ctxTop.fillStyle = ele[2];
            ctxTop.fillText(ele[1] * 100 + '%', x - 20, y - 20);
        })
    }


    Component.on('cpLoad', () => {
        let s = 0;
        for (let i = 0; i < 100; i++) {
            setTimeout(function () {
                s += 0.01;
                draw(s);
            }, 10 * i);
            // 0 10 20 1000
        }
    });
    Component.on('cpLeave', () => {
        let s = 1;
        for (let i = 0; i < 100; i++) {
            setTimeout(function () {
                s -= 0.01;
                draw(s);
            }, 10 * i);
            // 0 10 20 1000
        }
    });













    
    



    return Component;
}
export default ComponentPolyLineFactory;