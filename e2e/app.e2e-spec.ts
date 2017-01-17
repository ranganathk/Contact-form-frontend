import { ContactUsPage } from './app.po';

describe('contact-us App', function() {
  let page: ContactUsPage;

  beforeEach(() => {
    page = new ContactUsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
