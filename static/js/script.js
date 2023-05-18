
function a(e){
  let likeButtonImg = e.target
  if(likeButtonImg.className === "like"){
      likeButtonImg.className = "likeFilled"
      likeButtonImg.src = './likeFilled.svg'
  }else{
      likeButtonImg.className = "like"
      likeButtonImg.src = './like.svg'
  }
  
}

window.addEventListener("load", event => {

  var swiperWrapper = document.querySelector('.swiper-wrapper');

  /* The Team */
  var team = [{
          name: "김민규",
          role: "개발자",
          desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
          photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
          website: "https://rafaelalucas.com",
          email: "mailto:rafaelavlucas@gmail.com",
          linkedin: "https://www.linkedin.com/in/rafaelalucas/",
          like: "likeButton",
          github: "www.naver.com"
      },
      {
          name: "손형정",
          role: "개발자",
          desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
          photo: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
          website: "https://rafaelalucas.com",
          email: "mailto:rafaelavlucas@gmail.com",
          linkedin: "https://www.linkedin.com/in/rafaelalucas/",
          like: "likeButton",
          github: "www.naver.com"
      },
      {
          name: "이소영",
          role: "개발자",
          desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
          photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
          website: "https://rafaelalucas.com",
          email: "mailto:rafaelavlucas@gmail.com",
          linkedin: "https://www.linkedin.com/in/rafaelalucas/",
          like: "likeButton",
          github: "www.naver.com"
      },
      {
          name: "정승하",
          role: "개발자",
          desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
          photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
          website: "https://rafaelalucas.com",
          email: "mailto:rafaelavlucas@gmail.com",
          linkedin: "https://www.linkedin.com/in/rafaelalucas/",
          like: "likeButton",
          github: "www.naver.com"
      }
  ];

  /* Social Icons */
  var icons = [{
      iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
      iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
      iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
      iLike: "../../static/img/like.svg",
      iGithub: '../../static/img/github.svg'
  }];

  var iWebsite = icons[0].iWebsite,
      iEmail = icons[0].iEmail,
      iLinkedin = icons[0].iLinkedin,
      iLike = icons[0].iLike,
      iGithub = icons[0].iGithub


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
              github = team[i].github

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
                          <p class="desc">${desc}</p> 
                      </article>
                      
                      <div class="social">
                      <span class="pointer"></span>
                      <div class="icons">
                          <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
                          <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
                          <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
                          <button class="icon" target="_blank" data-index="3" onclick="a(event)" ><img class="like" src = "${iLike} " ></button>
                          <a class="icon" href="${github}" target="_blank" data-index="4"><img src="${iGithub}"></a>
                          </div>
                          </div>
                  </div>
              </div>`;

          swiperWrapper.insertAdjacentHTML('beforeend', template);
      }
  };


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
          clickable: true
      },

      // Navigation arrows
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
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
      }
  });

  /* Show More */

  var btnShow = document.querySelectorAll('.more');



  btnShow.forEach(function (el) {
      el.addEventListener('click', showMore);
  });

  function showMore(event) {
      var card = event.target.closest(".swiper-slide");

      if (card.classList.contains('show-more')) {
          card.classList.remove('show-more');
      } else {
          card.classList.add('show-more')
      }

  }


  /* Social Hover */
  var icon = document.querySelectorAll('.icon');

  icon.forEach(function (el) {
      el.addEventListener("mouseenter", followCursor);

  });


  function followCursor(event) {
      var pointer = event.currentTarget.closest(".swiper-slide").querySelector('.pointer'),
          index = event.currentTarget.dataset.index,
          sizeIcon = (47.5 * index) + 20;

      pointer.style.transform = `translateX(${sizeIcon}px)`;
  }

 


  /* end */
});