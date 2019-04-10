import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class CountryMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlace: {},
    }
     this.onMarkerClick = this.onMarkerClick.bind(this);
  }

onMarkerClick = (props) => {
  this.setState({
    selectedPlace: props,
  })
  // this.props.history.push(`/countries/${this.state.selectedPlace.id}`)
};

  render() {
      return (
        <Map
          style={{width: '100%', height: '80vh'}}
          center={ { lat:  34, lng: 5 } }
          onClick={this.onMapClicked}
          google={this.props.google}
          centerAroundCurrentLocation={true}
          styles= {[
            {"elementType":"labels","stylers":[{"color":"black"}]},{"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"poi.business"},{"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},{"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},{"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit","stylers":[{"lightness":38}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}
          ]}
          zoom={2}>

          {this.props.countryData.map((country, index) => (
          <Marker
          id={country.id}
          title={country.name}
          position={{ lat: country.latitude, lng: country.longitude }}
          onClick={this.onMarkerClick}
          key={index}
          icon={{
                  fillColor: 'orange',
                  path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
              }} />
  ))}

        </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_APIKEY
  })(CountryMap)
