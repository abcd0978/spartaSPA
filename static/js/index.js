
$(document).ready(function () {
  set_temp();

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
  let face = $("#face ").val();
  let name = $("#name ").val();
  let message = $("#message").val();
  let password = $("#password").val();

  let formData = new FormData();
  formData.append("face_give", face);
  formData.append("name_give", name);
  formData.append("password_give", password);
  formData.append("message_give", message);

  fetch("/comment", { method: "POST", body: formData })
    .then((res) => res.json())
    .then((data) => {
      alert(data["msg"]);
      window.location.reload();
    });
}

function modify(event) {
  let password = prompt("비밀번호");
  if (password === "" || password === null) {
    alert("비밀번호를 입렵하세요");
    return 0;
  }
  let modifiedComment = prompt("댓글을 새로 입력해주세요");
  let comment = event.target;
  let commentId = comment.parentNode.parentNode.nextElementSibling.id;
  console.log(commentId);
  let formData = new FormData();
  formData.append("password_give", password);
  formData.append("commentId_give", commentId);
  formData.append("modified_comment", modifiedComment);

  fetch("/comment", { method: "PUT", body: formData })

    .then((res) => res.json())
    .then((data) => {
      alert(data["result"]);
      window.location.reload();
    });
}

function show_comment() {
  fetch("/comment")
    .then((res) => res.json())
    .then((data) => {
      let rows = data["result"];
      $("#comment-list").empty();
      
      console.log(rows)
      rows.forEach((a) => {
        let face = a["face"];
        let id = a["id"];
        let name = a["name"];
        let commentId = a["id"];
        let message = a["message"];

        let temp_html = `    <div id="comment-list" style="min-width: 300px;" >
                                   <div class="trash"> 
                                   <p class="aa">
                                  ${face} 
                                   </p>
                                
                                   <h6 class="fw-bold mb-1">${name}</h6>
                                   <button class="junk" onclick="del_comment('${id}')"   type="button"><img src="../static/img/trash3.svg"></img></button>
                                   <button class="pencil" onclick="modify(event)" type="button"><img src="../static/img/pencil-square.svg"></img></button>
                                    </div>
                                 
                                  <p id="${commentId}">
                                 
                                   </p>
                                  
                             
                                  <div class="d-flex align-items-center mb-3">
                                  <p class="mb-0">
                                  ${message}

                                  </p>
                                  </div>
                                </div>`;

        $("#comment-list").prepend(temp_html);
      });
    });
}







  
  
   
       
        
   
  
       
  
   

function del_comment(id) {
  const password = prompt("비밀번호", "");
  if (!password) return alert("비밀번호를 입력해주세요");

  let formData = new FormData();
  formData.append("id_give", id);
  formData.append("pw_give", password);

  fetch("/comment", { method: "DELETE", body: formData })
    .then((res) => res.json())
    .then((data) => {
      if (data["result"]) {
        window.location.reload();
      } else {
        alert("비밀번호가 일치하지 않습니다");
      }
    });
}

