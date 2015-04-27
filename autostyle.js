var fileref=document.createElement('link')
fileref.setAttribute('rel', 'stylesheet')
fileref.setAttribute('type', 'text/css')
fileref.setAttribute('href', './web.css')
if (navigator.platform.indexOf('Nintendo 3DS') > -1){
    fileref.setAttribute('href', '/.3ds.css')
    window.setInterval(function(){window.scrollTo(40,220);},50);
}
document.getElementsByTagName('head')[0].appendChild(fileref)
