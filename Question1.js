const calculateWinner = (input) => {
  let physicsWinners = input.map((person) => {
    if (person.category === "Physics") {
      return {
        name: person.name,
        year: person.year,
        // share:
      };
    }
  });
  let ChemistryWinners = input.map((person) => {
    if (person.category === "Chemistry") {
      return {
        name: person.name,
        year: person.year,
      };
    }
  });
  let physicsOutput = physicsWinners.map((winner) => {
    return {
      category: "Physics",
      year: winner.year,
      winner: physicsWinners.map((person) => {
        if (person.year === winner.year) {
          return { name: person.name };
        }
      }),
    };
  });
  let output = [
    ...physicsOutput,
    ChemistryWinners.map((winner) => {
      return {
        category: "Chemistry",
        year: winner.year,
        winner: ChemistryWinners.map((person) => {
          if (person.year === winner.year) {
            return { name: person.name };
          }
        }),
      };
    }),
  ];
  return output;
};
