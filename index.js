const cursor=document.jquerySelector('.cursor');
document.addEventListener('mousemove', (e)=> {
    cursor.stye.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

