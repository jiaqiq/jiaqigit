import { ZujiantongxunPage } from './app.po';

describe('zujiantongxun App', () => {
  let page: ZujiantongxunPage;

  beforeEach(() => {
    page = new ZujiantongxunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
