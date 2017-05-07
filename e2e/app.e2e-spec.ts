import { GuidebookPage } from './app.po';

describe('guidebook App', () => {
  let page: GuidebookPage;

  beforeEach(() => {
    page = new GuidebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
