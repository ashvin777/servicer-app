import { ServicerAppPage } from './app.po';

describe('servicer-app App', () => {
  let page: ServicerAppPage;

  beforeEach(() => {
    page = new ServicerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
