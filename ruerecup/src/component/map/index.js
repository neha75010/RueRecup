
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import marker from '../../assets/furniture.png';
import './index.css';


const icon = L.icon({
    iconUrl: marker,

    iconSize: [16, 16],

    iconAnchor: [12, 41],
    popupAnchor: [0, -41]

  });

  const iconFurniture = L.icon({
    iconUrl: marker,

    iconSize: [40, 40],

    iconAnchor: [12, 41],
    popupAnchor: [0, -41]
  });

// Coordonnées de Paris
const parisBounds = [
  [48.815573, 2.224199], // Coordonnée sud-ouest
  [48.902145, 2.469920]  // Coordonnée nord-est
];

const Map = () => {
    const [position, setPosition] = useState([0,0]);

    const [markers, setMarkers] = useState([]);


    useEffect(() =>{
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(function(position) {

            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setPosition([position.coords.latitude, position.coords.longitude]);

          });
    }, 10000) },[])



    const handleAddMarker = () => {
      navigator.geolocation.getCurrentPosition(function (position) {

        const newMarker = {
          position: [position.coords.latitude, position.coords.longitude],
        };

        setMarkers([...markers, newMarker]);
      });
    };
  

    return (
      <div>

        <button onClick={handleAddMarker} class="small-minimal-button"> Signaler
        <span class="minimal-button-icon">🚩</span>
        </button>

      <MapContainer
        style={{ height: "300px", width: "300px", borderRadius: "30px", border: "solid 2px black", margin: "auto", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"}}
        bounds={parisBounds}
        scrollWheelZoom={false}>

        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />




        <Marker position={position} icon={iconFurniture}>
          <Popup>Déchets</Popup>
        </Marker>

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={icon}>
            <Popup>A pretty CSS3 popup. Easily customizable.</Popup>
          </Marker>
          
        ))}
      </MapContainer>
    </div>  
  );
};

export default Map;





