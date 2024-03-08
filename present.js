
var to = 'Xuân Nhi';
var gift_url = 'https://www.facebook.com/nhii.xuann.14';
var gift_image_url = 'https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/409555039_342465025184733_7677105619060176760_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGkZrLGt2lMy4flEmtHxySjFzOZlIWsVMMXM5mUhaxUw0m_ErZeZV7E5cnuFAoUTZcCAGKesyKDwoMmze-Ru96c&_nc_ohc=Xyl34nf3bLQAX-jS346&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAjvLMYP36bLWTRMcRtlH7IIAYv_UQQq8vJAt2-xBdbJw&oe=65F0AB99';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

