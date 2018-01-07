import { UILogingPage } from './app.po';

describe('uiloging App', () => {
  let page: UILogingPage;

  beforeEach(() => {
    page = new UILogingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
