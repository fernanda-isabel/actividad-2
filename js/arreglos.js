const Restaurantes = [
    {
        Img: "https://th.bing.com/th/id/OIP.QBgIpPAWpUOwY4z4J51SCwHaFj?pid=ImgDet&rs=1",
        Alt: "Error",
        Name: "Pacifico Mar",
        Direccion: "Av 85 Nro. 45 - 85 Barranquilla",
        Descripcion: "Deliciosa comida de mar",
    },
    {
        Img: "https://th.bing.com/th/id/OIP.GTU-0XnEO2HVu6bHCZHUMQHaEo?pid=ImgDet&rs=1",
        Alt: "Error",
        Name: "Italiano 65",
        Direccion: "Av 45 Nro. 1 - 85 Medellín",
        Descripcion: "Av 45 Nro. 1 - 85 Medellín",
    },
    {
        Img: "https://th.bing.com/th/id/R.dd2c9c2e850674daa68c957eae15e563?rik=AVLX7MwlNcXNXQ&pid=ImgRaw&r=0&sres=1&sresct=1",
        Alt: "Error",
        Name: "Fritos y Más",
        Direccion: "Calle 45 Medellín",
        Descripcion: "Comida rápida",
    },
    {
        Img: "https://th.bing.com/th/id/R.42aa31fc62b27cf3346ea8141d43d3c9?rik=6UAktmG3VeugAA&pid=ImgRaw&r=0",
        Alt: "Error",
        Name: "Pollo Frito",
        Direccion: "Cr 32 # 56 - 89",
        Descripcion: "Lo mejor del pollo frito",
    }
];

let card = document.getElementById("card-template");

Restaurantes.map((x) => {
    card.innerHTML += `
    <div class="col">
    <div class="card">
      <img src="${x.Img}" class="card-img-top" alt="${x.Alt}">
      <div class="card-body">
        <h5 class="card-title text-center">${x.Name}</h5>
        <p class="card-text text-center">${x.Direccion}</p>
        <p class="card-text text-center"><small class="text-muted">${x.Descripcion}</small></p>
        </div>
    </div>
  </div>
  `;
});





