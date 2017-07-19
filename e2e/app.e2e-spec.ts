import { ChristinaInterviewTestPage } from './app.po';

describe('christina-interview-test App', () => {
  let page: ChristinaInterviewTestPage;

  beforeEach(() => {
    page = new ChristinaInterviewTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
