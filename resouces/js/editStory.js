const APILINKstory = 'https://voluminousdistantsubweb.ductran81.repl.co/api/v1/storys/';
const APILINKchap = 'https://voluminousdistantsubweb.ductran81.repl.co/api/v1/chaps/';
let url=new URL(location.href)
let storyId= url.searchParams.get("id")
let oldData
$(window).ready(()=>{
    let urlStory=APILINKstory+"story/"+storyId
    $.ajax({
    url:urlStory,
    method:'GET',
    dataType:'json',
    success:(res)=>{
        oldData=res[0]
        let divPart=$("#part")
        let divPartEditStory=$("<div>")
        let formPart=$("<form>")
            divPartEditStory.addClass("partEditStory")
            formPart.addClass("formEditStory")
            formPart.html(`
            <input class="inputImgEditStory" type="text" name="image" placeholder="URL ảnh" >
            <hr>
            <input class="inputTitleEditStory"  type="text" name="title" placeholder="Tên chap" required>
            <textarea  class="textareaEditStory" name="" id="" cols="30" rows="30" placeholder="Kể câu chuyện của bạn" required></textarea>
            <button type="submit" class="button" onclick="saveEditStory()">Xong</button>

            `)
            divPartEditStory.append(formPart)
            divPart.append(divPartEditStory)
            $(".inputImgEditStory").val(oldData.urlImage)
            $(".inputTitleEditStory").val(oldData.title)
            $(".textareaEditStory").html(oldData.description.replace(/<br>/g,"\n"))





            $(".coverLoader").hide()
            preventLoad()
    }
})
})
const preventLoad=()=>{
$(".formEditStory").submit((event)=>{
    event.preventDefault()
})
}
const saveEditStory=()=>{
let titleNew=$(".inputTitleEditStory").val()
let urlImageNew=$(".inputImgEditStory").val()
let descriptionNew=$(".textareaEditStory").val()

if(titleNew==oldData.title&&
urlImageNew==oldData.urlImage&&
descriptionNew==oldData.description.replace(/<br>/g,"\n"))
{
    
    toMyStory()
}else{
  $(".coverLoader").show()

    descriptionNew=descriptionNew.replace(/\n/g,"<br>")
    console.log("not")
    let urlStory=APILINKstory+storyId
    $.ajax({
    url:urlStory,
    method:'PUT',
    headers: {
Accept: "application/json, text/plain, */*",
"Content-Type": "application/json",
},
    data:JSON.stringify({
        'title':titleNew,
        'urlImage':urlImageNew,
        'description':descriptionNew
    }), 
    dataType:'json',
    success:(res)=>{
  $(".coverLoader").fadeOut(500)

        console.log(res)
        toMyStory()
    },
    error:(jqXHR, textStatus, errorThrown)=>{
        console.error(textStatus, errorThrown); 
    }
})
}

}
const toMyStory=()=>{
let urlMystory="myStory.html"
window.location.href=urlMystory
}