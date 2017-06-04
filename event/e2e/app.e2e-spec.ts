import { EventPage } from './app.po';

describe('event App', () => {
  let page: EventPage;

  beforeEach(() => {
    page = new EventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
