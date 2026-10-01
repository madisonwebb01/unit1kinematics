/* Section 5: Constant Velocity Buggy Collisions */
(window.BANK = window.BANK || []).push({
  id: "buggy",
  name: "Buggy Collisions",
  short: "Buggy Collisions",
  questions: [
    {
      n: 1,
      topic: "Position Equations",
      stem: "Buggy A starts at position 0 m. Buggy B starts at 3.0 m and drives toward buggy A at 0.90 m/s.<br><b>Which equation describes buggy B's position over time?</b>",
      opts: [
        ["x = 3.0 − 0.90t", 1, "Correct. The starting position (3.0 m) is the y-intercept, and driving toward A at position 0 means moving in the negative direction, so the slope is −0.90 m/s."],
        ["x = 3.0 + 0.90t", 0, "A positive slope would carry buggy B away from A, toward larger positions. B drives toward position 0, so its velocity is negative."],
        ["x = 3.0t − 0.90", 0, "The starting position and the speed are swapped. The speed belongs with t, and the starting position stands alone."],
        ["x = −0.90t", 0, "This leaves out the starting position, so it puts buggy B at 0 m when t = 0. B starts at 3.0 m."]
      ]
    },
    {
      n: 2,
      topic: "Collision Time",
      stem: "Buggy A starts at 0 m moving +0.85 m/s. Buggy B starts at 4.0 m moving toward A at 1.15 m/s.<br><b>How many seconds pass before they collide?</b><br>Nearest tenth, no units.",
      type: "num", answer: 2, tol: 0.05, unit: "s",
      work: "Buggy A: x = 0.85t. Buggy B: x = 4.0 − 1.15t. Set them equal: 0.85t = 4.0 − 1.15t → 2.0t = 4.0 → t = 2.0 s.",
      traps: [
        [13.3, 0.1, "This divides 4.0 by 0.30, the difference of the speeds. The buggies drive toward each other, so they close the gap at 0.85 + 1.15 = 2.0 m/s."],
        [4.7, 0.05, "This is how long buggy A would take to cover the full 4.0 m alone. Buggy B is closing the gap from the other side at the same time."],
        [3.5, 0.05, "This is how long buggy B would take to cover the full 4.0 m alone. Buggy A is closing the gap from the other side at the same time."]
      ]
    },
    {
      n: 3,
      topic: "Collision Position",
      stem: "Buggy A starts at 0 m moving +0.85 m/s. Buggy B starts at 4.0 m moving toward A at 1.15 m/s.<br><b>At what position (in m) do they collide?</b><br>Nearest tenth, no units.",
      type: "num", answer: 1.7, tol: 0.05, unit: "m",
      work: "First find the time: 0.85t = 4.0 − 1.15t → t = 2.0 s. Then plug the time into either equation: x = 0.85(2.0) = 1.7 m. Check with B: x = 4.0 − 1.15(2.0) = 1.7 m.",
      traps: [
        [2.3, 0.05, "2.3 m is how far buggy B traveled, not where the collision happened. Positions are measured from 0 m, where buggy A started: 4.0 − 2.3 = 1.7 m."],
        [2, 0.05, "2.0 s is the collision time, and 2.0 m is also the halfway point between the buggies. They do not meet halfway because buggy B is faster. Plug t = 2.0 s into a position equation to get the collision point."]
      ]
    },
    {
      n: 4,
      topic: "Catch-Up Collisions",
      stem: "Buggy A starts at 0 m moving +1.20 m/s. Buggy B starts at 1.5 m and moves in the <u>same direction</u> at 0.70 m/s.<br><b>At what position (in m) does buggy A catch buggy B?</b><br>Nearest tenth, no units.",
      type: "num", answer: 3.6, tol: 0.05, unit: "m",
      work: "Buggy A: x = 1.20t. Buggy B: x = 1.5 + 0.70t (positive slope, same direction). Set equal: 1.20t = 1.5 + 0.70t → 0.50t = 1.5 → t = 3.0 s. Position: x = 1.20(3.0) = 3.6 m.",
      traps: [
        [3, 0.05, "3.0 s is the time it takes A to catch B. Plug it back in to get the position."],
        [0.95, 0.06, "This gives B a negative velocity, as if the buggies drove toward each other. Both move in the positive direction, so A only gains 1.20 − 0.70 = 0.50 m every second."],
        [1.5, 0.05, "1.5 m is where buggy B started. B keeps moving forward while A catches up."]
      ]
    },
    {
      n: 5,
      topic: "Graphing Collisions",
      stem: "The position/time graph shows two buggies driving toward each other.<br><b>Where and when do they collide?</b>",
      fig: function () {
        return G.plot({ x: { min: 0, max: 10, step: 1, label: "time (s)" }, y: { min: 0, max: 6, step: 1, label: "position (m)" },
          series: [
            { pts: [[0, 0], [10, 5]], label: "A", labelAt: [9, 4.5], dx: -6, dy: -10 },
            { pts: [[0, 6], [6, 0]], label: "B", labelAt: [1, 5], dx: 6, dy: -2 }
          ] });
      },
      opts: [
        ["At 2 m, after 4 s", 1, "Correct. The buggies collide where the lines cross. Reading the crossing point: time 4 s on the x axis and position 2 m on the y axis."],
        ["At 4 m, after 2 s", 0, "The axes are swapped. Time is on the horizontal axis (4 s) and position is on the vertical axis (2 m)."],
        ["At 6 m, after 0 s", 0, "That is where buggy B starts. The collision is where the two lines cross, not where either begins."],
        ["They never collide, because their slopes have opposite signs.", 0, "Opposite slopes mean the buggies move in opposite directions, toward each other. The lines cross, so they do collide."]
      ]
    },
    {
      n: 6,
      topic: "Error Analysis",
      stem: "Buggy A starts at 0 m and buggy B starts across the floor. They are released toward each other, and they collide <u>closer to buggy A's starting point</u> than predicted.<br><b>Which issue could explain this?</b>",
      opts: [
        ["Buggy B was moving faster than its measured speed.", 1, "Correct. A faster buggy B covers more ground before the collision, which pushes the collision point toward A's side."],
        ["Buggy A was moving faster than its measured speed.", 0, "A faster buggy A would cover more ground, pushing the collision point toward B's side, not A's."],
        ["Buggy B was released later than buggy A.", 0, "If B starts late, A gets extra time to travel, so the collision moves toward B's side."],
        ["Buggy B's batteries had run down since its speed was measured.", 0, "Weaker batteries make B slower than measured, so A covers more ground and the collision moves toward B's side."]
      ]
    }
  ]
});
