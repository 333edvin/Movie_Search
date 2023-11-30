async function search()
{

try{
const movie = document.getElementById('movie_name').value
if(!movie){
    alert('Enter a movie Name')
}else{
let fetchedData=await fetch(`https://www.omdbapi.com/?apikey=df82801&t=${movie}`)
let data= await fetchedData.json();
console.log(data)

innerdata = `<h3>${data.Title}(${data.Year})</h3>
              <p><b>Plot:</b>${data.Plot}</p> <br>
              <p><b>Director:</b>${data.Director}</p>
              <p><b>Actors:</b></b>${data.Actors}</p> 
              <p><b>Ratings:</b>
              <ul>
                  <li>${data.Ratings[0].Source}:${data.Ratings[0].Value}</li>
              </ul>
              </p>`

              result.innerHTML = innerdata
}}
catch(error){
console.log(error);
}}

