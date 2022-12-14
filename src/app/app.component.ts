import { Component, OnInit } from '@angular/core';
declare class WebRtcStreamer {
  constructor(id: string, url: string)
  connect(url: string): void
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var streamer = new WebRtcStreamer("video", location.protocol + "//" + window.location.hostname + ":8000");
    streamer.connect("rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4");
  }
  title = 'webrtc-demo';
}
