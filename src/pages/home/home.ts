import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes.provider';
import { Shake } from '@ionic-native/shake';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quoteImage: any;
  shaking: boolean = false;
  val = 500;

  placeholder = 'assets/img/heart-placeholder.png';
  constructor(public navCtrl: NavController,
              public quotes: QuotesProvider,
              public shake: Shake) {
    this.initialize();
  }

  initialize(){
    const watch = this.shake.startWatch(25).subscribe(() => {
      this.mockQuote();
      //this.getQuote();
    });
  }

  mockQuote(){
    this.shaking = true;
    this.val == 502 ? 500 : this.val;
    this.quoteImage = `https://unsplash.it/${this.val}/${this.val}?random`;
    this.val++;
    setTimeout(() => {
      this.shaking = false;
    }, 500);
  }

  getQuote() {
    this.quotes.getRandomQuote().subscribe(quote => {
      this.quoteImage = quote.url;
    });
  }
}
