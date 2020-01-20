import { Location } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import ItemByIdResponse from 'server/models/responses/item-by-id-response';
import { MY_ITEMS_API_URL } from 'src/app/consts/api-url';
import { ItemDetailService } from './item-detail.service';

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

describe('ItemDetailService', () => {
  let service: ItemDetailService;
  let httpMock: HttpTestingController;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemDetailService,
        {
          provide: Location,
          useClass: StubLocation
        }
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(ItemDetailService);
    location = TestBed.get(Location);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: ItemDetailService = TestBed.get(ItemDetailService);
    expect(service).toBeTruthy();
  });

  it('should get stubItemResponse', () => {
    service.getById(stubItemResponse.item.id);

    const req = httpMock.expectOne(`${MY_ITEMS_API_URL}/${stubItemResponse.item.id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(stubItemResponse);

    service.state$.subscribe(value => {
      expect(value).toEqual(stubItemResponse);
    });
  });

  it('should go back', () => {
    service.getById('0');
    const spyLocation = spyOn(location, 'back');

    const req = httpMock.expectOne(`${MY_ITEMS_API_URL}/0`);
    expect(req.request.method).toEqual('GET');

    req.flush(null, { status: 404, statusText: "" });
    expect(spyLocation).toHaveBeenCalled();
  });
});
