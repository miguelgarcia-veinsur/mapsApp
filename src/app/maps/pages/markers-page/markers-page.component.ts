import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

@Component({
  selector: 'pages-markers',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})

export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.10380784179445, 4.651165392795477);

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    //const markerHtml = document.createElement('div');
    //markerHtml.innerHTML = 'Miguel García';

    //const marker = new Marker({element: markerHtml, /*color: 'red'*/})
    //                   .setLngLat(this.currentLngLat)
    //                   .addTo(this.map);
  }

  createMarker(){
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string){
    if (!this.map) return;
    const marker = new Marker({
      color: color,
      draggable: true,
    })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({
      color: color,
      marker: marker,
    });
  }

  deleteMarker(index: number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }
}
