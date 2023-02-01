// sticky navigation bar//

const header = document.querySelector(".header");
const navHeight = nav.BoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);

  if (!entry.idIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// revealing sections


//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loading= function (entries,obsever) {
    const [entry] = entries;
    console.log(entry);

    if(!entry.Intersecting) return;

    // replace SRC with DATA-SRC

entry.target.src=entry.target.dataset.src;


entry.target.addEventListener('load',function (){entry.target.classList.remove("lazy-img");
});
obsever.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg,{
    root:null,
    threshold:0
    rootMargin: '200px', // it can be positive or negative px
});

imgTargets.forEach(img=>imgObserver.observe(img));

// sliders



