import { Component, Input } from '@angular/core';

@Component({
  selector: 'ab-product-tile-with-thumb',
  templateUrl: './product-tile-with-thumb.component.html',
  styleUrls: ['./product-tile-with-thumb.component.scss']
})
export class ProductTileWithThumbComponent {
  @Input() thumbnail = '';
  @Input() title = '';
}
