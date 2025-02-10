import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://rollingstone.com.br/media/_versions/homem_de_ferro_reproducao_widemd.jpg"
  contentTitle:string = "MINHA NOTICIA"
  contentDescription:string = "Ola mundo!"
}
