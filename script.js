// 모달팝업
let modal = document.querySelector('.modal');
let thumbnail = document.querySelectorAll('.thumbnail');
let popup = document.querySelectorAll('.popup');
let modalPopup = document.querySelector('.modal_popup');

for(i=0; i<thumbnail.length; i++) {
  thumbnail[i].addEventListener('click', function(){
    let num = this.className.replace(/[^0-9]/g,'');
    console.log('n')
    
    modalPopup.style.background = 'url(sources/img-l-' + num + '.jpg) no-repeat center / 100%'
    modal.style.display = 'block';
  })
  modal.addEventListener('click', function(){
    modal.style.display = 'none';
  })
}

// 비디오 클릭 시 재생 및 컨트롤롤
const video = document.querySelector('.video__area video');
const videoArea = document.querySelector('.video__area');

function togglePlay() {
    if(video.paused) { // playing이라는 property는 없다. 'paused'만 있음.
        video.play();
        video.setAttribute('controls',true);
        document.querySelector('.video__area .btn__play').style.display = "none";
        document.querySelector('.video__area .overlay').style.display = "none";
    } else {
        video.pause();
        video.removeAttribute('controls',true);
        document.querySelector('.video__area .btn__play').style.display = "block";
        document.querySelector('.video__area .overlay').style.display = "block";
    }
}

// 비디오 재생 완료 시 버튼 및 오버레이 블럭
video.addEventListener('ended', myHandler, false);
function myHandler(e) {
    document.querySelector('.video__area .btn__play').style.display = "block";
    document.querySelector('.video__area .overlay').style.display = "block";
}

videoArea.addEventListener('click', togglePlay);


// 주소 클릭 시 클립보드에 복사
let copyTxt = document.querySelector('#copy__txt').innerText;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(copyTxt);
    // console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// 복사완료 알림
let clickArea = document.querySelector(".click__area");

let animate = function() {
  clickArea.classList.toggle('animate');
  setTimeout(function(){
    clickArea.classList.toggle('animate');
  },1000);
}

clickArea.addEventListener('click', animate);