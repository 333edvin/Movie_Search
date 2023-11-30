 async function search()
    {
    
try{
    const movie = document.getElementById('movie_name').value
    if(!movie){
        document.getElementById('customAlert').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }else{
    let fetchedData=await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=9b9c9683`)
    let data= await fetchedData.json();
    console.log(data)

   innerdata = `
   
   <div class="container p-3">
   <div class="row">
       <div class="col-lg-3">
           <img src="${data.Poster}" alt=""  class="img-fluid">
           <p class="rounded border d-flex justify-content-center my-2">${data.Genre}</p>
       </div>
       <div class="col-lg-9 p-4">
       <div class="d-flex">
       <div>
       <h3>${data.Title} (${data.Year})</h3>
       <p style="font-size:12px">${data.Released}</p>
       <div class="d-flex">
       <p style="font-size:12px">${data.Language}-${data.Country}</p>
       </div>
       </div>

       <div class="d-flex flex-column mx-5">
       <h3>${data.Ratings[0].Value} <img src="./images/icons8-star.gif" style="width:25px;height:25px;margin-bottom:10px;"/></h3>
       <p style="font-size:10px">${data.Ratings[0].Source}</p>
       </div>
       </div>
       
       <p><b>Plot :</b> ${data.Plot}</p>
       <p><b>Cast : </b>${data.Actors}</p> 
           <div>
           <p><b>Director : </b>${data.Director}</p>
           <p><b>Writer : </b>${data.Writer}</p>
           </div>


       </div>
   </div>
</div>
   
                  `

                  result.innerHTML = innerdata;
                  
}}
catch(error){
console.log(error);
}}



function hideCustomAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
 // Function to refresh the page
 function refreshPage() {
    location.reload();
}



