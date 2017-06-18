import { BiaodanPage } from './app.po';

describe('biaodan App', () => {
  let page: BiaodanPage;

  beforeEach(() => {
    page = new BiaodanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
