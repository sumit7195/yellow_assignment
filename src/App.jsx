import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={15}
        initialCenter={{
          lat: 28.70406,
          lng: 77.102493,
        }}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
        <Marker />
        <Marker
          name={"Your position"}
          position={{ lat: 37.762391, lng: -122.439192 }}
          icon={{
            url: "/path/to/custom_icon.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64),
          }}
        />
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBAFSt9FqAcn1dhusWnqR4mBMyG47xo-KY",
})(MapContainer);