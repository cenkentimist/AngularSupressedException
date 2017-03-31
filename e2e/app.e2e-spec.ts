import { MincasePage } from './app.po';

describe('mincase App', () => {
  let page: MincasePage;

  beforeEach(() => {
    page = new MincasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
