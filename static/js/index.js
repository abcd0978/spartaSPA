$(document).ready(function() {
  // set_temp();
  getLike();
  show_comment();
});



function set_temp() {
  fetch("http://spartacodingclub.shop/sparta_api/weather/seoul")
    .then((res) => res.json())
    .then((data) => {
      let temp = data["temp"];
      $("#temp").text(temp);
    });
}
function getLike(){
  fetch("/like_get")
    .then((res) => res.json())
    .then((data) => {
      for(let i=0;i<data.length; i++){
        console.log(data);
        console.log(data[i]);
        let who = document.getElementById(data[i].name);
        console.log(data[i].name+"의 카드")
        console.log(who.nextSibling.nextSibling)
        //let like_buttons = document.getElementsByClassName("like_btn" + i);
        //like_buttons.textContent = team[i].like
        //Array.from(like_buttons).forEach((el) => (el.textContent = team[i].like));

      }
    });
}
function save_comment() {
  let name = $("#name ").val();

  let message = $("#message").val();
  let password = $("#password").val();

  let formData = new FormData();
  formData.append("name_give", name);
  formData.append("password_give", password);
  formData.append("message_give", message);

  fetch("/hithere", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      alert(data["msg"]);
      window.location.reload();
    });
}
function modify() {
  alert("fewfeaw");
}

function modify(event) {
  let password = prompt("비밀번호를 입력하세요");
  let modifiedComment = prompt("댓글을 새로 입력해주세요");
  let comment = event.target;
  let commentId = comment.parentNode.id;

  let formData = new FormData();
  formData.append("password_give", password);
  formData.append("commentId_give", commentId);
  formData.append("modified_comment", modifiedComment);

  

  fetch("/hi", { method: "PUT", body: formData })
    .then((res) => res.json())
    .then((data) => {
      alert(data["result"]);
      window.location.reload();
    });
}

function show_comment() {
  fetch("/hi")
    .then((res) => res.json())
    .then((data) => {
      let rows = data["result"];
      $("#comment-list").empty();
      
      console.log(rows)
      rows.forEach((a) => {
        let name = a["name"];
        let commentId = a["_id"];
        let message = a["message"];

        let temp_html = `    <div id="comment-list" style="min-width: 300px;" >
                                  <h6 class="fw-bold mb-1">${name}</h6>
                                  <div class="d-flex align-items-center mb-3">
                                    <p id="${commentId}">
                                    <button onclick="remove(event)" type="button"><img src="../static/img/trash3.svg"></img></button>
                                    <button onclick="modify(event)" type="button"><img src="../static/img/pencil-square.svg"></img></button>
                                     </p>
                                </div>
                                  </div>
                                  <p class="mb-0">
                                  ${message}

                                  </p>
                                </div>`;
        $("#comment-list").append(temp_html);
      });
    });
}

  async function getlikes(info) {
    console.log('getlike 실행됨')
    let formData = new FormData();
    formData.append("name", info.name);
    formData.append("like", info.like);
    console.log(info.name,info.like)
    await fetch("/like", { method: "POST", body:formData })
    .then((res) => res.json())
    .then((data) => {
      alert(data["msg"]);
      window.location.reload();
    });
  }




  async function show_like() {
    console.log('showlike실행됨')
    fetch('/like_get')
    .then(res => res.json())
    .then((data) => {
          console.log(data)
          alert(data['result'].name)
    });
  }
   

  
  
   
       
        
   
  
       
  
   