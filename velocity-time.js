/* Section 3: Velocity/Time (v/t) and Acceleration/Time (a/t) Graphs */
(function () {
  var T10 = { min: 0, max: 10, step: 1, label: "time (s)" };
  function V1() {
    return G.plot({ x: T10, y: { min: 0, max: 10, step: 1, label: "velocity (m/s)" },
      series: [{ pts: [[0, 0], [4, 8], [7, 8], [10, 2]] }] });
  }
  function V2() {
    return G.plot({ x: T10, y: { min: -4, max: 8, step: 1, every: 2, label: "velocity (m/s)" },
      series: [{ pts: [[0, 6], [6, -3], [10, -3]] }] });
  }

  (window.BANK = window.BANK || []).push({
    id: "vt",
    name: "Velocity/Time & Acceleration/Time Graphs",
    short: "v/t & a/t Graphs",
    questions: [
      {
        n: 1,
        topic: "Displacement (Area)",
        stem: "<b>Determine the displacement (in m) over the first 10 seconds.</b><br>Nearest meter, no units.",
        fig: V1,
        type: "num", answer: 55, tol: 0.5, unit: "m",
        work: "Displacement is the area between the line and the zero axis. 0 to 4 s: triangle, ½ × 4 × 8 = 16 m. 4 to 7 s: rectangle, 3 × 8 = 24 m. 7 to 10 s: trapezoid, ½ × (8 + 2) × 3 = 15 m. Total = 16 + 24 + 15 = 55 m.",
        traps: [
          [2, 0.5, "2 m/s is the velocity at 10 s. On a v/t graph the height is velocity; displacement is the area under the line."],
          [8, 0.5, "8 m/s is the highest velocity. Displacement comes from the area under the line, not from reading a value off the y axis."],
          [80, 0.5, "This treats the whole graph as a rectangle 8 tall and 10 wide. The object starts at 0 m/s and slows at the end, so the triangle and trapezoid parts hold less area."]
        ]
      },
      {
        n: 2,
        topic: "Acceleration (Slope)",
        stem: "<b>Determine the acceleration from second 7 to second 10 (in m/s/s).</b><br>Nearest whole number, no units.",
        fig: V1,
        type: "num", answer: -2, tol: 0.5, unit: "m/s/s",
        work: "Slope of a v/t graph is acceleration. a = Δv / Δt = (2 − 8) / (10 − 7) = −6 / 3 = −2 m/s/s.",
        traps: [
          [2, 0.5, "The size is right, but the velocity is positive and getting smaller, so the slope (acceleration) is negative."],
          [-6, 0.5, "−6 m/s is the change in velocity. Divide it by the 3 s it took to get the acceleration."],
          [0, 0.5, "Zero acceleration is the flat part from 4 to 7 s. From 7 to 10 s the velocity is changing."]
        ]
      },
      {
        n: 3,
        topic: "What You Can't Know",
        stem: "<b>Where is the object located at t = 4 s?</b>",
        fig: V1,
        opts: [
          ["this can't be determined from a v/t graph", 1, "Correct. A v/t graph shows how something moves, not where it is. You can find how far it moved (16 m in the first 4 s), but without a starting position you cannot know its location."],
          ["8 m", 0, "8 m/s is the velocity at 4 s. The y axis on this graph is velocity, not position."],
          ["16 m", 0, "16 m is the displacement from 0 to 4 s (the triangle's area). It is only the position if the object started at 0 m, and the graph does not tell you that."],
          ["0 m", 0, "Starting at 0 m/s means starting from rest, not starting at 0 m. The graph says nothing about position."]
        ]
      },
      {
        n: 4,
        topic: "Changing Direction",
        stem: "<b>At what time does the object change direction?</b>",
        fig: V2,
        opts: [
          ["4 s", 1, "Correct. Direction is set by the sign of the velocity. The line crosses the zero axis at 4 s, going from positive velocity to negative velocity."],
          ["6 s", 0, "At 6 s the acceleration stops and the velocity levels off, but it stays negative before and after. The direction does not change there."],
          ["0 s", 0, "At 0 s the object is already moving in the positive direction at 6 m/s. Nothing changes direction at the start."],
          ["It never changes direction, because the acceleration stays the same.", 0, "Direction comes from the sign of the velocity, not the acceleration. The velocity goes from positive to negative, so the object turns around. The acceleration also changes at 6 s, from −1.5 m/s/s to 0."]
        ]
      },
      {
        n: 5,
        topic: "Displacement (Area)",
        stem: "<b>Determine the displacement (in m) for the whole 10 seconds.</b><br>Nearest meter, no units. Pay attention to your sign.",
        fig: V2,
        type: "num", answer: -3, tol: 0.5, unit: "m",
        work: "Area above the axis counts as positive, area below counts as negative. 0 to 4 s: ½ × 4 × 6 = +12 m. 4 to 6 s: ½ × 2 × (−3) = −3 m. 6 to 10 s: 4 × (−3) = −12 m. Total = 12 − 3 − 12 = −3 m.",
        traps: [
          [3, 0.5, "More area sits below the axis than above it, so the displacement is negative."],
          [27, 0.5, "27 m is the distance: every area added as a positive amount. Displacement subtracts the area below the axis."],
          [-15, 0.5, "This counts only the area below the axis. The triangle above the axis from 0 to 4 s adds +12 m."]
        ]
      },
      {
        n: 6,
        topic: "Speeding Up vs. Slowing Down",
        stem: "<b>During which interval is the object speeding up?</b>",
        fig: V2,
        opts: [
          ["4 to 6 s", 1, "Correct. Speeding up means the velocity moves away from zero. From 4 to 6 s it goes from 0 to −3 m/s, so the speed grows from 0 to 3 m/s."],
          ["0 to 4 s", 0, "From 0 to 4 s the velocity moves toward zero (6 m/s down to 0 m/s), so the object is slowing down."],
          ["6 to 10 s", 0, "The line is flat here, so the velocity holds steady at −3 m/s. That is constant speed, not speeding up."],
          ["0 to 6 s, because the acceleration is negative the whole time", 0, "A negative acceleration does not mean speeding up or slowing down by itself. From 0 to 4 s the object slows, and from 4 to 6 s it speeds up."]
        ]
      },
      {
        n: 7,
        topic: "Comparing Accelerations",
        stem: "<b>Which object has the greatest acceleration (ignoring the sign)?</b>",
        fig: function () {
          return G.plot({ x: { min: 0, max: 8, step: 1, label: "time (s)" }, y: { min: 0, max: 10, step: 1, label: "velocity (m/s)" },
            series: [
              { pts: [[0, 2], [8, 10]], label: "A", labelAt: [7, 9], dx: -22, dy: 0 },
              { pts: [[0, 10], [8, 0]], label: "B", labelAt: [7, 1.25], dx: 4, dy: -4 },
              { pts: [[0, 0], [8, 6]], label: "C", labelAt: [7, 5.25], dx: 4, dy: 18 }
            ] });
        },
        opts: [
          ["B", 1, "Correct. Acceleration is the steepness of a v/t line. B changes 10 m/s in 8 s (−1.25 m/s/s). A changes 8 m/s (1 m/s/s) and C changes 6 m/s (0.75 m/s/s)."],
          ["A", 0, "A ends at the highest velocity, but that is not the same as the greatest acceleration. A's velocity changes 8 m/s in 8 s, less than B's 10 m/s."],
          ["C", 0, "C is the flattest line, so its velocity changes the least. It has the smallest acceleration."],
          ["A and B are equal", 0, "They look similar, but B drops 10 m/s in 8 s while A rises only 8 m/s. B's line is steeper."]
        ]
      },
      {
        n: 8,
        topic: "Matching Graphs",
        stem: "<b>Which acceleration/time graph matches this velocity/time graph?</b>",
        fig: V1,
        opts: [
          ["A horizontal line at +2 m/s/s from 0 to 4 s, at 0 from 4 to 7 s, then at −2 m/s/s from 7 to 10 s", 1, "Correct. Each straight v/t segment has a constant slope, so each a/t segment is a horizontal line at that slope: 8/4 = +2, then 0, then −6/3 = −2."],
          ["A horizontal line at +2 m/s/s from 0 to 4 s, at 0 from 4 to 7 s, then at +2 m/s/s from 7 to 10 s", 0, "The last segment slopes downward, so its acceleration is negative, not positive."],
          ["A line rising from 0 to 4 s, a flat line from 4 to 7 s, then a falling line from 7 to 10 s", 0, "This copies the shape of the v/t graph. Constant acceleration shows up as a horizontal line on an a/t graph, not a slanted one."],
          ["A horizontal line at 8 m/s/s from 0 to 7 s, then at 2 m/s/s from 7 to 10 s", 0, "These numbers are velocities read off the graph. Acceleration is the slope of the v/t line, not its height."]
        ]
      },
      {
        n: 9,
        topic: "a/t Graphs",
        stem: "The object starts from rest.<br><b>Determine its velocity (in m/s) at t = 7 s.</b><br>Nearest whole number, no units.",
        fig: function () {
          return G.plot({ x: { min: 0, max: 8, step: 1, label: "time (s)" }, y: { min: -1, max: 3, step: 1, label: "acceleration (m/s/s)" },
            series: [{ pts: [[0, 2], [5, 2]], color: "#a8306a" }, { pts: [[5, 0], [8, 0]], color: "#a8306a" }] });
        },
        type: "num", answer: 10, tol: 0.5, unit: "m/s",
        work: "From 0 to 5 s the velocity grows by 2 m/s every second: vf = vi + at = 0 + 2 × 5 = 10 m/s. After 5 s the acceleration is 0, so the velocity stays at 10 m/s through t = 7 s.",
        traps: [
          [0, 0.5, "An acceleration of 0 means the velocity stops changing, not that the object stops. It keeps the 10 m/s it built up."],
          [14, 0.5, "This multiplies 2 m/s/s by all 7 s. The acceleration ends at 5 s, so the velocity only grows for 5 s."],
          [2, 0.5, "2 m/s/s is the acceleration from 0 to 5 s. The question asks for the velocity."]
        ]
      },
      {
        n: 10,
        topic: "Speeding Up vs. Slowing Down",
        stem: "<b>Use the graph to describe the motion involved.</b>",
        fig: function () {
          return G.plot({ x: { min: 0, max: 6, step: 1, label: "time (s)" }, y: { min: -10, max: 2, step: 1, every: 2, label: "velocity (m/s)" },
            series: [{ pts: [[0, -2], [6, -8]] }] });
        },
        opts: [
          ["Object is speeding up in the negative direction", 1, "Correct. The velocity is below the zero axis (negative direction) and moving farther from zero (from −2 to −8 m/s), so the speed is increasing."],
          ["Object is slowing down in the negative direction", 0, "The line slopes downward, but the velocity moves away from zero. A bigger number of m/s, in either direction, means a bigger speed."],
          ["Object is slowing down in the positive direction", 0, "The whole line is below the zero axis, so the object moves in the negative direction the entire time."],
          ["Object is moving with constant speed in the negative direction", 0, "Constant speed makes a horizontal line on a v/t graph. This line is sloped, so the velocity is changing."]
        ]
      }
    ]
  });
})();
