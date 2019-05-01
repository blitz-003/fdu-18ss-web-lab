let IdFeaturedObject = document.querySelector("#featured");

IdFeaturedObject.addEventListener("mouseenter",opacityIncrease);


function opacityIncrease(){
    let classFigCaptionObject = document.querySelector("figcaption");
    classFigCaptionObject.style.transition = "opacity 1s";
    classFigCaptionObject.style.opacity = "0.8";
}

IdFeaturedObject.addEventListener("mouseleave",opacityDecrease);

function opacityDecrease(){
  let classFigCaptionObject = document.querySelector("figcaption");
  classFigCaptionObject.style.transition = "opacity 1s";
  classFigCaptionObject.style.opacity = "0";

}

let IdThumbNailsObject = document.querySelectorAll("#thumbnails img");


for(let i = 0 ; i < IdThumbNailsObject.length ; i++){
    //console.log(i);
    IdThumbNailsObject[i].addEventListener("click",function(){
      let imageSrc = IdThumbNailsObject[i].getAttribute("src");
      //console.log(imageSrc);


      imageSrc = imageSrc.replace("small","medium");
      //console.log(imageSrc);
      let object1 = document.querySelector("#featured img");
      object1.src = imageSrc;

      let imageTitle = IdThumbNailsObject[i].getAttribute("title");
      ////console.log(imageTitle);
      object1 = document.querySelector("#featured figcaption");
      object1.textContent = imageTitle;
    });
}
