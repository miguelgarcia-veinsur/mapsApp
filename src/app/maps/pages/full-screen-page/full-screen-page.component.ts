import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWlndWVsZ2FyY2lhLXZlaW5zdXIiLCJhIjoiY2x1OXQzdnZkMGF4ODJucWs5enA1NHl2ZiJ9._FWdjRcaWK9hNmIwtuMfOQ';

@Component({
  selector: 'pages-full-screen',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
