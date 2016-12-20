import './jqUI.js';
import './jqFP.js';
// 先引入ui

// var ManageObj = require('./ManagePageComponent.js');
import ManageObj from'./ManagePageComponent.js';

ManageObj
    .init('.wrapper')
           .addPage('index')
                .addComponent({
                    width:100,
                    height:400,
                    text:"个人简介",
                    css:{
                        position:'absolute',
                        top:-10,
                        opacity:0,
                        fontSize:80,
                        fontWeight:800
                    },
                    animateIn:{
                        top:30,
                        left:25,
                        opacity:1
                    },
                    animateOut:{
                        top:-10,
                        opacity:0
                    },
                    delay:200
                    
                })
              .addComponent({
                     name: 'shake',
                    width:400,
                    height:380,
                    center:true,
                    css:{
                        position:'absolute',
                        top:180,
                        left:0,
                        opacity:0,
                        width:400,
                        height:380,
                        backgroundImage:'url(../src/img/bas.png)'
                    },
                    animateIn:{
                        left:'50%',
                        opacity:1
                    },
                    animateOut:{
                       left:0,
                        opacity:0
                    },
                    delay:800
                    
                })          
               .addComponent({
                    width:180,
                    height:180,
                    text:"于颖",
                    css:{
                        position:'absolute',
                        bottom:-10,
                        left:-20,
                        opacity:0,
                        fontSize:40,
                        fontWeight:600,
                        color:"red",
                         width:180,
                        height:180
                    },
                    animateIn:{
                        left:20,
                        bottom:0,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       left:-20,
                        opacity:0
                    },
                    delay:1200
                    
                })             
             .addComponent({
                    width:230,
                    height:115,
                    text:"前端开发工程师",
                    css:{
                        position:'absolute',
                        bottom:-10,
                        right:-20,
                        opacity:0,
                        color:"red",
                        fontSize:30,
                        fontWeight:500,
                         width:230,
                        height:115
                       
                    },
                    animateIn:{
                        right:0,
                        bottom:0,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       right:-20,
                        opacity:0
                    },
                    delay:1600
                    
                }) 
                
      // 第二页          
           .addPage()
               .addComponent({
                    width:260,
                    height:62,
                    text:"基本介绍",
                    css:{
                        fontSize:30,
                        fontWeight:40,
                         width:250,
                        height:62,
                        textAlign:'center',
                        top:0,
                       position:'absolute',
                        opacity:0,
                        backgroundImage:'url(../src/img/b.png)'
                    },
                    animateIn:{
                        top:70,
                        opacity:1
                    },
                    animateOut:{
                       top:0,
                       opacity:0
                    },
                    delay:200
                    
                })
               .addComponent({
                        width:500,
                        height:50,
                        text:'让别人因为我的存在而感到幸福！',
                        center:'true',
               
                    css:{
                        position:'absolute',
                        top:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'24px',
                        color:'orange',
                        opacity:0
                    },
                    animateIn:{
                        top:150,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:600
                    
                })
                .addComponent({
                    width:522,
                    height:336,
                    text:'地道的北京妞儿 ,纯正的95后，哈尔滨理工大学信息管理与信息系统的一名毕业生，自学前端相关知识一年时间，热爱编程，喜欢与人打交道，活泼开朗热情好动，努力做个有价值的人~',
                    center:true,
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        padding:'10px 15px 10px 15px',
                        textAlign:'justify',
                        fontSize:'18px',
                        fontWeight:'900',
                        lineHeight:'25px',
                        backgroundImage:'url(../src/img/dialog.png)'
                    },
                    animateIn:{
                        top:240,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:1000
                    
                })
               .addComponent({
                    width:516,
                    height:306,
                    center:true,
                    css:{
                        position:'absolute',
                        bottom:-10,
                        opacity:0,
                        backgroundImage:'url(../src/img/people.png)'
                    },
                    animateIn:{
                        bottom:20,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                        opacity:0
                    },
                    delay:1400
                    
                })
                
     // 第三页
           .addPage()
               .addComponent({
                    width:260,
                    height:62,
                    text:"技能掌握",
                    css:{
                        position:'absolute',
                        top:0,
                        left:0,
                        opacity:0,
                        width:250,
                        height:62,
                        fontSize:30,
                        fontWeight:40,
                        textAlign:'center',
                        backgroundImage:'url(../src/img/b.png)'
                    },
                    animateIn:{
                        top:60,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:200
                    
                })
              .addComponent({
                    width:516,
                    height:306,
                    center:true,
                    text:'技能掌握柱状图',
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'26px',
                        color:'red'
                    },
                    animateIn:{
                        top:200,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:600
                    
                })
              .addComponent({
                  type:'Bar',
                    width:500,
                    height:300,
                    center:true,
                    css:{
                        position:'absolute',
                        bottom:0,
                        opacity:0,
                        width:500,
                    },
                    animateIn:{
                       bottom:200,
                        opacity:1
                    },
                    animateOut:{
                        bottom:0,
                        opacity:0
                    },
                     data: [
                        ['html,css', 0.8, '#ac6678'],
                        ['javascript', 0.7, '#9898aa'],
                        ['h5,cs3', 0.6, '#127aa9'],
                        ['react', 0.4, '#45aac1'],
                        ['redux node', 0.2, '#cb1233']

                    ],
                    delay:1000
                    
                })
       
    //  第四页         
             .addPage()
               .addComponent({
                     width:260,
                    height:62,
                    text:"技能get",
                    css:{
                        position:'absolute',
                        top:0,
                        left:0,
                        opacity:0,
                         width:250,
                        height:62,
                        fontSize:30,
                        fontWeight:40,
                        textAlign:'center',
                        backgroundImage:'url(../src/img/b.png)'
                    },
                    animateIn:{
                        top:60,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:200
                    
                })
              .addComponent({
                    width:516,
                    height:306,
                    center:true,
                    text:'我所读过的技能书籍',
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'26px',
                        color:'red'
                    },
                    animateIn:{
                        top:350,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:600
                    
                })
              .addComponent({
                    width:150,
                    height:200,
                    center:true,
                    css:{
                        position:'absolute',
                        top:180,
                        left:0,
                        opacity:0,
                        width:150,
                        height:200,
                        backgroundImage:'url(../src/img/ql.gif)'
                    },
                    animateIn:{
                        left:'60%',
                        top:125,
                        opacity:1
                    },
                    animateOut:{
                       left:0,
                        opacity:0
                    },
                    delay:800
                    
                })  
                .addComponent({
                    width:150,
                    height:200,
                    center:true,
                    css:{
                        position:'absolute',
                        bottom:-10,
                        left:74,
                        opacity:0,
                        width:150,
                        height:200,
                        backgroundImage:'url(../src/img/c.jpg)'
                    },
                    animateIn:{
                        right:'60%',
                        top:125,
                        opacity:1
                    },
                    animateOut:{
                       right:0,
                        opacity:0
                    },
                    delay:1000
                    
                })    
                .addComponent({
                    width:150,
                    height:200,
                    center:true,
                    css:{
                        position:'absolute',
                        top:180,
                        left:50,
                        opacity:0,
                        width:150,
                        height:200,
                        backgroundImage:'url(../src/img/g.jpg)'
                    },
                    animateIn:{
                        left:20,
                        top:400,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       left:-20,
                        opacity:0
                    },
                    delay:800
                    
                })    
                .addComponent({
                     width:180,
                    height:200,
                    css:{
                        position:'absolute',
                        bottom:-10,
                        right:-20,
                        opacity:0,
                          width:180,
                         height:200,
                         backgroundImage:'url(../src/img/m.jpg)'
                       
                    },
                    animateIn:{
                        right:-25,
                        top:400,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       right:-20,
                        opacity:0
                    },
                    delay:1600
                    
                })   
                 .addComponent({
                     width:150,
                    height:200,
                    
                    css:{
                        position:'absolute',
                        bottom:-10,
                        right:-20,
                        opacity:0,
                          width:150,
                         height:200,
                         backgroundImage:'url(../src/img/s.jpg)'
                       
                    },
                    animateIn:{
                        right:120,
                        bottom:40,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       right:-20,
                        opacity:0
                    },
                    delay:1600
                    
                })         
      
      
      
     //  第五页   
      .addPage()
               .addComponent({
                     width:260,
                    height:62,
                    text:"证书",
                    css:{
                        position:'absolute',
                        top:0,
                        left:0,
                        opacity:0,
                         width:250,
                        height:62,
                        fontSize:30,
                        fontWeight:40,
                        textAlign:'center',
                        backgroundImage:'url(../src/img/b.png)'
                    },
                    animateIn:{
                        top:60,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:200
                    
                })
              .addComponent({
                    width:516,
                    height:306,
                    center:true,
                    text:'获得的奖项',
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'26px',
                        color:'red'
                    },
                    animateIn:{
                        top:300,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:600
                    
                })
              .addComponent({
                    width:185,
                    height:140,
                    center:true,
                    css:{
                        position:'absolute',
                        top:180,
                        left:0,
                        opacity:0,
                         width:185,
                         height:140,
                        backgroundImage:'url(../src/img/z3.jpg)'
                    },
                    animateIn:{
                        left:'63%',
                        top:125,
                        opacity:1
                    },
                    animateOut:{
                       left:0,
                        opacity:0
                    },
                    delay:800
                    
                })  
                .addComponent({
                    width:185,
                    height:140,
                    center:true,
                    css:{
                        position:'absolute',
                        bottom:-10,
                        left:35,
                        opacity:0,
                        width:185,
                        height:140,
                        backgroundImage:'url(../src/img/z1.jpg)'
                    },
                    animateIn:{
                        right:'60%',
                        top:125,
                        opacity:1
                    },
                    animateOut:{
                       right:0,
                        opacity:0
                    },
                    delay:1000
                    
                })    
                .addComponent({
                    width:150,
                    height:200,
                    center:true,
                    css:{
                        position:'absolute',
                        top:180,
                        left:50,
                        opacity:0,
                        width:150,
                        height:200,
                        backgroundImage:'url(../src/img/z2.jpg)'
                    },
                    animateIn:{
                        left:20,
                        top:400,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       left:-20,
                        opacity:0
                    },
                    delay:800
                    
                })    
                .addComponent({
                     width:180,
                    height:200,
                    css:{
                        position:'absolute',
                        bottom:-10,
                        right:-20,
                        opacity:0,
                          width:180,
                         height:200,
                         backgroundImage:'url(../src/img/z4.jpg)'
                       
                    },
                    animateIn:{
                        right:-25,
                        top:400,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       right:-20,
                        opacity:0
                    },
                    delay:1600
                    
                })   
                 .addComponent({
                     width:190,
                    height:200,
                    
                    css:{
                        position:'absolute',
                        bottom:-10,
                        right:-20,
                        opacity:0,
                          width:190,
                         height:200,
                         backgroundImage:'url(../src/img/z5.jpg)'
                       
                    },
                    animateIn:{
                        right:100,
                        bottom:40,
                        opacity:1
                    },
                    animateOut:{
                        bottom:-10,
                       right:-20,
                        opacity:0
                    },
                    delay:1600
                    
                })         
     
    //  第六页：
           
             .addPage()
                .addComponent({
                     width:260,
                    height:62,
                    text:"兴趣爱好",
                    css:{
                        position:'absolute',
                        top:0,
                        left:0,
                        opacity:0,
                         width:250,
                        height:62,
                        fontSize:30,
                        fontWeight:40,
                        textAlign:'center',
                        backgroundImage:'url(../src/img/b.png)'
                    },
                    animateIn:{
                        top:60,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:200
                    
                })
              .addComponent({
                    width:516,
                    height:306,
                    center:true,
                    text:'爱好分布饼图',
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'26px',
                        color:'red'
                    },
                    animateIn:{
                        top:200,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:600
                    
                })
              .addComponent({
                  type:'Pie',
                    width:500,
                    height:500,
                    center:true,
                    css:{
                        position:'absolute',
                        bottom:0,
                        opacity:0,
                    },
                    animateIn:{
                       bottom:100,
                        opacity:1
                    },
                    animateOut:{
                        bottom:0,
                        opacity:0
                    },
                     data: [
                        ['reading', 0.4, '#ac6678'],
                        ['basketball', 0.2, '#9898aa'],
                        ['speech', 0.2, '#127aa9'],
                        ['singing', 0.1, '#45aac1'],
                        ['movie', 0.1, '#cb1233']
                    ],
                    delay:1000
                    
                })   
                
                
    //   第六页：
          .addPage()
            .addComponent({
                name: 'back',
                width:48,
                height:26,
                center:true,
                css:{
                    position:'absolute',
                    top:0,
                    opacity:0,
                    backgroundImage:'url(../src/img/back.png)'
                },
                animateIn:{
                    top:30,
                    opacity:1
                },
                animateOut:{
                    top:0,
                    opacity:0
                },
                
                 event:{
                  click:() =>{
                     ManageObj.oContainer.fullpage.moveTo(1);
                  }
                  
              },
                delay:200
                
            }) 
          .addComponent({
                width:128,
                height:120,
                css:{
                    position:'absolute',
                    top:100,
                    right:50,
                    opacity:0,
                    backgroundImage:'url(../src/img/share.png)'
                },
                animateIn:{
                    top:0,
                    right:0,
                    opacity:1
                },
                animateOut:{
                    ltop:100,
                    right:0,
                    opacity:0
                },
                delay:600
                
            }) 
          .addComponent({
                        width:500,
                        height:50,
                        text:'电话：15910651369',
                        center:'true',
               
                    css:{
                        position:'absolute',
                        top:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        fontWeight:900,
                        fontSize:'24px',
                        color:'orange',
                        opacity:0
                    },
                    animateIn:{
                        top:150,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:1000
                    
                })
         .addComponent({
                        width:700,
                        height:50,
                        text:'邮箱：15910651369@163.com',
                        center:'true',
               
                    css:{
                        position:'absolute',
                        top:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        width:700,
                        fontWeight:900,
                        fontSize:'24px',
                        color:'orange',
                        opacity:0
                    },
                    animateIn:{
                        top:220,
                        left:0,
                        opacity:1
                        
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:1200
                    
                })
                   .addComponent({
                        width:700,
                        height:200,
                        text:'谢谢观看',
                        center:'true',
               
                    css:{
                        position:'absolute',
                        top:0,
                        lineHeight:'30px',
                        textAlign:'center',
                        width:700,
                        fontWeight:1500,   
                        height:200,
                        fontSize:'30px',
                        color:'orange',
                        opacity:0
                        
                    },
                    animateIn:{
                        top:300,
                         left:0,
                        opacity:1
                    },
                    animateOut:{
                        top:0,
                        opacity:0
                    },
                    delay:1600
                    
                })
            

    .load();







