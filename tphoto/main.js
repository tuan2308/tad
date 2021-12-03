$(document).ready(function(){if(window.location.hostname==tmbq){canvas=new fabric.Canvas('canvas');canvas.renderAll.bind(canvas);var demoanhurl=$(".demoanhurl").hide();var b1=$(".b1");var b2=$(".b2").hide();var b02=$(".b02").hide();var b3=$(".b3").hide();var b13=$(".b13");var b23=$(".b23").hide();var b4=$(".b4").hide();canvas.selection=false;var fonts=["Roboto","VT323","Pacifico","Amatic SC","Lobster"];fabric.Object.prototype.customiseCornerIcons({settings:{borderColor:'white',cornerSize:10,cornerShape:'circle',cornerBackgroundColor:'white',cornerPadding:20}});var blendmode=[{mode:"source-over",name:"Hoà trộn"},{mode:"screen",name:"Bộ lọc"},{mode:"multiply",name:"Nhiều lớp"},{mode:"overlay",name:"Xếp chồng"},]
canvas.on({'object:selected':function(){obsel=canvas.getActiveObject()
$("#blendmode").val(obsel.globalCompositeOperation);b2.hide();b3.show();$("#opacity").val(obsel.opacity);},'selection:cleared':function(){b2.show();b3.hide();b13.show();b23.hide();}});$("#select").click(function(){canvas.isDrawingMode=false;});$("#draw").click(function(){canvas.isDrawingMode=true;});$("#delete").click(function(){canvas.isDrawingMode=false;deleteObjects();});$("#ok").click(function(){canvas.deactivateAll();});function deleteObjects(){var activeObject=canvas.getActiveObject();canvas.remove(activeObject);}
$("#tad-upnen").on("input",function(e){b2.show();b02.show();b1.hide();$("html").addClass("overf");var file=e.target.files[0];var reader=new FileReader();reader.onload=function(f){var data=f.target.result;fabric.Image.fromURL(data,function(img){var max=500;if(img.width<=max||img.height<=max){canvas.setDimensions({width:img.width,height:img.height});}else{if(img.width>=img.height){if(img.width>max){let scale=max/img.width;img.set({scaleX:scale,scaleY:scale});canvas.setDimensions({width:max,height:img.height*scale});}}
if(img.width<img.height){if(img.height>max){let scale=max/img.height;img.set({scaleX:scale,scaleY:scale});canvas.setDimensions({width:img.width*scale,height:max});}}}
canvas.setBackgroundImage(img);canvas.renderAll();});};reader.readAsDataURL(file);$("#tad-upnen").val("")});var tyle;function nuttim(){demoanhurl.show();var inputurl=$("#tad-nhapurl input").val();if(inputurl==""){alert("Url ảnh không được để trống");$("#tad-nhapurl input").focus();return false}
window.location.hash=inputurl;$("#tad-urlimg").html("<img  src='"+inputurl+"' class='img-thumbnail w-100' id='imgurl' alt='Tạo ảnh đẹp'/>");cvs=document.createElement("canvas");ctx=cvs.getContext('2d');var img=new Image();img.onload=function(){cvs.width=this.width;cvs.height=this.height;tyle=cvs.height/cvs.width
ctx.drawImage(this,0,0,this.width,this.height);cvs.toBlob(function(blob){link=URL.createObjectURL(blob);urlimg=link},'image/png');};img.src=inputurl;img.crossOrigin="Anonymous";}
$("#tad-nhapurl button").click(function(){nuttim();});$("#chenchutad").click(function(){var max=500;canvas.setDimensions({width:max,height:max*tyle});canvas.setBackgroundImage(urlimg,canvas.renderAll.bind(canvas),{width:max,height:max*tyle,});b2.show();b02.show();b1.hide();});var urlimg=decodeURIComponent(window.location.hash).substring(1);if(urlimg!=""){$("#tad-nhapurl input").val(urlimg);$("#tad-urlimg").html("<img src='"+urlimg+"' class='img-thumbnail w-100' id='imgurl' alt='Tạo ảnh đẹp'/>");nuttim();}
$("#tad-chenchu").click(function(){$("#inputtext").val("");addText.show();okText.hide();});var addText=$("#addText");var okText=$("#okText").hide();$("#addText").click(function(){var tw=canvas.width/2;var nd=$("#inputtext").val();if(nd.length==0){alert("Vui lòng nhập chữ");$("#inputtext").focus();return false}
var textbox=new fabric.IText(nd,{width:tw,left:canvas.width/2-tw/2,top:canvas.height/2,fontSize:tw/5,textAlign:'center',fontFamily:fontht,fill:mauchuht,shadow:new fabric.Shadow({color:"rgba(0, 0, 0, 0.2)",blur:2,offsetX:2,offsetY:2})});canvas.add(textbox).setActiveObject(textbox);b4.show();});$("#okText").click(function(){if($("#inputtext").val().length==0){alert("Vui lòng nhập chữ");$("#inputtext").focus();return false}
canvas.getActiveObject().set("text",$("#inputtext").val());canvas.getActiveObject().set("fontFamily",fontht);canvas.getActiveObject().set("fill",mauchuht);canvas.renderAll();canvas.deactivateAll();});canvas.on({'text:selection:changed':function(){addText.hide();okText.show();textsel=canvas.getActiveObject();$('#chenchu').modal('show');$("#inputtext").val(textsel.text)}});var fontht="Arial";var mauchuht="#ffffff"
fonts.unshift('Arial');var select=document.getElementById("font-family");fonts.forEach(function(font){var option=document.createElement('option');option.innerHTML=font;option.value=font;select.appendChild(option);});document.getElementById('font-family').onchange=function(){if(this.value!=='Arial'){$("#inputtext").attr("style","font-family:"+this.value);loadAndUse(this.value);canvas.renderAll();}else{$("#inputtext").attr("style","font-family:"+this.value);fontht=this.value;canvas.renderAll();}};function loadAndUse(font){var myfont=new FontFaceObserver(font)
myfont.load()
fontht=font;canvas.renderAll();}
$("#mauchu").on("change",function(){mauchuht=$(this).val();});$("#tad-themanh").on("input",function(e){b4.show();var file=e.target.files[0];var reader=new FileReader();reader.onload=function(f){var data=f.target.result;fabric.Image.fromURL(data,function(img){var max=500;if(img.width<max||img.height<max){img.set({left:canvas.width/2-img.width*0.5/2,top:canvas.height/2-img.height*0.5/2}).scale(0.5);}else{if(img.width>img.height){if(img.width>max){let scale=(max/img.height)*0.5;img.set({left:canvas.width/2-img.width*scale/2,top:canvas.height/2-img.height*scale/2}).scale(scale);}}
if(img.width<img.height){if(img.height>max){let scale=(max/img.height)*0.5;img.set({left:canvas.width/2-img.width*scale/2,top:canvas.height/2-img.height*scale/2}).scale(scale);}}}
canvas.add(img).renderAll().setActiveObject(img);;});};reader.readAsDataURL(file);$("#tad-themanh").val("");});var select=document.getElementById("blendmode");blendmode.forEach(function(blendmode){var option=document.createElement('option');option.innerHTML=blendmode.name;option.value=blendmode.mode;select.appendChild(option);});document.getElementById('blendmode').onchange=function(){canvas.getActiveObject().set("globalCompositeOperation",this.value);canvas.renderAll();};$("#opacity").on("input",function(){canvas.getActiveObject().set("opacity",$(this).val());canvas.renderAll();});$("#showopacity").click(function(){b13.hide();b23.show();});$("#qlopacity").click(function(){b13.show();b23.hide();});let currentScale=null
let currentScaleX=null
let currentScaleY=null
let currentRotation=null
let adjustScale=1
let adjustScaleX=1
let adjustScaleY=1
let adjustRotation=0
let hammer=new Hammer.Manager(canvas.upperCanvasEl);let rotate=new Hammer.Rotate();let pinch=new Hammer.Pinch();hammer.add([pinch,rotate])
hammer.get('rotate').set({enable:true})
hammer.get('pinch').set({enable:true})
hammer.on("pinchstart rotatestart",(e)=>{console.log("start");adjustRotation-=e.rotation
if(canvas.getActiveObject()){var object=canvas.getActiveObject()
adjustScaleX=object.scaleX
adjustScaleY=object.scaleY}})
hammer.on("pinchmove rotatemove",(e)=>{currentRotation=adjustRotation+e.rotation
currentScale=adjustScale*e.scale
if(canvas.getActiveObject()){var object=canvas.getActiveObject()
currentScaleX=adjustScaleX*e.scale
currentScaleY=adjustScaleY*e.scale
if(!(currentScaleX>object.minScaleLimit&&currentScaleY>object.minScaleLimit)){currentScaleX=object.scaleX
currentScaleY=object.scaleY}
object.set({lockMovementX:true,lockMovementY:true})
object.set('scaleX',currentScaleX);object.set('scaleY',currentScaleY);object.rotate(currentRotation)
object.setCoords()
canvas.renderAll()}})
hammer.on("pinchend rotateend",(e)=>{adjustScale=currentScale;adjustRotation=currentRotation;adjustScaleX=currentScaleX;adjustScaleY=currentScaleY;if(canvas.getActiveObject()){var object=canvas.getActiveObject()
setTimeout(function(){object.set({lockMovementX:false,lockMovementY:false})},300)}
canvas.renderAll()})
function dongbang(){b1.show();b2.hide();b02.hide();$("html").removeClass("overf");}
$("#backb1").click(function(){$('#dongtad').modal('show');});$('#dongtad .co').click(function(){canvas.clear();dongbang();});$('#dongtad .khong').click(function(){dongbang();});$("#backb2").click(function(){b2.show();b3.hide();});var tenanh="Tạo ảnh đẹp";var dinhdang="jpg";var kichco=2;$(".dinhdang input").click(function(){dinhdang=$("input:checked").val()});$(".kichco").change(function(){kichco=$(this).val()});$(".tenanh").on("input",function(){tenanh=$(".tenanh").val()});$("#tad-luuanh").click(function(){canvas.deactivateAll();var a=canvas.width;var b=canvas.height;canvas.setZoom(kichco);canvas.setDimensions({width:a*kichco,height:b*kichco});canvas.renderAll();$("#canvas").get(0).toBlob(function(c){saveAs(c,tenanh+".png")});canvas.setZoom(1);canvas.setDimensions({width:a,height:b})});}});