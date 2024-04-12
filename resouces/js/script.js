function toLogin()
{
window.location.href="/admin/login.html"
}
function  toHome(){
window.location.href="/"
}
//Head
const head=document.querySelector(".top")
const h1Head=document.createElement("h1")
 const iTot=document.createElement("i")
 h1Head.textContent="Readou"
 h1Head.setAttribute("onclick","toHome()")
 iTot.setAttribute("onclick","toLogin()")
 iTot.classList.add("fa-solid","fa-arrow-up-from-bracket")

head.insertAdjacentElement("beforeend",h1Head)
head.insertAdjacentElement("beforeend",iTot)

//bot
const bot=document.querySelector(".bot")
const h1Bot=document.createElement("h1")
const h4Bot=document.createElement("h4")
const pBot=document.createElement("p")
h1Bot.textContent="Readou"
h4Bot.textContent="Emai: xuanduc11062004@gmail.com"
pBot.textContent=`Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet. 
Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào 
trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào. 
Khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.`
bot.insertAdjacentElement("beforeend",h1Bot)
bot.insertAdjacentElement("beforeend",h4Bot)
bot.insertAdjacentElement("beforeend",pBot)
let divLoad=document.createElement("div")
divLoad.classList.add("coverLoader")
divLoad.innerHTML=`
                <div class="loader"></div>
`
document.querySelector("body").insertAdjacentElement("afterbegin",divLoad)
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(".coverLoader").style.visibility = "visible";

    } 
};
