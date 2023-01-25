let scrape = ()=>{
  let container=document.getElementById('container');
  let anime = hello.value;
  let link = 'https://api.jikan.moe/v4/characters?q=';
  //https://api.jikan.moe/v4/anime?q=
  link+=anime;
  console.log(link);
  let p = fetch(link);
  p.then((response)=>{return response.json()}).then((data)=>{
    console.log(data.data[0]);
    if(data.data[0]==undefined)
    {
      container.innerHTML="<h2>no results found</h2>";
    }
    else{
for(i in data.data){
  let div = document.createElement('div');
  div.setAttribute('class','card');
  div.innerHTML= `<div class="box" style="background-repeat:no-repeat;opacity:0.5;">
  <img src =${data.data[i].images.jpg.image_url} style="position:absolute;transform: translate(-30px, -30px);">
  <h3 style="padding-top:350px;color:white;">${data.data[i].name}</h3>
      <div class="content" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
        <h2 style="padding-top:250px;padding-left:20px;color:white;">${i}</h2>
        <p>${data.data[i].about}</p>
        <a href="${data.data[i].url}" style="margin-bottom: 407px;margin-left: 65px;">Read More</a>
      </div>
    </div>
  </div>`
  container.appendChild(div);
    }
  }
  })
  }
one.addEventListener('click',scrape)
clear.addEventListener('click',()=>{
    container.innerHTML="<b></b>";
})