document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var nav = btn.closest('nav');
      if(nav) nav.classList.toggle('open');
    });
  });

  // close menus when clicking outside
  document.addEventListener('click', function(e){
    var navs = document.querySelectorAll('nav.open');
    navs.forEach(function(nav){
      if(!nav.contains(e.target)) nav.classList.remove('open');
    });
  });
});
