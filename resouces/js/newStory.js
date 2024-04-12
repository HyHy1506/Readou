// const APILINK = 'https://voluminousdistantsubweb.ductran81.repl.co/api/v1/storys/';

// const APILINK = "http://localhost:8000/api/v1/storys/";
const APILINKstory = 'https://voluminousdistantsubweb.ductran81.repl.co/api/v1/storys/';
const APILINKchap = 'https://voluminousdistantsubweb.ductran81.repl.co/api/v1/chaps/';
const main = document.getElementById("part");

// const titleNewStory = document.getElementById("titleNewStory");
// const descriptionNewStory = document.getElementById("descriptionNewStory");
// const urlImageNewStory = document.getElementById("urlImageNewStory");
// <input id="urlImageNewStory" type="text" name="image" placeholder="URL ảnh"> 

const div_new = document.createElement("div");
div_new.classList.add("partNewStory");
div_new.innerHTML = `
<form>
<input type="text" id="urlImageNewStory"  name="image" placeholder="URL ảnh" >

<hr>
<input type="text" id="titleNewStory"  name="title" placeholder="Tiêu đề" required ">

<textarea id="descriptionNewStory" name="" id="" cols="30" rows="30" placeholder="Miêu tả" ></textarea>
 <button type="submit" class="button" onclick="saveReview('titleNewStory','urlImageNewStory','descriptionNewStory')">Tiếp</button>
</form>
`;
main.appendChild(div_new);
$(".coverLoader").hide()

let randomId = -1;
getRandomId();
function getRandomId() {
  fetch(APILINKstory + "story")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        randomId = data[parseInt(data.length) - 1].storyId + 1;
      } else {
        randomId = 0;
      }
      console.log(randomId);
    });
}
function saveReview(titleId, urlImageID, descriptionId) {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  while (randomId == -1) {
    console.log(randomId);
  }
  const title = document.getElementById(titleId).value;
  const urlImage = document.getElementById(urlImageID).value;

  const description1 = document.getElementById(descriptionId).value;
  let description = description1.replace(/\n/g, "<br>");
  console.log(title + urlImage + description);
  if (title == "") {
    return;
  }
  $(".coverLoader").show()

  fetch(APILINKstory + "new", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      storyId: randomId,
      title: title,
      urlImage: urlImage,
      description: description,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
  $(".coverLoader").fadeOut(500)

      while (res.status != "success");

      window.location.href = "listChap.html?id=" + randomId;
    });

  //window.location.href="listChap.html";
}
function auto_grow(element) {
  element.style.height = "auto";
 element.style.height = (element.scrollHeight) + "px";

}