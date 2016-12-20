import '../less/ComponentBase.less';
let ComponentBaseFactory = (config) => {
    let Component = $('<div class="ComponentBase"/>');
    //随机生成不同的id，将生成的小数变成字符串，将小数点变成下划线
     let Id = (Math.random() + '').replace('.', '_');
    Component.attr('id', Id);
    
//    根据config定制化你的组件:
// 移动端较小，除以2，符合pc端开发习惯
    config.width && Component.css('width', config.width / 2);
    config.height && Component.css('height', config.height / 2);
    config.text && Component.text(config.text);
    config.center && Component.css({left: '50%', marginLeft: -(config.width / 2 / 2)});
    config.css && Component.css(config.css);
    config.name && Component.css(config.name); 
    // config.click && Component.on('click',config.click);
// 注册事件
    for(var eventType in config.event){
        Component.on(eventType,config.event[eventType]);
    }
//   看定制过程中是否有离场动画：
    Component.on('cpLeave', (e) => {
        setTimeout(()=> {
            console.log('cpLeave')
            Component.removeClass('loadComponent');
            Component.addClass('leaveComponent');
            config.animateOut && Component.animate( config.animateOut );
        }, config.delay || 0)
    });
    Component.on('cpLoad', (e) => {
        setTimeout(() => {
            Component.removeClass('leaveComponent');
            Component.addClass('loadComponent');
            config.animateIn && Component.animate( config.animateIn );
        }, config.delay || 0);   
    });
    return Component;
};
export default ComponentBaseFactory;



// 基础组件可以根据配置文件决定其样式，还可以自定义事件;高级组件在基础组建的功能上再添加一些新的功能；

// import ComonentBaseFactiry from '';
// let superComponentFactory = (config) =>{
//     let Component = ComponentBaseFactory(config);
    
//     //
// }