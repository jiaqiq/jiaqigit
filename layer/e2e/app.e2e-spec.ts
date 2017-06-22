import { LayerPage } from './app.po';

describe('layer App', () => {
  let page: LayerPage;

  beforeEach(() => {
    page = new LayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
