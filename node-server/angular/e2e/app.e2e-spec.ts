import { NnodeAngularPage } from './app.po';

describe('nnode-angular App', () => {
  let page: NnodeAngularPage;

  beforeEach(() => {
    page = new NnodeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
