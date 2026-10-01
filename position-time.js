/* Section 2: Position/Time (x/t) Graphs */
(function () {
  var T = { min: 0, max: 10, step: 1, label: "time (s)" };
  // Graph P1: up, rest, back down past the start
  function P1() {
    return G.plot({ x: T, y: { min: 0, max: 10, step: 1, label: "position (m)" },
      series: [{ pts: [[0, 2], [3, 8], [5, 8], [9, 0], [10, 0]] }] });
  }
  // Graph P2: crosses below zero position
  function P2() {
    return G.plot({ x: T, y: { min: -8, max: 8, step: 2, label: "position (m)" },
      series: [{ pts: [[0, -6], [2, 4], [6, 4], [8, 2], [10, -6]] }] });
  }

  (window.BANK = window.BANK || []).push({
    id: "xt",
    name: "Position/Time Graphs",
    short: "x/t Graphs",
    questions: [
      {
        n: 1,
        topic: "Distance (x/t)",
        stem: "<b>Determine the distance traveled (in m) for the whole trip.</b><br>Nearest meter, no units.",
        fig: P1,
        type: "num", answer: 14, tol: 0.5, unit: "m",
        work: "Add every leg as a positive amount. 0 to 3 s: from 2 m to 8 m is 6 m. 3 to 5 s: at rest, 0 m. 5 to 9 s: from 8 m back to 0 m is 8 m. 9 to 10 s: at rest. Distance = 6 + 0 + 8 = 14 m.",
        traps: [
          [-2, 0.5, "That is the displacement (final position minus initial position). Distance adds every leg and can never be negative."],
          [2, 0.5, "That is the size of the displacement. Distance counts the trip out to 8 m and the trip back down, not just where the object ended."],
          [16, 0.5, "The first leg starts at 2 m, not 0 m, so it covers 8 − 2 = 6 m. Reading the height of the line (8 m) counts 2 extra meters."]
        ]
      },
      {
        n: 2,
        topic: "Displacement (x/t)",
        stem: "<b>Determine the displacement (in m) for the whole trip.</b><br>Nearest meter, no units. Pay attention to your sign.",
        fig: P1,
        type: "num", answer: -2, tol: 0.5, unit: "m",
        work: "Displacement = final position − initial position = 0 m − 2 m = −2 m. The object ends 2 m behind (in the negative direction from) where it started.",
        traps: [
          [14, 0.5, "That is the distance. Displacement only compares the starting and ending positions."],
          [2, 0.5, "The size is right but the sign is not. The object ends at a smaller position than it started, so the displacement is negative."],
          [0, 0.5, "Ending at position 0 m is not the same as zero displacement. The object started at 2 m, not 0 m."]
        ]
      },
      {
        n: 3,
        topic: "Velocity (Slope)",
        stem: "<b>Determine the velocity from second 5 to second 9.</b>",
        fig: P1,
        opts: [
          ["−2 m/s", 1, "Correct. Slope = Δx / Δt = (0 − 8) / (9 − 5) = −8 / 4 = −2 m/s."],
          ["2 m/s", 0, "The size is right, but the line slopes downward. A downward slope means a negative velocity."],
          ["−8 m/s", 0, "−8 m is the change in position, not the velocity. Divide it by the 4 s it took."],
          ["0 m/s", 0, "Zero velocity is the flat part of the graph, from 3 to 5 s. From 5 to 9 s the position is changing."],
          ["this can't be determined", 0, "Everything needed is on the graph: read the positions at 5 s and 9 s and divide the change by the time."]
        ]
      },
      {
        n: 4,
        topic: "Comparing Speeds",
        stem: "<b>During which time interval is the object moving the fastest?</b>",
        fig: P2,
        opts: [
          ["0 to 2 s", 1, "Correct. The position changes by 10 m in 2 s, a speed of 5 m/s. That is the steepest part of the graph."],
          ["2 to 6 s", 0, "The line is flat from 2 to 6 s, so the object is at rest. That is the slowest it can be."],
          ["6 to 8 s", 0, "The position changes by only 2 m in 2 s, which is 1 m/s. This is the shallowest moving segment."],
          ["8 to 10 s", 0, "This segment ends at the lowest position, but low on the graph is not the same as fast. It changes 8 m in 2 s, which is 4 m/s, less than the 5 m/s from 0 to 2 s."]
        ]
      },
      {
        n: 5,
        topic: "Direction of Travel",
        stem: "<b>When is the object moving in the negative direction?</b>",
        fig: P2,
        opts: [
          ["From 6 s to 10 s", 1, "Correct. The slope is negative for the whole stretch from 6 to 10 s, so the velocity is negative the entire time, even before the line crosses below zero."],
          ["From about 8.5 s to 10 s only, when the line is below zero", 0, "Being below zero on the graph tells you where the object is, not which way it moves. The slope is already negative from 6 to 8 s."],
          ["From 0 s to 2 s", 0, "The object starts at a negative position, but the slope here is positive, so it moves in the positive direction."],
          ["From 2 s to 6 s", 0, "The line is flat here, so the object is at rest. It is not moving in either direction."]
        ]
      },
      {
        n: 6,
        topic: "Velocity (Slope)",
        stem: "<b>Determine the velocity at second 9 (in m/s).</b><br>Nearest whole number, no units.",
        fig: P2,
        type: "num", answer: -4, tol: 0.5, unit: "m/s",
        work: "Second 9 falls in the straight segment from 8 s to 10 s. Slope = (−6 − 2) / (10 − 8) = −8 / 2 = −4 m/s.",
        traps: [
          [4, 0.5, "The size is right, but the line slopes downward here, so the velocity is negative."],
          [-2, 0.5, "−2 m is the position at second 9. Velocity is the slope of the line, not the height of the line."],
          [-8, 0.5, "−8 m is the change in position from 8 to 10 s. Divide it by the 2 s it took."],
          [-6, 0.5, "−6 m is the position at 10 s. Velocity is the change in position divided by the change in time."]
        ]
      },
      {
        n: 7,
        topic: "Curved x/t Graphs",
        stem: "<b>Use the graph to describe the motion involved.</b>",
        fig: function () {
          return G.plot({ x: { min: 0, max: 6, step: 1, label: "time (s)" }, y: { min: 0, max: 10, step: 1, label: "position (m)" },
            series: [{ fn: function (t) { return 9 - 0.25 * t * t; }, from: 0, to: 6 }] });
        },
        opts: [
          ["Object is speeding up in the negative direction", 1, "Correct. The slope is negative (moving in the negative direction) and the curve gets steeper over time, so the speed is increasing."],
          ["Object is slowing down in the negative direction", 0, "Slowing down would make the curve flatten out toward horizontal. This curve gets steeper."],
          ["Object is speeding up in the positive direction", 0, "The position is decreasing, so the slope is negative. The object moves in the negative direction."],
          ["Object is moving with constant speed in the negative direction", 0, "Constant speed makes a straight line on an x/t graph. A curve means the velocity is changing."]
        ]
      },
      {
        n: 8,
        topic: "Direction of Acceleration",
        stem: "<b>What is the direction of this object's acceleration?</b>",
        fig: function () {
          return G.plot({ x: { min: 0, max: 6, step: 1, label: "time (s)" }, y: { min: 0, max: 10, step: 1, label: "position (m)" },
            series: [{ fn: function (t) { return 9 - 0.25 * (t - 6) * (t - 6); }, from: 0, to: 6 }] });
        },
        opts: [
          ["Negative", 1, "Correct. The slope is positive but flattening, so the object moves in the positive direction while slowing down. Slowing down means the acceleration points opposite the motion: negative."],
          ["Positive", 0, "Moving in the positive direction does not make the acceleration positive. The curve flattens, so the velocity is getting smaller, which takes a negative acceleration."],
          ["Zero", 0, "Zero acceleration makes a straight line on an x/t graph. This line curves, so the velocity is changing."],
          ["this can't be determined", 0, "The shape of the curve tells you. A slope that is positive and shrinking means the velocity is decreasing, so the acceleration is negative."]
        ]
      },
      {
        n: 9,
        topic: "Comparing Speeds",
        stem: "<b>Rank the speeds of the three objects on the graph.</b>",
        fig: function () {
          return G.plot({ x: T, y: { min: -6, max: 8, step: 2, label: "position (m)" },
            series: [
              { pts: [[0, 8], [10, -4]], label: "A", labelAt: [10, -4], dx: -18, dy: -8 },
              { pts: [[0, -6], [10, 0]], label: "B", labelAt: [10, 0], dx: -18, dy: -8 },
              { pts: [[0, 2], [10, 4]], label: "C", labelAt: [10, 4], dx: -18, dy: -8 }
            ] });
        },
        opts: [
          ["A fastest, B medium, C slowest", 1, "Correct. Speed is the steepness of the line, ignoring the sign. A changes 12 m in 10 s (1.2 m/s), B changes 6 m (0.6 m/s), and C changes 2 m (0.2 m/s)."],
          ["B fastest, C medium, A slowest", 0, "This treats A's negative slope as the smallest number. A negative slope only means a direction; A's line is the steepest, so it is the fastest."],
          ["C fastest, B medium, A slowest", 0, "This ranks the lines by where they end on the graph. Height is position, not speed. Speed comes from steepness."],
          ["A fastest, C medium, B slowest", 0, "A is the fastest, but C is the flattest line, so C is the slowest, not B."]
        ]
      },
      {
        n: 10,
        topic: "Matching Descriptions",
        stem: "<b>Which description matches the motion on the graph?</b>",
        fig: function () {
          return G.plot({ x: { min: 0, max: 14, step: 1, label: "time (s)", every: 2 }, y: { min: 0, max: 10, step: 1, label: "position (m)" },
            series: [{ pts: [[0, 6], [4, 6], [8, 0], [10, 0], [14, 8]] }] });
        },
        opts: [
          ["The object stays at 6 m for 4 s, moves back to 0 m at a constant speed, rests for 2 s, then moves in the positive direction faster than before.", 1, "Correct. Flat lines are rest. From 4 to 8 s it moves 6 m in 4 s (1.5 m/s, negative direction). From 10 to 14 s it moves 8 m in 4 s (2 m/s), which is faster."],
          ["The object stays at 6 m for 4 s, moves back to 0 m, rests for 2 s, then moves in the positive direction at the same speed as before.", 0, "The last leg is not the same speed. It covers 8 m in 4 s (2 m/s), while the earlier leg covered 6 m in 4 s (1.5 m/s)."],
          ["The object moves away from the start at a constant speed, speeds up toward 0 m, rests, then slows down in the positive direction.", 0, "A flat line means rest, not constant speed. Also, straight sloped lines mean constant speed, so nothing here speeds up or slows down."],
          ["The object rests for 4 s, moves in the positive direction to 0 m, rests, then turns around and moves in the negative direction.", 0, "The directions are reversed. A downward slope (4 to 8 s) is the negative direction, and an upward slope (10 to 14 s) is the positive direction."]
        ]
      }
    ]
  });
})();
