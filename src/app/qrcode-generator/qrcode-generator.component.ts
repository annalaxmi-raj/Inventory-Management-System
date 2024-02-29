import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrl: './qrcode-generator.component.css'
})
export class QrcodeGeneratorComponent {
  qrdata:string='Enter your Product :';
  qrCodeDownloadLink: SafeValue='';
  onChange(url : SafeValue)
  {
    this.qrCodeDownloadLink = url;
  }
}
