(function(){
  var h=document.querySelector('header.site'); if(!h) return;
  var b=h.querySelector('.menu-btn'), mq=window.matchMedia('(max-width:720px)');
  function close(){h.classList.remove('open'); b&&b.setAttribute('aria-expanded','false');}
  function update(){
    var c=mq.matches && window.scrollY>40;
    if(c!==h.classList.contains('compact')){h.classList.toggle('compact',c); if(!c) close();}
  }
  b&&b.addEventListener('click',function(){var o=h.classList.toggle('open'); b.setAttribute('aria-expanded',o?'true':'false');});
  h.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape') close();});
  window.addEventListener('scroll',update,{passive:true}); mq.addEventListener('change',update); update();
})();
