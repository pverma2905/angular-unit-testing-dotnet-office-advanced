import { AppComponent } from './app.component';

describe('AppComponent', () => {
  var comp: AppComponent;
  beforeEach(() => {
   comp = new AppComponent()
   console.log("beforeEach...")
  });

  afterEach(function()  {
    comp = new AppComponent()
    console.log("aftereEach...")
  })

  beforeAll(()=>{
    console.log("before all")
  })

  afterAll(()=>{
    console.log("after all")
  })

  it('increase count', () => {
    comp.IncreaseCount(2);
    expect(comp.Count).toEqual(12);
  })

  it('decrease count', () => {
    comp.DecreaseCount(2);
    expect(comp.Count).toEqual(8);
  })

});
