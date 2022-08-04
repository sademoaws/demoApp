// import '@axe-devtools/cypress';
describe('ABCD Tech Home', () => {

    before(() => {
      cy.visit('https://d42n81.github.io/demoApp/')
    });

    it('Should have main navigation opened', () => {
      cy.get('.card-header')
      .contains('Hello') 
    });



    /** 
     * Axe Ruleset - running analysis against specific ruleset(s)
     * .setAxeRuleset('508' | 'wcag2' | 'wcag2.1')
     * Default param wcag2
     * 
     * Analyzes a page using wcag2.1
     * Creates a `results` object based on the ruleset
     * JSON file is create of the results
     * HTML file is created of the results
     */
    it('Should be accessible', () => {
      // cy.setAxeRuleset('wcag2.1').axeAnalyze({name: "home"}).debug();
      cy.axeAnalyze({name:"home"});
      cy.getAxeResults().then(async results => {
        const resultsDir = './a11y-results/cypress/'
        await cy.writeFile(`${resultsDir}home.json`, results)
        await cy.task('reportAsHTML', { resultsDir })
      })
    });


  })