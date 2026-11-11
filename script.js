const galleryImg=document.querySelectorAll(".gallery-item");
const lightbox=document.querySelector(".lightbox");
const lightboxImg=document.querySelector("#lightbox-image");

galleryImg.forEach((item)=>{
  item.addEventListener("click",()=>{
    lightbox.style.display="flex";

    let imglink=item.src;

    let imgrande=imglink.replace("-thumbnail","");

    lightboxImg.src=imgrande;

      
  });
});


const closeBtn=document.querySelector("#close-btn");

closeBtn.addEventListener("click",()=>{
  lightbox.style.display="none";
});

lightbox.addEventListener("click",(event)=>{
  if(event.target===lightbox){
    lightbox.style.display="none";
  }
})

