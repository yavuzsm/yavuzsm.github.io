const table = document.getElementById("kullaniciTablo");
function getKullanici(){
   let data={
id: document.getElementById("kullanici_id").value
baslik: document.getElementById("proje_baslik").value
ad: document.getElementById("proje_ad").value
};
    fetch("https://reqres.in/api/users")
    method:"POST",
    headers:{
     'Content-Type': 'application/json'
    },
    body:JSON.stringify(data) 
 })
 .then(response=>response.json())
 .then(data=>{
     console.log(data);
     table.innerHTML+= `
     <tr> 
         <td>
             ${data.kullanici_id}
         </td>
             <td>
                 ${data.proje_baslik}
         </td>
         <td>
             ${data.proje_ad}
         </td>
         </tr>
         `
 })
}
