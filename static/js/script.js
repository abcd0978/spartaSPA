function a(e) {
  let likeButtonImg = e.target;
  if (likeButtonImg.className === "like") {
    likeButtonImg.className = "likeFilled";
    likeButtonImg.src = "./likeFilled.svg";
  } else {
    likeButtonImg.className = "like";
    likeButtonImg.src = "./like.svg";
  }
}

window.addEventListener("load", (event) => {
  var swiperWrapper = document.querySelector(".swiper-wrapper");

  /* The Team */

  var team = [
    {
      name: "칠7면조",
      role: "TEAM",
      desc: "7️⃣조 7️⃣면조 입니다~ 우리 팀의 약속은 [밥!시간은! 꼭 지키자]입니다. 우리 팀은 전공자와 비전공자가 섞여 있어 실력차이는 나지만, 모두 기술을 구현해 보고 다같이 이끌어 나가며 으쌰으쌰 하는 장점이 있습니다.궁극적인 목표는 이 프로젝트를 통해 개발자에 한 걸음 다가가는 것 입니다. ",
      photo: "../static/img/칠면조.png",
      website:
        "https://www.notion.so/A-7-S-A-7-1684232e26444379bf9380eb85dbfdea?pvs=4",
      email:
        "https://www.notion.so/A-7-S-A-7-1684232e26444379bf9380eb85dbfdea?pvs=4",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      like: "likeButton",
      github:
        "https://www.notion.so/A-7-S-A-7-1684232e26444379bf9380eb85dbfdea?pvs=4",
    },
    {
      name: "김민규",
      role: "항상 성장하는 개발자",
      desc: "7조 김민규 입니다! 고등학교때부터 락을 좋아해서 대학교때 밴드부도 했습니다! 그래서 기타🎸치는 것을 좋아합니다.<br> 저의 장점은 끈기있게 도전하는 것 입니다. 협업해본 적은 별로 없지만 열심히 하겠습니다.<br> #소통 #열정",
      photo: "../static/img/INFP.jpg",
      website: "https://hungryspider.tistory.com/",
      email: "kimmin36944@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      like: "likeButton",
      github: "https://github.com/abcd0978",
    },
    {
      name: "손형정",
      role: "폭풍검색 개발자",
      desc: "안녕하세요.<br>7면조팀의 손형정입니다!<br>취미는 음악감상🎵과<br>게임🎮하는 것을 좋아합니다.<br>특기는 남의 이야기를<br>잘 들어줍니다.<br>저는 내향적이지만 일에 대해서는 적극적으로 참여합니다. <br>#열정적",
      photo: "../static/img/INFJ.jpg",
      website: "https://velog.io/@hyungjungson",
      email: "mailto:brochocopie.son@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      like: "likeButton",
      github: "https://github.com/hyungjungson",
    },
    {
      name: "이소영",
      role: "아이디어 뱅크 개발자",
      desc: "7면조 중 유일한 E <br>이소영입니다!<br>취미는 게임,여행,애니메이션 보기입니다.<br>특기는 일본어 잘 하고 오버워치 다이아💎입니다!!<br>저는 E에 걸맞게 사람들한테 말을 잘 걸고 금방 친해진다는 장점이 있습니다!모두 화이팅해요👧🏻👦🏻💚<br>#소통#단합력✌🏻",
      photo: "../static/img/ENFP.jpg",
      website: "https://rafaelalucas.com",
      email: "mailto:https://blog.naver.com/ddooo__ding",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      like: "likeButton",
      github: "https://github.com/ddooo00",
    },
    {
      name: "정승하",
      role: "많이 물어보는 개발자",
      desc: "🤗안녕하세요🤗<br>7면조 중 최약체<br> 정승하입니다! 취미는 게임, 책읽기, 바둑 입니다.<br> 특기는 일본어 회화 입니다. <br>끈기있게 쭈~~욱 해나가는게 장점입니다.<br> 공부 포기하지 않고 열심히 하겠습니다. <br>#책임감",
      photo: "../static/img/INFJ.jpg",
      website: "https://blog.naver.com/tmdgk10",
      email: "mailto:wjdtmdgk55@gamil.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      like: "likeButton",
      github: "https://github.com/projectaub",
    },
    {
      name: "이지영",
      role: "코드 깎는 개발자",
      desc: `제 장점은 호기심이 많아서 새로운것을 거부감없이 잘 배웁니다.
      여기서 많이 배워가고 싶고, 재밌는거 많이 만들어보고 싶어요🫠!
      카트수집, 고양이, 낮잠이 취미입니다.
      <br>#성격급함#선진행#후보완`,
      photo: "../static/img/INTP.jpg",
      website: "https://console-log.tistory.com/",
      email: "mailto:lizzie.yyy@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafaelalucas/",
      github: "https://github.com/lizzieFEstudy",
    },
  ];

  /* Social Icons */
  var icons = [
    {
      iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
      iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
      iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
      iLike: "../../static/img/heart-fill.svg",
      iGithub: "../../static/img/github.svg",
    },
  ];

  var iWebsite = icons[0].iWebsite,
    iEmail = icons[0].iEmail,
    iLinkedin = icons[0].iLinkedin,
    iLike = icons[0].iLike,
    iGithub = icons[0].iGithub;

  /* Function to populate the team members */
  function addTeam() {
    for (let i = 0; i < team.length; i++) {
      /* Variables for the team */
      var name = team[i].name,
        role = team[i].role,
        desc = team[i].desc,
        photo = team[i].photo,
        website = team[i].website,
        email = team[i].email,
        linkedin = team[i].linkedin,
        like = team[i].like,
        github = team[i].github;

      /* Template for the Team Cards */
      var template = `
              <div class="swiper-slide">
              <div class="card">
                  <span class="bg" id=${name}></span>
                  <span class="more"></span>
                  <figure class="photo"><img src="${photo}"></figure>
                      <article class="text">
                          <p class="name">${name}</p>
                          <p class="role">${role}</p> 
                          <p  class="desc" >${desc}</p> 
                      </article>
                      
                      <div class="social">
                      <span class="pointer"></span>
                      <div class="icons">
                          <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
                          <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                          
                          <button class="icon" target="_blank" data-index="3" onclick="a(event)" ><img class="like" src = "${iLike}" ></button>
                          <a class="icon" href="${github}" target="_blank" data-index="4"><img src="${iGithub}"></a>
                          </div>
                          </div>
                  </div>
              </div>`;

      swiperWrapper.insertAdjacentHTML("beforeend", template);
    }
  }

  addTeam();

  /* Swiper Settings */

  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    centeredSlides: false,
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 40,
    threshold: 5,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1180: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      799: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
      },
    },
  });

  /* Show More */

  var btnShow = document.querySelectorAll(".more");

  btnShow.forEach(function (el) {
    el.addEventListener("click", showMore);
  });

  function showMore(event) {
    var card = event.target.closest(".swiper-slide");

    if (card.classList.contains("show-more")) {
      card.classList.remove("show-more");
    } else {
      card.classList.add("show-more");
    }
  }

  /* Social Hover */
  var icon = document.querySelectorAll(".icon");

  icon.forEach(function (el) {
    el.addEventListener("mouseenter", followCursor);
  });

  function followCursor(event) {
    var pointer = event.currentTarget
        .closest(".swiper-slide")
        .querySelector(".pointer"),
      index = event.currentTarget.dataset.index,
      sizeIcon = 47.5 * index + 20;

    pointer.style.transform = `translateX(${sizeIcon}px)`;
  }

  /* end */
});
