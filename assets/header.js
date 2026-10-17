(function(){
  var h=document.querySelector('header.site'); if(!h) return;
  var b=h.querySelector('.menu-btn'), mq=window.matchMedia('(max-width:720px)');
  var ON=80, OFF=10; // hysteresis so it can't flip back and forth
  function close(){h.classList.remove('open'); b&&b.setAttribute('aria-expanded','false');}
  function reserve(){
    // Reserve the full header height so collapsing never shifts the page
    if(mq.matches){
      var was=h.classList.contains('compact'); if(was) h.classList.remove('compact');
      document.body.style.paddingTop=h.offsetHeight+'px'; h.classList.add('fixed');
      if(was) h.classList.add('compact');
    } else { document.body.style.paddingTop=''; h.classList.remove('fixed','compact'); close(); }
  }
  function update(){
    if(!mq.matches) return;
    var y=window.scrollY, c=h.classList.contains('compact');
    if(!c && y>ON){h.classList.add('compact');}
    else if(c && y<OFF){h.classList.remove('compact'); close();}
  }
  b&&b.addEventListener('click',function(){var o=h.classList.toggle('open'); b.setAttribute('aria-expanded',o?'true':'false');});
  h.querySelectorAll('nav a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape') close();});
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',function(){reserve();update();});
  mq.addEventListener('change',function(){reserve();update();});
  reserve(); update();
})();
