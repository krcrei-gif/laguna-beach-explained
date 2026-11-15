(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('site-nav');
if(b)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);});
var s=document.querySelector('.sub-btn');
if(s){var li=s.parentNode;s.addEventListener('click',function(e){e.stopPropagation();var o=li.classList.toggle('open');s.setAttribute('aria-expanded',o);});
document.addEventListener('click',function(){li.classList.remove('open');s.setAttribute('aria-expanded',false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){li.classList.remove('open');s.setAttribute('aria-expanded',false);}});}
})();
