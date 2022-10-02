let map = L.map('map').setView([0,-0],6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 8,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([0,-0]).addTo(map);


let ip = "8.8.8.8"
let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_rpZmDZEjUykQTmv2xEjAkNb5VZf2Z&ipAddress=`

const setData = (data) => {
    document.querySelector("#ip").innerHTML = data.ip
    document.querySelector("#location").innerHTML =`${data.location.country} ,${data.location.region}  `
    document.querySelector("#time").innerHTML = `UTC ${data.location.timezone}`
    document.querySelector("#isp").innerHTML = data.isp
    map.removeLayer(marker)
    map.flyTo( [data.location.lat,data.location.lng], 6, { animate:true, duration:1 } ) 
    marker = L.marker([data.location.lat,data.location.lng]).addTo(map)
}

const getIpData = async () => {
    const res = await fetch(url+ip)
    const data = await res.json()
    console.log(data)
    setData(data)
}
getIpData()

document.querySelector("form").onsubmit = () => {
    event.preventDefault()
    ip = document.querySelector("form input").value
    console.log(url)
    getIpData()
}