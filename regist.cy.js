var target;

describe('youtube registration', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')

    cy.get('#buttons > ytd-button-renderer.style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
  })

  
})