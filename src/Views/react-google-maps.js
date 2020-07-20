import {Map, Polygon,InfoWindow,Marker, HeatMap, GoogleApiWrapper} from 'google-maps-react';
import React from 'react'

 
export class MapContainer extends React.Component {
    fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
        // ...
      }
    onMapClicked(mapProps, map, clickEvent) {
        // ...
        console.log(clickEvent.latLng.lat())
        console.log(clickEvent.latLng.lng())
      }

    render() {
        
          const gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
          ];
        
          const positions = [
            { lat: 25.782551, lng: -80.445368 },
            { lat: 25.782745, lng: -80.444586 },
            { lat: 25.782842, lng: -80.443688 },
            { lat: 25.782919, lng: -80.442815 },
            { lat: 25.782992, lng: -80.442112 },
            { lat: 25.7831, lng: -80.441461 },
            { lat: 25.783206, lng: -80.440829 },
            { lat: 25.783273, lng: -80.440324 },
            { lat: 25.783316, lng: -80.440023 },
            { lat: 25.783357, lng: -80.439794 },
            { lat: 25.783371, lng: -80.439687 },
            { lat: 25.783368, lng: -80.439666 },
            { lat: 25.783383, lng: -80.439594 },
            { lat: 25.783508, lng: -80.439525 },
            { lat: 25.783842, lng: -80.439591 },
            { lat: 25.784147, lng: -80.439668 }
        ];
        return (
            <div>
            <Map
                style={{height: '100%', width: '50%', position: 'relative'}}
                className='map'
                google={this.props.google}
                zoom={5}
                onClick={this.onMapClicked}
                initialCenter={{
                    lat: 25.761681,
                    lng: -80.191788
                }}
            >
{/*                     
                <HeatMap
                    gradient={gradient}
                    opacity={1}
                    positions={positions}
                    radius={10}
                /> */}
                
                </Map>
                
            </div>
        )
    }
}
 

export default GoogleApiWrapper({
       apiKey: "AIzaSyATgv28IzCv0bjkOBbAoejH-Z13BL4uV8U",
       libraries: ['visualization']
})(MapContainer)
