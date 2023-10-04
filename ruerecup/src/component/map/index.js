
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import marker from '../../assets/furniture.png';


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


const parisBounds = [
  [48.815573, 2.224199], // Coordonnée sud-ouest
  [48.902145, 2.469920]  // Coordonnée nord-est
];

const Map = () => {
    const [position, setPosition] = useState([0,0]);

    useEffect(() =>{

    setInterval(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setPosition([position.coords.latitude, position.coords.longitude]);
          });
    }, 10000)



    },[])

    return (
        <MapContainer 
            style={{ height: "300px", width: "3s00px" }}
            bounds={parisBounds} 
            scrollWheelZoom={false}

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={iconFurniture}>
                <Popup>
                    Paris
                </Popup>
            </Marker>
            

            
{/*             
         <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </MapContainer>
    );
}

export default Map;
