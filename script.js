// Minimal motion: reveal sections as they enter the viewport.
const items = document.querySelectorAll('.project-card,.case,.about,.contact');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
items.forEach(el=>{el.style.opacity='.15';el.style.transform='translateY(18px)';el.style.transition='opacity .8s ease, transform .8s ease';observer.observe(el)});
document.addEventListener('scroll',()=>{
  document.querySelectorAll('.is-visible').forEach(el=>{el.style.opacity='1';el.style.transform='translateY(0)'});
},{passive:true});
