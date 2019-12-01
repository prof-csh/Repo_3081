import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 12;
  
  // initial center position for the map
  lat: number = 47.608013;
  lng: number = -122.335167;

 
  markers: marker[] = [
	  {
		  lat: 47.6101359,
		  lng: -122.3420567,
		  label: 'A',
		  draggable: false
	  },
	  {
		  lat: 47.5947,
		  lng: 	-122.3844,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 47.620422,
		  lng: -122.349358
,
		  label: 'C',
		  draggable: false
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
