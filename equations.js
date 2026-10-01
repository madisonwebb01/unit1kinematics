/* Section 4: The Kinematic Equations (no free fall, no sig figs) */
(function () {
  var E1 = "d = v<sub>i</sub>t + ½at<sup>2</sup>",
      E2 = "v<sub>f</sub><sup>2</sup> = v<sub>i</sub><sup>2</sup> + 2ad",
      E3 = "v<sub>f</sub> = v<sub>i</sub> + at",
      E4 = "d = ½(v<sub>i</sub> + v<sub>f</sub>)t";

  (window.BANK = window.BANK || []).push({
    id: "eq",
    name: "Kinematic Equations",
    short: "Equations",
    questions: [
      {
        n: 1,
        topic: "Choosing an Equation",
        stem: "A cyclist starts from rest and accelerates at 1.5 m/s/s until she is moving 9.0 m/s.<br><b>Which equation should you use to find how far she traveled?</b>",
        opts: [
          [E2, 1, "Correct. You know v<sub>i</sub> (0, from rest), v<sub>f</sub> and a, and you want d. Time is never mentioned and not asked for, and this is the equation missing t."],
          [E1, 0, "This equation needs t, which the problem never gives you. It is the equation missing v<sub>f</sub>, but v<sub>f</sub> is one of the values you know."],
          [E3, 0, "This equation has no d in it, so it cannot find the distance."],
          [E4, 0, "This equation needs t, and the problem does not give a time."]
        ]
      },
      {
        n: 2,
        topic: "Implied Values",
        stem: "A delivery truck brakes and <u>comes to a stop</u> at a red light.<br><b>Which value is implied by the problem, even though no number is written?</b>",
        opts: [
          ["v<sub>f</sub> = 0 m/s", 1, "Correct. “Comes to a stop” means the final velocity is 0 m/s."],
          ["v<sub>i</sub> = 0 m/s", 0, "v<sub>i</sub> = 0 is implied by “starts from rest.” This truck was moving before it braked, so its initial velocity is not zero."],
          ["a = 0 m/s/s", 0, "The truck's velocity changes as it stops, so it must be accelerating. Its acceleration is not zero."],
          ["t = 0 s", 0, "The time is how long the stop took, which is not zero. Nothing in “comes to a stop” tells you the time."]
        ]
      },
      {
        n: 3,
        topic: "Solving for Distance",
        stem: "A skateboarder starts from rest and rolls down a ramp, reaching 6.3 m/s in 2.1 seconds.<br><b>How far (in m) did she travel down the ramp?</b><br>Round to the nearest tenth, no units.",
        type: "num", answer: 6.6, tol: 0.06, unit: "m",
        work: "Given: v<sub>i</sub> = 0 m/s (from rest), v<sub>f</sub> = 6.3 m/s, t = 2.1 s. Unknown: d. Acceleration is not given or asked for, so use " + E4 + ". d = ½(0 + 6.3)(2.1) = 6.615, which rounds to 6.6 m.",
        traps: [
          [13.2, 0.1, "This is 6.3 × 2.1 without the ½. The skateboarder was not going 6.3 m/s the whole time; her average velocity was half of that."],
          [3, 0.05, "3 m/s/s is her acceleration (6.3 ÷ 2.1). The question asks for the distance."]
        ]
      },
      {
        n: 4,
        topic: "Solving for Acceleration",
        stem: "A train starts from rest and accelerates uniformly, covering 120 m in 20 s.<br><b>Determine its acceleration (in m/s/s).</b><br>Round to the nearest tenth, no units.",
        type: "num", answer: 0.6, tol: 0.05, unit: "m/s/s",
        work: "Given: v<sub>i</sub> = 0 m/s, d = 120 m, t = 20 s. Unknown: a. v<sub>f</sub> is not given or asked for, so use " + E1 + ". 120 = 0(20) + ½ a (20)<sup>2</sup> → 120 = 200a → a = 0.6 m/s/s.",
        traps: [
          [6, 0.05, "6 m/s is 120 ÷ 20, the train's average velocity. That is a velocity, not an acceleration."],
          [0.3, 0.05, "This divides 120 by 400 and drops the ½. Solving ½ a(400) = 120 gives a = 240 ÷ 400 = 0.6."],
          [12, 0.05, "12 m/s is the train's final velocity. The question asks for the acceleration."]
        ]
      },
      {
        n: 5,
        topic: "Solving for Velocity",
        stem: "A car traveling 12 m/s accelerates at 2.5 m/s/s for 6.0 s.<br><b>Determine its final velocity (in m/s).</b><br>Nearest whole number, no units.",
        type: "num", answer: 27, tol: 0.5, unit: "m/s",
        work: "Given: v<sub>i</sub> = 12 m/s, a = 2.5 m/s/s, t = 6.0 s. Unknown: v<sub>f</sub>. Distance is not given or asked for, so use " + E3 + ". v<sub>f</sub> = 12 + 2.5(6.0) = 12 + 15 = 27 m/s.",
        traps: [
          [15, 0.5, "15 m/s is only the change in velocity (2.5 × 6.0). The car was already going 12 m/s, so add that on."],
          [117, 0.5, "117 m is how far the car travels in those 6 s. The question asks for the final velocity."]
        ]
      },
      {
        n: 6,
        topic: "Solving for Velocity",
        stem: "A cyclist brakes and comes to a stop in 4.0 s, covering 18 m while braking.<br><b>How fast (in m/s) was she going when she started braking?</b><br>Nearest tenth, no units.",
        type: "num", answer: 9, tol: 0.05, unit: "m/s",
        work: "Given: v<sub>f</sub> = 0 m/s (comes to a stop), t = 4.0 s, d = 18 m. Unknown: v<sub>i</sub>. Acceleration is not given or asked for, so use " + E4 + ". 18 = ½(v<sub>i</sub> + 0)(4.0) → 18 = 2v<sub>i</sub> → v<sub>i</sub> = 9.0 m/s.",
        traps: [
          [4.5, 0.05, "4.5 m/s is 18 ÷ 4.0, her average velocity while braking. Since she ended at 0, her starting velocity was twice the average."],
          [-2.25, 0.05, "−2.25 m/s/s is her acceleration while braking. The question asks for her starting velocity."]
        ]
      },
      {
        n: 7,
        topic: "Solving for Time",
        stem: "A runner moving 3.0 m/s speeds up at 0.50 m/s/s over a distance of 40 m.<br><b>How long (in s) does this take?</b><br>Nearest tenth, no units.",
        type: "num", answer: 8, tol: 0.05, unit: "s",
        work: "Given: v<sub>i</sub> = 3.0 m/s, a = 0.50 m/s/s, d = 40 m. Unknown: t. Solving for t directly would be quadratic, so find v<sub>f</sub> first with " + E2 + ": v<sub>f</sub><sup>2</sup> = 3.0<sup>2</sup> + 2(0.50)(40) = 9 + 40 = 49, so v<sub>f</sub> = 7.0 m/s. Then use " + E3 + ": 7.0 = 3.0 + 0.50t → t = 8.0 s.",
        traps: [
          [13.3, 0.1, "This is 40 ÷ 3.0, which assumes the runner stays at 3.0 m/s. She is speeding up, so it takes less time."],
          [14, 0.05, "This is 7.0 ÷ 0.50, which skips the starting 3.0 m/s. The time comes from the change in velocity: (7.0 − 3.0) ÷ 0.50."],
          [7, 0.05, "7.0 m/s is the runner's final velocity, the first step. Use it in v<sub>f</sub> = v<sub>i</sub> + at to get the time."],
          [12.6, 0.1, "This treats the runner as starting from rest. She starts at 3.0 m/s, so she covers the 40 m faster."]
        ]
      },
      {
        n: 8,
        topic: "Solving for Distance",
        stem: "A car moving 24 m/s brakes with an acceleration of −3.0 m/s/s until it stops.<br><b>How far (in m) does it travel while braking?</b><br>Nearest whole number, no units.",
        type: "num", answer: 96, tol: 0.5, unit: "m",
        work: "Given: v<sub>i</sub> = 24 m/s, v<sub>f</sub> = 0 m/s (stops), a = −3.0 m/s/s. Unknown: d. Time is not given or asked for, so use " + E2 + ". 0 = 24<sup>2</sup> + 2(−3.0)d → 0 = 576 − 6d → d = 96 m.",
        traps: [
          [-96, 0.5, "Getting −96 usually means the acceleration went in as +3.0. With a = −3.0 the equation is 0 = 576 − 6d, which gives +96 m. The car keeps moving forward while it brakes, so the answer is positive."],
          [192, 0.5, "This divides 576 by 3 and drops the 2 in 2ad. The equation gives 576 = 6d, so d = 96 m."],
          [8, 0.5, "8 s is how long the stop takes (24 ÷ 3.0). The question asks for the distance."]
        ]
      }
    ]
  });
})();
