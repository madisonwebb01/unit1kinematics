/* Additional practice tools + the "Where to review this" map */
(function () {
  var E1 = "d = v<sub>i</sub>t + ½at<sup>2</sup>",
      E2 = "v<sub>f</sub><sup>2</sup> = v<sub>i</sub><sup>2</sup> + 2ad",
      E3 = "v<sub>f</sub> = v<sub>i</sub> + at",
      E4 = "d = ½(v<sub>i</sub> + v<sub>f</sub>)t";

  window.TOOLS = {
    /* Vocabulary straight off the Kinematics Guide vocab list */
    vocab: [
      ["Kinematics", "The study of how objects move, described with words, diagrams, graphs and equations."],
      ["Scalar", "A number value only, with no direction. Distance and speed are scalars."],
      ["Vector", "A number value with a direction. Displacement, velocity and acceleration are vectors."],
      ["Distance", "The sum of the absolute values of every displacement. Additive only, so it can never be negative."],
      ["Displacement (d)", "Change in position: final position minus initial position. It can be negative."],
      ["Speed", "How fast an object moves, with no direction attached."],
      ["Velocity (v<sub>i</sub>, v<sub>f</sub>)", "Change in position divided by time, with a direction. v<sub>i</sub> is initial velocity and v<sub>f</sub> is final velocity."],
      ["Acceleration (a)", "The rate velocity changes: a = (v<sub>f</sub> − v<sub>i</sub>) / t. Its sign is a direction, not a signal for slowing down."],
      ["Δ (delta)", "Change between two values: final minus initial. Δv = v<sub>f</sub> − v<sub>i</sub>."]
    ],
    /* Graph and diagram rules from the slides */
    rules: [
      ["Slope of an x/t graph", "Velocity"],
      ["A horizontal line on an x/t graph", "The object is at rest"],
      ["A curved line on an x/t graph", "The velocity is changing, so the object is accelerating"],
      ["Slope of a v/t graph", "Acceleration"],
      ["Area between a v/t line and the zero axis", "Displacement (area below the axis counts as negative)"],
      ["A v/t line crossing the zero axis", "The object changes direction"],
      ["A horizontal line on a v/t graph", "Constant velocity, zero acceleration"],
      ["A v/t line above the zero axis", "Moving in the positive direction"],
      ["A v/t line moving away from zero", "Speeding up"],
      ["A v/t line moving toward zero", "Slowing down"],
      ["Constant acceleration on an a/t graph", "A horizontal line"],
      ["What a v/t graph cannot tell you", "Where the object is (its position)"],
      ["Equally spaced dots", "Constant velocity"],
      ["Dots spreading farther apart", "Speeding up"],
      ["Vector arrows changing size", "The object is accelerating"]
    ],
    /* The equations and the variable each one is missing */
    equations: [
      ["Equation missing v<sub>f</sub>", E1],
      ["Equation missing t", E2],
      ["Equation missing d", E3],
      ["Equation missing a", E4],
      ["“Starts from rest”", "v<sub>i</sub> = 0 m/s"],
      ["“Comes to a stop”", "v<sub>f</sub> = 0 m/s"],
      ["The five kinematic variables", "d, v<sub>i</sub>, v<sub>f</sub>, a and t"],
      ["How to choose an equation", "Pick the one missing the variable that is not mentioned and not asked for."],
      ["Predicting a buggy collision", "Write a position equation for each buggy, set them equal, solve for t, then plug t back in for the position."]
    ],
    /* Pick the Equation drill: knowns + unknown, answer = equation missing the unused variable */
    eqChoices: [E1, E2, E3, E4],
    eqMissing: ["v<sub>f</sub>", "t", "d", "a"],
    pick: [
      ["A bike moving 6 m/s accelerates at 1.2 m/s/s for 5 s. How far does it go?", 0, "v<sub>i</sub>, a, t", "d"],
      ["A car starts from rest and reaches 20 m/s in 8 s. Find its acceleration.", 2, "v<sub>i</sub> (from rest), v<sub>f</sub>, t", "a"],
      ["A ball rolls 12 m while slowing from 5 m/s to 1 m/s. Find its acceleration.", 1, "v<sub>i</sub>, v<sub>f</sub>, d", "a"],
      ["A plane starts from rest and accelerates at 4 m/s/s down a 900 m runway. Find its takeoff speed.", 1, "v<sub>i</sub> (from rest), a, d", "v<sub>f</sub>"],
      ["A sled slows from 8 m/s to 2 m/s in 3 s. How far does it slide?", 3, "v<sub>i</sub>, v<sub>f</sub>, t", "d"],
      ["A cart starts from rest and rolls 15 m in 5 s with constant acceleration. What is its final speed?", 3, "v<sub>i</sub> (from rest), d, t", "v<sub>f</sub>"],
      ["A truck moving 18 m/s comes to a stop in 6 s. What is its acceleration?", 2, "v<sub>i</sub>, v<sub>f</sub> (comes to a stop), t", "a"],
      ["A runner starts from rest and accelerates at 2 m/s/s for 4 s. How fast is she going?", 2, "v<sub>i</sub> (from rest), a, t", "v<sub>f</sub>"],
      ["A car moving 30 m/s brakes at −5 m/s/s until it stops. How far does it travel?", 1, "v<sub>i</sub>, a, v<sub>f</sub> (stops)", "d"],
      ["A cart starts from rest and rolls 10 m in 5 s with constant acceleration. Find a.", 0, "v<sub>i</sub> (from rest), d, t", "a"],
      ["A boat slows from 9 m/s to rest over 27 m. How long does it take?", 3, "v<sub>i</sub>, v<sub>f</sub> (to rest), d", "t"],
      ["A scooter moving 4 m/s accelerates at 0.5 m/s/s for 6 s. What is its final velocity?", 2, "v<sub>i</sub>, a, t", "v<sub>f</sub>"]
    ],
    /* Where to review each topic, in her materials */
    review: {
      "Scalar vs. Vector": "Kinematics slides: Scalar vs. Vector, and Part 1 of the Kinematics Guide (Scalars and Vectors).",
      "Distance vs. Displacement": "Kinematics slides: Distance vs. Displacement, and the Distance vs. Displacement Concept Builder.",
      "Direction of Acceleration": "Kinematics slides: the “we do not use deceleration” slide and the positive or negative acceleration quadrants.",
      "Dot Diagrams": "Kinematics slides: Diagramming Motion and Dot Diagrams, plus Name That Motion in Part 2 of the Kinematics Guide.",
      "Dots and Graphs": "The Dots n Graphs Concept Builder, and the Putting Ideas Together slide.",
      "Vector Diagrams": "Kinematics slides: Vector Diagrams, and the Motion Diagram Challenge in Part 2 of the Kinematics Guide.",
      "Distance (x/t)": "Kinematics slides: Distance vs. Displacement x/t graph examples, and the Distance vs. Displacement Concept Builder.",
      "Displacement (x/t)": "Kinematics slides: Distance vs. Displacement (final position minus initial position), and the Distance vs. Displacement Concept Builder.",
      "Velocity (Slope)": "Kinematics slides: Slope Is Velocity, and the P/t Numerical Analysis Concept Builder.",
      "Comparing Speeds": "Kinematics slides: Slope Is Velocity (steeper slope, higher velocity), and the P/t Conceptual Analysis Concept Builder.",
      "Direction of Travel": "Kinematics slides: Slope Is Velocity (positive slope right, negative slope left), and the Walking Graphs conclusion.",
      "Curved x/t Graphs": "Kinematics slides: Putting Ideas Together (meaning of the shape of a p/t graph), and Part 3 of the Kinematics Guide.",
      "Matching Descriptions": "Walking Graphs 1 and 2, and the P/t Conceptual Analysis Concept Builder.",
      "Displacement (Area)": "Kinematics slides: Area Tells You Displacement, and packet pages 12 and 13.",
      "Acceleration (Slope)": "Kinematics slides: Slope Is Acceleration, and the V/t Graphs Concept Builder.",
      "What You Can't Know": "Kinematics slides: Velocity vs. Time Graphs (you do not know where something is from the graph).",
      "Changing Direction": "Kinematics slides: Interpreting V vs. T Graphs (direction is above or below the zero axis).",
      "Speeding Up vs. Slowing Down": "Kinematics slides: Interpreting V vs. T Graphs, and the Words & Graphs Concept Builder.",
      "Comparing Accelerations": "Kinematics slides: Slope Is Acceleration, and Which One Doesn't Belong.",
      "Matching Graphs": "Complete Stacks of Graphs (Acceleration Notes Packet pages 4 to 6), and Match That Graph.",
      "a/t Graphs": "Kinematics slides: Acceleration vs. Time Graphs, and Complete Stacks of Graphs in the Acceleration Notes Packet.",
      "Choosing an Equation": "Kinematics slides: Kinematics Equations (each one is missing a variable), and the reminders in Part 5 of the Kinematics Guide.",
      "Implied Values": "Kinematics slides: Common Pitfalls When Solving With Kinematic Equations.",
      "Solving for Distance": "Kinematics slides: Kinematics Equations Practice Example 1, and the 20 Kinematics Problems.",
      "Solving for Acceleration": "Kinematics slides: Kinematics Equations Practice Example 2, and the 20 Kinematics Problems.",
      "Solving for Velocity": "Kinematics slides: Example Problem 2 (drag racer), and the 20 Kinematics Problems.",
      "Solving for Time": "Kinematics slides: Example Problem 3 (The Other Method: find v<sub>f</sub> first, then t).",
      "Position Equations": "Constant Velocity Buggy Showdown lab, Part 2, steps 1 to 3 (making each buggy's position equation).",
      "Collision Time": "Constant Velocity Buggy Showdown lab, Part 2: set the two equations equal and solve for time.",
      "Collision Position": "Constant Velocity Buggy Showdown lab, Part 2: plug the time back into either equation.",
      "Catch-Up Collisions": "Constant Velocity Buggy Showdown lab: the collision variation, with both buggies moving the same way.",
      "Graphing Collisions": "Constant Velocity Buggy Showdown lab, Part 2: graphing both buggies and finding where the lines cross.",
      "Error Analysis": "Constant Velocity Buggy Showdown lab: the error analysis table on the final page."
    }
  };
})();
