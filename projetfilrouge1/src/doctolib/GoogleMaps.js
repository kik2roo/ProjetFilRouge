// import { GoogleApiWrapper } from 'google-maps-react';
// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker} from 'google-maps-react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//     apiKey: "AIzaSyAHLznTk-dYxVqhBU9_eqPcDxy3Xo_75ZU"
// })(MapContainer)