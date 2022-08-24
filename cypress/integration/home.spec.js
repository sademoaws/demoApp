// import '@axe-devtools/cypress';
describe('Demo App Home', () => {

    before(() => {
      cy.visit('https://d42n81.github.io/demoApp/')
    });

    it('Should have main navigation opened', () => {
      cy.get('.card-header')
      .contains('Hello')
    });

    it('Should have the main banner opened', () => {
      cy.get('.App-header')
      .contains('.App-link')
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
    it('Should have an accessible homepage', () => {
      // cy.setAxeRuleset('wcag2.1').axeAnalyze({name: "home"}).debug();
      cy.axeAnalyze({name:"home"});
      cy.getAxeResults().then(async results => {
        const resultsDir = './a11y-results/cypress/'
        await cy.writeFile(`${resultsDir}home.json`, results)
        await cy.task('reportAsHTML', { resultsDir })

        cy.readFile(`${resultsDir}home.json`).then((data) =>{
          expect(data.findings.violations.length).to.equal(0);
        });
      })
    });


  })
