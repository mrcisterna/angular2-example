import { MtboAppPage } from './app.po';

describe('mtbo-app App', function() {
  let page: MtboAppPage;

  beforeEach(() => {
    page = new MtboAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
