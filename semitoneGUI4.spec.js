  const jsdom = require('jsdom');
  const {
      JSDOM
  } = jsdom

  describe('class JamBuddy()', () => {
      beforeEach(() => {
          const dom = new JSDOM(`
        <html lang="en">
        <body>
            <p id="notes">selected notes</p>
        </body>
        </html>
        `)
          global.document = dom.window.document;
          global.window = dom.window;
          global.navigator = dom.window.navigator;

      })
      it('should have the ID that displays the selected notes', () => {
          let selectedNotes = require('./semitoneGUI4');
          expect(global.document.getElementById('notes').innerHTML).toBe('selected notes');
          selectedNotes.selectNotes()
          expect(global.document.getElementById('notes').innerHTML).toEqual(selectedNotes.selectedSemitoneNotes.toString())
      })
  })

  describe('class JamBuddy()', () => {
      beforeEach(() => {
          const dom = new JSDOM(`
      <html lang="en">
      <body>
      <p id="explanation"></p>
      </body>
      </html>
      `)
          global.document = dom.window.document;
          global.window = dom.window;
          global.navigator = dom.window.navigator;

      })
      it('should have the ID that displays the selected notes', () => {
          let selectedNotes = require('./semitoneGUI4');
          selectedNotes.selectNotes()
          expect(global.document.getElementById('notes').innerHTML).toEqual(selectedNotes.selectedSemitoneNotes)
          expect(global.document.getElementById('value').value).toBe(5);
          selectedNotes.checkAnswer()
          expect(global.document.getElementById('answer').innerHTML).toEqual(selectedNotes.rightAnswer)
      })
  })