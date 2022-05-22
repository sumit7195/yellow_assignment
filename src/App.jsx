import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import data from "./restaurant";

class MapContainer extends Component {
  render() {
    // console.log(data)
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        className={"map"}
        initialCenter={{ lat: "28.637684853299362", lng: 77.22033001796116 }}
        zoom={14}
      >
        <Marker
          title={"KFC"}
          name={"KFC"}
          position={{ lat: 28.637684853299362, lng: 77.22033001796116 }}
        />

        <Marker
          title={"DOMINOS"}
          name={"Domino"}
          position={{ lat: 28.684366157901113, lng: 77.179132778077 }}
        />

        <Marker
          title={"Haldiram"}
          name={"Haldiram"}
          position={{ lat: 28.63963672434897, lng: 77.22170405220163 }}
        />
        <Marker
          title={"sagar ratna"}
          name={"sagar ratna"}
          position={{ lat: 28.704386617370506, lng: 77.17844687598588 }}
        />
        <Marker
          title={"Berger King"}
          name={"Berger King"}
          position={{ lat: 28.63963672434897, lng: 77.22170405220163 }}
        />
        <Marker
          title={"Gansesh Restraunt"}
          name={"Gansesh Restraunt"}
          position={{ lat: 28.648758559016578, lng: 77.1927423680752 }}
        />
        <Marker
          title={"Dhaba Junction"}
          name={"Dhaba Junction"}
          position={{ lat: 28.651817877389348, lng: 77.1825122109588 }}
        />
        <Marker
          title={"Dhanding Chineese Restaurant"}
          name={"Dhanding Chineese Restaurant"}
          position={{ lat: 28.62954673879648, lng: 77.27353676622934 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAFSt9FqAcn1dhusWnqR4mBMyG47xo-KY",
})(MapContainer);
