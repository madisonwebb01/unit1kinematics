/* Section 1: Motion Vocab & Diagrams */
(window.BANK = window.BANK || []).push({
  id: "vocab",
  name: "Motion Vocab & Diagrams",
  short: "Vocab & Diagrams",
  questions: [
    {
      n: 1,
      topic: "Scalar vs. Vector",
      stem: "<b>Which of the following is a <u>scalar</u> quantity?</b>",
      opts: [
        ["Distance", 1, "Correct. Distance is a number value only, with no direction attached. It can never be negative."],
        ["Displacement", 0, "Displacement is a vector. It has a size and a direction, which is why it can be negative."],
        ["Velocity", 0, "Velocity is a vector. A velocity of −3 m/s tells you the speed and that the object moves in the negative direction."],
        ["Acceleration", 0, "Acceleration is a vector. Its sign tells you which way the velocity is changing."]
      ]
    },
    {
      n: 2,
      topic: "Distance vs. Displacement",
      stem: "A student walks 12 m east to the drinking fountain, then walks 5 m west back toward class.<br><b>What are the student's distance and displacement?</b>",
      opts: [
        ["Distance 17 m, displacement 7 m east", 1, "Correct. Distance adds every part of the trip: 12 + 5 = 17 m. Displacement is final position minus initial position: 12 − 5 = 7 m, ending east of the start."],
        ["Distance 7 m, displacement 17 m east", 0, "These are swapped. Distance is additive only, so it can never be smaller than the displacement."],
        ["Distance 17 m, displacement 17 m east", 0, "Walking back west undoes 5 m of the trip, so the student ends only 7 m from the start, not 17 m."],
        ["Distance 12 m, displacement 5 m west", 0, "This uses only one part of each walk. Distance includes both legs, and the student finishes east of the start, not west."]
      ]
    },
    {
      n: 3,
      topic: "Direction of Acceleration",
      stem: "An object is moving in the negative direction and has a positive acceleration.<br><b>What is happening to the object?</b>",
      opts: [
        ["It is slowing down.", 1, "Correct. When velocity and acceleration have opposite signs, the object slows down. A bird coming in to land is an example."],
        ["It is speeding up.", 0, "An object speeds up only when its velocity and acceleration point the same way. Here they point in opposite directions."],
        ["It is moving at a constant velocity.", 0, "Any acceleration other than zero means the velocity is changing, so the velocity cannot be constant."],
        ["It is decelerating, so its acceleration must be negative.", 0, "Physics does not use the term deceleration, and a negative sign is a direction, not a signal for slowing down. This acceleration is positive."]
      ]
    },
    {
      n: 4,
      topic: "Dot Diagrams",
      stem: "Each dot shows where an object was at equal time intervals.<br><b>Which dot diagram shows an object slowing down while moving to the right?</b>",
      fig: function () {
        return G.dots({ max: 10, title: "Three dot diagrams labeled A, B and C, all moving right", rows: [
          { label: "A", xs: [0, 3, 5.5, 7.5, 9, 10], dir: 1 },
          { label: "B", xs: [0, 1, 2.5, 4.5, 7, 10], dir: 1 },
          { label: "C", xs: [0, 2, 4, 6, 8, 10], dir: 1 }
        ] });
      },
      opts: [
        ["A", 1, "Correct. The dots get closer together, so the object covers less distance in each time interval. It is slowing down."],
        ["B", 0, "The dots in B spread farther apart, so the object covers more distance each interval. B is speeding up."],
        ["C", 0, "The dots in C are equally spaced, which means a constant velocity, not slowing down."]
      ]
    },
    {
      n: 5,
      topic: "Dots and Graphs",
      stem: "The dot diagram below shows an object moving to the left.<br><b>Which position/time graph matches this motion?</b>",
      fig: function () {
        return G.dots({ max: 10, title: "One dot diagram with an arrow pointing left", rows: [
          { label: "", xs: [0, 2, 4, 6, 8, 10], dir: -1 }
        ] });
      },
      opts: [
        ["A straight line with a negative slope", 1, "Correct. Equal spacing means constant velocity, which is a straight line. Moving left is the negative direction, so the slope is negative."],
        ["A straight line with a positive slope", 0, "A positive slope means moving in the positive direction (right). This object moves left."],
        ["A curve with a negative slope that gets steeper", 0, "A curve that gets steeper means speeding up, and the dots would spread farther apart. These dots are evenly spaced."],
        ["A horizontal line", 0, "A horizontal line means the object is at rest. The dots show the object changing position each interval."]
      ]
    },
    {
      n: 6,
      topic: "Vector Diagrams",
      stem: "Each arrow shows the object's velocity at equal time intervals.<br><b>Which vector diagram shows an object with zero acceleration?</b>",
      fig: function () {
        return G.vectors({ title: "Three vector diagrams labeled A, B and C", rows: [
          { label: "A", lens: [0.6, 1.0, 1.4, 1.8] },
          { label: "B", lens: [1.3, 1.3, 1.3, 1.3] },
          { label: "C", lens: [1.8, 1.4, 1.0, 0.6] }
        ] });
      },
      opts: [
        ["A", 0, "The arrows in A grow longer, so the velocity is increasing. Changing velocity means the object is accelerating."],
        ["B", 1, "Correct. Every arrow is the same length, so the velocity never changes. No change in velocity means zero acceleration."],
        ["C", 0, "The arrows in C shrink, so the velocity is decreasing. That is still acceleration, just opposite the direction of motion."]
      ]
    }
  ]
});
