function getKullanici(){
   const tablo = document.getElementById("kullaniciTablo");
    fetch("https://reqres.in/api/users")
    .then(Response=>Response.json())
    .then(data=>{
        for(user of data.data)
    {
        table.innerHTML+=<tr>
            
        </tr>
    
    }
    })
}
