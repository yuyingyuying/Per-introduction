import '../less/ComponentPie.less';
import ComponentBaseFactory from './ComponentBase.js';
let ComponentPieFactory = (config) => {
    let Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPie');
    
    let [w,h] = [config.width,config.height];
    let oBgCvs = $('<canvas/>').get(0);
    [ oBgCvs.width,oBgCvs.height] = [w,h];
     Component.append(oBgCvs);
    let ctx = oBgCvs.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = '#eee';
    let r = w/2;
    ctx.arc(r,r,r,0,2*Math.PI);
    ctx.fill();
    
    let oDataCvs = $('<canvas/>').get(0);
    [oDataCvs.width,oDataCvs.height] = [w,h];
    ctx = oDataCvs.getContext('2d');
     Component.append(oDataCvs);
     
    let data = config.data;
    let sAngle = Math.PI * 1.5;
    let eAngle = 0;
    let aAngle = Math.PI *2;
   
    data.forEach((ele,index) => {
        // 终止角度 起始角度+0.3*满角
        eAngle = sAngle + ele[1] * aAngle;
        ctx.beginPath();
        ctx.fillStyle = ele[2];
        ctx.moveTo(r,r);
        ctx.arc(r,r,r,sAngle,eAngle);
        ctx.fill();
        
        let oTextR = config.width/2/2;
        
        let x =Math.abs( oTextR * Math.cos(aAngle-(sAngle+(eAngle-sAngle)/2)) );
        let y = Math.abs ( oTextR * Math.sin(aAngle-(sAngle+(eAngle-sAngle)/2)) );
        
        
        // 如果文本在圆的右侧，x+半径
        
        let trueAngle = sAngle+(eAngle-sAngle)/2;
        let oText = $('<div class="text"/>');
        oText.text(ele[0]);
        oText.css('position','absolute');
        if(trueAngle >= 1.5*Math.PI && trueAngle < 2.5*Math.PI){
            oText.css('left',oTextR +x);
        }else if(trueAngle >= 2.5*Math.PI && trueAngle < 3.5*Math.PI){
            oText.css('right',oTextR+x);
        }
        // 如果文本在圆的上边部分，y+半径
        
        if( (trueAngle >= 1.5*Math.PI && trueAngle <2*Math.PI) || (trueAngle >= 3*Math.PI && trueAngle <= 3.5*Math.PI) ){
            oText.css('bottom',oTextR + y);
        }else if( trueAngle > 2*Math.PI && trueAngle < 3*Math.PI){
             oText.css('top',oTextR + y);
        }
        
        Component.append(oText);
        
        sAngle = eAngle;
    })
    
    let oMaskCvs = $('<canvas/>').get(0);
    [oMaskCvs.width,oMaskCvs.height] = [w,h];
    ctx=oMaskCvs.getContext('2d');
    sAngle = 1.5*Math.PI;
    
    Component.append(oMaskCvs);
    
    function draw(per){
        ctx.clearRect(0,0,w,h);
        ctx.beginPath();
        ctx.fillStyle='green';
        ctx.moveTo(w/2,h/2);
        ctx.arc(r,r,r,sAngle,sAngle -aAngle * per ,1);
        ctx.fill();
        
    }
    draw();
    
    Component.on('cpLoad', () => {
        setTimeout(()=> {
            let s = 1;
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    s -= 0.01;
                    draw(s);
                }, i * 30);
            }
        }, config.delay + 200 || 200);
    })
    return Component;    
}
export default ComponentPieFactory;