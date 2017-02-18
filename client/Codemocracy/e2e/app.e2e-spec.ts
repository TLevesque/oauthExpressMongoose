import { CodemocracyPage } from './app.po';

describe('codemocracy App', function() {
  let page: CodemocracyPage;

  beforeEach(() => {
    page = new CodemocracyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
