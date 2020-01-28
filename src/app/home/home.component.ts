import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { QuoteService } from './quote.service';
import { Consulta } from '@app/models/consulta';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;
  showNumber: boolean = false;
  consulta: Consulta = new Consulta(new Date(), 0, []);


  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  verNumeros() {

    this.consulta.numeros = [];

    if (this.consulta.numero > 0) {

      for (let i = 1; i <= this.consulta.numero; i++) {

        if ((i % 3 == 0) && (i % 5 == 0)) {
          // console.log('verde', i, "<3");

          this.consulta.numeros.push({ numero: i, color: 'verde', emoji: 1 });

        } else if ((i % 3 == 0) && (i % 7 == 0)) {

          this.consulta.numeros.push({ numero: i, color: 'morado', emoji: 2 });

        } else if ((i % 5 == 0) && (i % 7 == 0)) {
          this.consulta.numeros.push({ numero: i, color: 'rojo', emoji: 3 });
        } else if ((i % 3 == 0)) {

          this.consulta.numeros.push({ numero: i, color: 'verde', emoji: 0 });
        } else if ((i % 5 == 0)) {

          this.consulta.numeros.push({ numero: i, color: 'rojo', emoji: 0 });

        } else if ((i % 7 == 0)) {

          this.consulta.numeros.push({ numero: i, color: 'morado', emoji: 0 });

        }

      }

      this.showNumber = true;

    } else {

      alert('Ingrese numero mayor a 0');

    }

  }

}
