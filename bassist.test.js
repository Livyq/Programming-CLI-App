const { Musician } = require("./Musician");
const { Troupe } = require("./Troupe");
const { Guitarist } = require("./guitarist");
const { Flautist } = require("./flautist");
const { Bassist } = require("./bassist");
const { Percussionist } = require("./percussionist");

// check Bassist method
test("Test Bassist method", () => {
  troupe = new Troupe();
  troupe.name = "Troupe1";
  troupe.genre = "rock";
  troupe.minimumDuration = "2";

  musician = new Bassist();
  musician.name = "Pink";
  musician.yearOfPlaying = "10";
  musician.hourlyRate = "100";
  musician.instrument = "bassist";

  troupe.addMusician(musician);

  expect(musician.displayInstrumentDetail()).toBe(
    "The musician is a bassist"
  );
});
