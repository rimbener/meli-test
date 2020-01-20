import { Location, registerLocaleData, DecimalPipe } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import { LOCALE_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import ItemByIdResponse from 'server/models/responses/item-by-id-response';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { Store } from 'src/app/shared/store';
import { ItemDetailComponent } from './item-detail.component';
import { ItemDetailService } from './item-detail.service';

registerLocaleData(localeEsAR);

class StubLocation {
  public back() { }
}
const stubItemResponse: ItemByIdResponse = {
  author: {
    name: 'Hernán',
    lastname: 'Laura'
  },
  category: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
  item: {
    id: 'MLA834732660',
    title: 'Huawei Mate 20 Pro 128 Gb Negro 6 Gb Ram',
    price: {
      currency: '$',
      amount: 79900,
      decimals: 2
    },
    picture: 'https://mla-s1-p.mlstatic.com/837890-MLA32994014279_112019-O.jpg',
    condition: 'new',
    free_shipping: false,
    sold_quantity: 0,
    description: 'Inteligente y predictivo↵El sistema operativo avanzado Android 9.0 Pie'
  },
}

class MockItemDetailService extends Store<ItemByIdResponse> {
  constructor() {
    super();
  }

  public getById(id: string): Observable<ItemByIdResponse> {
    this.setState(undefined);
    this.setState(stubItemResponse);
    if (id === 'MLA834732660') {
      return of(stubItemResponse);
    }
  }
}

const stubId: BehaviorSubject<any> = new BehaviorSubject({ id: undefined });

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;
  let itemDetailService: ItemDetailService;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemDetailComponent,
        SpinnerComponent
      ],
      providers: [
        { provide: LOCALE_ID, useValue: 'es-AR' },
        {
          provide: ItemDetailService, useClass: MockItemDetailService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: stubId.asObservable()
          }
        },
        {
          provide: Location,
          useClass: StubLocation
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    itemDetailService = fixture.debugElement.injector.get(ItemDetailService);
    location = fixture.debugElement.injector.get(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    stubId.next({ id: 'MLA834732660' });
    expect(component).toBeTruthy();
  });

  it('should call itemDetailService with id: MLA834732660', () => {
    const spy = spyOn(itemDetailService, 'getById');
    stubId.next({ id: 'MLA834732660' });
    expect(spy).toHaveBeenCalledWith('MLA834732660');
  });

  it('should call location.back()', () => {
    const spyLocation = spyOn(location, 'back');
    stubId.next({ id: undefined });
    expect(spyLocation).toHaveBeenCalled();
  });

  it('should render article', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('article')).not.toBeNull();
    expect(compiled.querySelector('#category').innerText).toEqual(stubItemResponse.category.join(' > '));

    const containerDiv = compiled.querySelector('.container');
    expect(containerDiv).not.toBeNull();

    expect(containerDiv.querySelector('img').src).toEqual(stubItemResponse.item.picture);

    const detailContainerDiv = containerDiv.querySelector('#detailContainer');
    expect(detailContainerDiv).not.toBeNull();

    expect(detailContainerDiv.querySelector('#condition').innerText).toEqual(`Nuevo - ${stubItemResponse.item.sold_quantity} vendidos`)

    expect(detailContainerDiv.querySelector('#title').innerText).toEqual(stubItemResponse.item.title);

    const priceContainerDiv = containerDiv.querySelector('#priceContainer');
    expect(priceContainerDiv).not.toBeNull();

    const decimalPipe = new DecimalPipe('es-AR')
    const esArPrice = decimalPipe.transform(stubItemResponse.item.price.amount);
    expect(priceContainerDiv.querySelector('h2').innerText).toEqual(`${stubItemResponse.item.price.currency} ${esArPrice}`)

    expect(priceContainerDiv.querySelector('img')).toBeNull();

    expect(detailContainerDiv.querySelector('button')).not.toBeNull();

    const descriptionContainerDiv = compiled.querySelector('#descriptionContainer');
    expect(descriptionContainerDiv).not.toBeNull();

    expect(descriptionContainerDiv.querySelector('h3').innerText).toEqual('Descripción del producto');

    expect(descriptionContainerDiv.querySelector('p').innerText).toEqual(stubItemResponse.item.description);
  });
});
