import { AngularAlmanacPage } from './app.po';

describe('angular-almanac App', () => {
  let page: AngularAlmanacPage;

  beforeEach(() => {
    page = new AngularAlmanacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
