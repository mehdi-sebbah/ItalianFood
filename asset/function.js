function myfunction(x) {
    x.classList.toggle("change");
}

const mymap = L.map('mapid',  { zoomControl: false }).setView([48.8566969,2.3514616], 40);
const marker = L.marker([48.8566969,2.3514616]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWVoZGk3Nzk0IiwiYSI6ImNrZm8xdTQyeTBnOXYyc29lejczNDRrNzgifQ.HycSLIijy8Uvxw3mdlVo5w'
}).addTo(mymap);