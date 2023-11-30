 async function search()
    {
    
try{
    const movie = document.getElementById('movie_name').value
    if(!movie){
        document.getElementById('customAlert').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }else{
    let fetchedData=await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=9b9c9683`)
    let data= await fetchedData.json();
    console.log(data)

   innerdata = `
   <div class="d-flex sec-res">
   <h3>${data.Title} (${data.Year})</h3>
   <div class="d-flex flex-column mx-5">
   <h3>${data.Ratings[0].Value} <img src="./images/icons8-star.gif" style="width:25px;height:25px;margin-bottom:10px;"/></h3>
   <p style="font-size:10px">${data.Ratings[0].Source}</p>
   </div>
   </div>
                  <p><b>Plot:</b> <br>${data.Plot}</p> <br>
                  <p><b>Director : </b>${data.Director}</p>
                  <p><b>Actors : </b></b>${data.Actors}</p> 
                  `

                  result.innerHTML = innerdata
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



