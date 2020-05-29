import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }

    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 16 }
        initialCenter = {{ lat: 45.901015, lng: 12.331591 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Motomarket Srl' }
          position = {{ lat: 45.901015, lng: 12.331591 }}
          name = { 'Motomarket Srl' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
            <h3>Motomarket Srl</h3>
            <p>Vicolo Cadore 4 <br />San Vendemiano, TV</p>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
    // apiKey: (process.env.key)
})(GoogleMapsContainer)