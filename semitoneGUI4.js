class JamBuddy {
  constructor(notes, selectedSemitoneNotes, rightAnswer, inputNumber, streak) {
    this.notes = ['A',
      ['A#', 'B♭'],
      'B',
      'C',
      ['C#', 'D♭'],
      'D',
      ['D#', 'E♭'],
      'E',
      'F',
      ['F#', 'G♭'],
      'G',
      ['G#', 'A♭']
    ];
    this.selectedSemitoneNotes = selectedSemitoneNotes;
    this.rightAnswer = rightAnswer;
    this.inputNumber = inputNumber;
    this.streak = 0
  }

  // selectNotes randomizes the array and returns two new letters in the array
  selectNotes() {
    let array = [...this.notes];

    // shuffle the array
    let shuffledArray = array.sort(() => Math.random() - 0.5);

    // reduce the array two only 2 elements
    let newArray = shuffledArray.slice(0, 2);

    /*  convert the array of elements to individual strings in a new array (takes the sharps and flats 
     out of the second array) */
    let selectedNotes = newArray.toString().split(',');

    // randomize new array with either two or three elements 
    this.selectedSemitoneNotes = selectedNotes.sort(() => Math.random() - 0.5).slice(0, 2);

    return window.document.getElementById('notes').innerHTML = this.selectedSemitoneNotes.sort();
  }

  checkAnswer() {

    this.inputNumber = Number(window.document.getElementById('value').value);
    let noteOne = this.selectedSemitoneNotes[1]
    let noteTwo = this.selectedSemitoneNotes[0];

    this.rightAnswer = Math.abs(this.notes.indexOf(noteOne) - this.notes.indexOf(noteTwo));

    if (this.inputNumber == this.rightAnswer) {
      return window.document.getElementById('answer').innerHTML = `Super! You got it right!`;
    } else {
      return window.document.getElementById('answer').textContent = `Sorry! The answer is ${this.rightAnswer}. Try again`;
    }
  }


  revealExplanation() {
    let showNotes = window.document.getElementById('explanation');
    this.semitoneNoteOne = this.selectedSemitoneNotes[0];
    this.semitoneNoteTwo = this.selectedSemitoneNotes[1];

    console.log(this.semitoneNoteOne);
    console.log(this.semitoneNoteTwo);

    let array = [...buddy.notes].toString().split(',');
    for (let n = 0; n < array.length; n++) {
      if (array[n] == this.semitoneNoteOne) {
        array[n] = array[n]
          .toString()
          .fontcolor('#27ae60')
          .fontsize(5)
      }
      if (array[n] == this.semitoneNoteTwo) {
        array[n] = array[n]
          .toString()
          .fontcolor('#27ae60')
          .fontsize(5)
      }
    }

    return showNotes.innerHTML = `${array}
                    
                         <br ><br > The distance between the ${this.semitoneNoteOne} and ${this.semitoneNoteTwo} is ${this.rightAnswer}`

  }

  hideExplanation() {
    document.getElementById('answer').innerHTML = ' ';
    document.getElementById('explanation').innerHTML = ' ';

  }

  counter() {
    if (this.inputNumber == this.rightAnswer) {
      this.streak++
      return window.document.getElementById('score').textContent = `Streak: ${this.streak}`;
    } else {
      this.streak = 0
      return window.document.getElementById('score').textContent = `Streak: ${this.streak}`;
    }
  }


}

let buddy = new JamBuddy()

module.exports = buddy;