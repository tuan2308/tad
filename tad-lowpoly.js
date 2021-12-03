if(window.location.hostname==tmbq){'use strict';(function(window){var getimg="";window.Polygonize=function(opts){if(!window.Delaunay){throw new Error('Polygonize\'s JavaScript requires Delaunay (https://github.com/ironwallaby/delaunay)');}
if(!opts.src){throw new Error('Image source is undefined');}
var defaults={cellSize:10};opts.cellSize=opts.cellSize||defaults.cellSize;var image=new Image();image.src=opts.src;var progress=0;image.onload=function(){var canvas=polygonize();if(opts.onSuccess){opts.onSuccess(canvas);}};image.onerror=function(){throw new Error('Invalid image source');};function randomIntFromInterval(min,max){return parseInt(Math.floor(Math.random()*(max-min+1)+min));}
function componentToHex(c){var hex=c.toString(16);if(hex.length===1){return'0'+hex;}
return hex;}
function rgbToHex(r,g,b){return'#'+componentToHex(r)+componentToHex(g)+componentToHex(b);}
function getPixel(x,y){var pixelData=image.canvas.getContext('2d').getImageData(x,y,1,1).data;if(pixelData[3]!==0){return rgbToHex(pixelData[0],pixelData[1],pixelData[2]);}}
function updateProgress(index,length){var currentProgress=parseInt((index+1)/length*100);if(currentProgress!==progress){progress=currentProgress;if(opts.progress){opts.progress(progress);}}}
function drawTriangle(triangle,color,ctx){ctx.beginPath();ctx.moveTo(triangle[0][0],triangle[0][1]);ctx.lineTo(triangle[1][0],triangle[1][1]);ctx.lineTo(triangle[2][0],triangle[2][1]);ctx.fillStyle=color;ctx.strokeStyle=color;ctx.fill();ctx.stroke();}
function polygonize(){var outputCanvas=document.createElement('canvas');var ctx=outputCanvas.getContext('2d');image.canvas=document.createElement('canvas');var points=[];var imageWidth=parseInt(image.width);var imageHeight=parseInt(image.height);image.canvas.width=imageWidth;image.canvas.height=imageHeight;image.canvas.getContext('2d').drawImage(image,0,0,imageWidth,imageHeight);outputCanvas.width=imageWidth;outputCanvas.height=imageHeight;var xCells=parseInt(imageWidth/opts.cellSize);var yCells=parseInt(imageHeight/opts.cellSize);var gridStart={x:-opts.cellSize,y:-opts.cellSize};var gridEnd={x:(xCells+1)*opts.cellSize,y:(yCells+1)*opts.cellSize};for(var x=gridStart.x;x<=gridEnd.x;x+=opts.cellSize){for(var y=gridStart.y;y<=gridEnd.y;y+=opts.cellSize){var point={x:randomIntFromInterval(x,x+opts.cellSize),y:randomIntFromInterval(y,y+opts.cellSize)};points.push([point.x,point.y]);}}
var indices=Delaunay.triangulate(points);for(var index=0;index<indices.length;index+=3){var triangle=[indices[index],indices[index+1],indices[index+2]].map(function(index){return points[index];});var centerX=parseInt((triangle[0][0]+triangle[1][0]+triangle[2][0])/3);var centerY=parseInt((triangle[0][1]+triangle[1][1]+triangle[2][1])/3);var color=getPixel(centerX,centerY)||getPixel(triangle[0][0],triangle[0][1])||getPixel(triangle[1][0],triangle[1][1])||getPixel(triangle[2][0],triangle[2][1]);drawTriangle(triangle,color,ctx);updateProgress(index,indices.length-3);}
$("nutchonanh").text("Chọn ảnh khác");var dataurl=outputCanvas.toDataURL("image/jpeg");getimg=dataurl;$(".tad-img-out").html("<img src='"+dataurl+"' class='img-thumbnail w-100'></img>");$("#tad-taianhve").click(function(){$(this).attr("download","taoanhdep--low-poly.jpg").attr("href",getimg);});return outputCanvas;}};})(window);var Delaunay;(function(){"use strict";var EPSILON=1.0/1048576.0;function supertriangle(vertices){var xmin=Number.POSITIVE_INFINITY,ymin=Number.POSITIVE_INFINITY,xmax=Number.NEGATIVE_INFINITY,ymax=Number.NEGATIVE_INFINITY,i,dx,dy,dmax,xmid,ymid;for(i=vertices.length;i--;){if(vertices[i][0]<xmin)xmin=vertices[i][0];if(vertices[i][0]>xmax)xmax=vertices[i][0];if(vertices[i][1]<ymin)ymin=vertices[i][1];if(vertices[i][1]>ymax)ymax=vertices[i][1];}
dx=xmax-xmin;dy=ymax-ymin;dmax=Math.max(dx,dy);xmid=xmin+dx*0.5;ymid=ymin+dy*0.5;return[[xmid-20*dmax,ymid-dmax],[xmid,ymid+20*dmax],[xmid+20*dmax,ymid-dmax]];}
function circumcircle(vertices,i,j,k){var x1=vertices[i][0],y1=vertices[i][1],x2=vertices[j][0],y2=vertices[j][1],x3=vertices[k][0],y3=vertices[k][1],fabsy1y2=Math.abs(y1-y2),fabsy2y3=Math.abs(y2-y3),xc,yc,m1,m2,mx1,mx2,my1,my2,dx,dy;if(fabsy1y2<EPSILON&&fabsy2y3<EPSILON)
throw new Error("Eek! Coincident points!");if(fabsy1y2<EPSILON){m2=-((x3-x2)/(y3-y2));mx2=(x2+x3)/2.0;my2=(y2+y3)/2.0;xc=(x2+x1)/2.0;yc=m2*(xc-mx2)+my2;}
else if(fabsy2y3<EPSILON){m1=-((x2-x1)/(y2-y1));mx1=(x1+x2)/2.0;my1=(y1+y2)/2.0;xc=(x3+x2)/2.0;yc=m1*(xc-mx1)+my1;}
else{m1=-((x2-x1)/(y2-y1));m2=-((x3-x2)/(y3-y2));mx1=(x1+x2)/2.0;mx2=(x2+x3)/2.0;my1=(y1+y2)/2.0;my2=(y2+y3)/2.0;xc=(m1*mx1-m2*mx2+my2-my1)/(m1-m2);yc=(fabsy1y2>fabsy2y3)?m1*(xc-mx1)+my1:m2*(xc-mx2)+my2;}
dx=x2-xc;dy=y2-yc;return{i:i,j:j,k:k,x:xc,y:yc,r:dx*dx+dy*dy};}
function dedup(edges){var i,j,a,b,m,n;for(j=edges.length;j;){b=edges[--j];a=edges[--j];for(i=j;i;){n=edges[--i];m=edges[--i];if((a===m&&b===n)||(a===n&&b===m)){edges.splice(j,2);edges.splice(i,2);break;}}}}
Delaunay={triangulate:function(vertices,key){var n=vertices.length,i,j,indices,st,open,closed,edges,dx,dy,a,b,c;if(n<3)
return[];vertices=vertices.slice(0);if(key)
for(i=n;i--;)
vertices[i]=vertices[i][key];indices=new Array(n);for(i=n;i--;)
indices[i]=i;indices.sort(function(i,j){var diff=vertices[j][0]-vertices[i][0];return diff!==0?diff:i-j;});st=supertriangle(vertices);vertices.push(st[0],st[1],st[2]);open=[circumcircle(vertices,n+0,n+1,n+2)];closed=[];edges=[];for(i=indices.length;i--;edges.length=0){c=indices[i];for(j=open.length;j--;){dx=vertices[c][0]-open[j].x;if(dx>0.0&&dx*dx>open[j].r){closed.push(open[j]);open.splice(j,1);continue;}
dy=vertices[c][1]-open[j].y;if(dx*dx+dy*dy-open[j].r>EPSILON)
continue;edges.push(open[j].i,open[j].j,open[j].j,open[j].k,open[j].k,open[j].i);open.splice(j,1);}
dedup(edges);for(j=edges.length;j;){b=edges[--j];a=edges[--j];open.push(circumcircle(vertices,a,b,c));}}
for(i=open.length;i--;)
closed.push(open[i]);open.length=0;for(i=closed.length;i--;)
if(closed[i].i<n&&closed[i].j<n&&closed[i].k<n)
open.push(closed[i].i,closed[i].j,closed[i].k);return open;},contains:function(tri,p){if((p[0]<tri[0][0]&&p[0]<tri[1][0]&&p[0]<tri[2][0])||(p[0]>tri[0][0]&&p[0]>tri[1][0]&&p[0]>tri[2][0])||(p[1]<tri[0][1]&&p[1]<tri[1][1]&&p[1]<tri[2][1])||(p[1]>tri[0][1]&&p[1]>tri[1][1]&&p[1]>tri[2][1]))
return null;var a=tri[1][0]-tri[0][0],b=tri[2][0]-tri[0][0],c=tri[1][1]-tri[0][1],d=tri[2][1]-tri[0][1],i=a*d-b*c;if(i===0.0)
return null;var u=(d*(p[0]-tri[0][0])-b*(p[1]-tri[0][1]))/i,v=(a*(p[1]-tri[0][1])-c*(p[0]-tri[0][0]))/i;if(u<0.0||v<0.0||(u+v)>1.0)
return null;return[u,v];}};if(typeof module!=="undefined")
module.exports=Delaunay;})();let src='';function updateVisibleValue(){document.getElementById('cell-size-value').innerText=document.getElementById('cell-size').value+"%";}
var imageLoader=document.getElementById('image-file');imageLoader.addEventListener('change',readURL,false);var canvas=document.getElementById('imageCanvas');var ctx=canvas.getContext('2d');function readURL(input){if(input.files&&input.files[0]){const reader=new FileReader();reader.onload=event=>{var img=new Image();img.onload=function(){var imgSize=Math.min(img.width,img.height);canvas.width=100
canvas.height=100
var left=(img.width-imgSize)/2;var top=(img.height-imgSize)/2;ctx.drawImage(img,left,top,imgSize,imgSize,0,0,canvas.width,canvas.height);}
img.src=event.target.result;src=event.target.result;$(".tad-taoanh").removeClass("disabled");$(".cell-size-value-wrapper").show(500)
$(".showxlha").show(500);};reader.readAsDataURL(input.files[0]);}}
function poly(){loading(true);Polygonize({src:src,cellSize:parseInt(document.getElementById('cell-size').value),progress:function(progress){},onSuccess:function(){$("#tad-taianhve").show();loading(false);}});}
function loading(show){let loading=document.getElementById('loading');loading.style.display=show?"block":"none";}}