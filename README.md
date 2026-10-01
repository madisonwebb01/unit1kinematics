# Unit 1: Kinematics Practice Test

A self-contained practice test for Pre-IB Chem/Phys students to prepare for the Unit 1 Kinematics test. Students answer first and see the explanation after. It runs in any browser with no install and no accounts.

## What is in it

40 questions, built from the "What's on the kinematics test" doc, the Unit 1 Kinematics slides, the Kinematics Guide, and the Constant Velocity Buggy Showdown lab.

| Section | Questions | Covers |
|---|---|---|
| Vocab & Diagrams | 6 | Scalar vs. vector, distance vs. displacement, direction of acceleration, dot and vector diagrams |
| x/t Graphs | 10 | Distance, displacement, velocity (slope), direction, comparing speeds, curved graphs, direction of acceleration, matching descriptions |
| v/t & a/t Graphs | 10 | Displacement (area), acceleration (slope), changing direction, speeding up vs. slowing down, what you can't know, matching a/t graphs |
| Kinematic Equations | 8 | Choosing an equation, implied values, solving for d, a, v and t (including the two-step "find v<sub>f</sub> first" method) |
| Buggy Collisions | 6 | Position equations, collision time and position, catch-up collisions, reading a collision graph, error analysis |

Graph questions are multiple choice and calculations are type-in, like the Kinematics Practice Quiz. Every graph and dot diagram is drawn by the page from exact numbers, so it stays sharp on phones and projectors.

**Practice Test tab:** section chips, Mixed, Missed only and Flagged views, plus Unseen first, Shuffle questions and Shuffle answers toggles. After each answer: right or wrong, why every choice works or fails (or how to solve it and why the common wrong numbers happen), and a "Where to review this" line pointing to the slide or lab.

**Additional Practice Tools tab:** Vocab Flashcards (the Kinematics Guide vocab list), Graph Rules, Equation Flashcards, Pick the Equation (choose the equation missing the unused variable, no math), and Distractor Autopsy (every wrong answer in the test: say why it fails, then check).

**My Review tab:** Missed, Flagged, All answered and Correct lists with the student's answer, the correct answer and the explanations.

Progress is saved in the student's browser only. It does not sync across devices and never reaches the teacher.

## Put it on GitHub Pages

1. Sign in at github.com and click **New repository**. Name it something like `kinematics-practice`.
2. Set the repository to **Public**. Free GitHub Pages only works on public repositories.
3. Click **uploading an existing file**. Open the folder, select **all of the files inside it** (index.html, the .js files and this README) and drag them in. Upload the files themselves, not the folder that contains them.
4. Click **Commit changes**.
5. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
6. Wait a minute or two and refresh. The link appears at the top of the Pages screen, like `https://yourname.github.io/kinematics-practice/`.

**Troubleshooting:** if the page loads (title and colors show) but no questions ever appear, the files were uploaded inside a subfolder. Make sure index.html and the .js files sit at the top level of the repository, not inside another folder.

## Add or edit questions

Each section is its own file: `vocab.js`, `position-time.js`, `velocity-time.js`, `equations.js`, `buggy.js`. To add a question, copy an existing one in the same file, give it the next `n`, and edit it.

Multiple choice:

```js
{
  n: 7,
  topic: "Dot Diagrams",          // must match a key in tools.js "review"
  stem: "Context sentence.<br><b>Bolded question?</b>",
  fig: function () { return G.plot({ ... }); },   // optional graph
  opts: [
    ["Wrong choice", 0, "Why this one fails."],
    ["Right choice", 1, "Correct. Why this one works."]
  ]
}
```

Type-in (number) answer:

```js
{
  n: 11,
  topic: "Velocity (Slope)",
  stem: "<b>Determine the velocity ...</b><br>Nearest whole number, no units.",
  type: "num", answer: -4, tol: 0.5, unit: "m/s",
  work: "How to solve it, step by step.",
  traps: [[4, 0.5, "Why a student might get 4 and why it is wrong."]]
}
```

`tol` is how close counts as correct: use 0.5 for "nearest whole number" and 0.05 for "nearest tenth".

Graphs: `G.plot({ x:{min,max,step,label}, y:{min,max,step,label}, series:[{ pts:[[time,value], ...] }] })` draws straight segments through the points. Add `label: "A"` to a series for multi-line graphs. A curve uses `fn: function (t) { return ... }, from: 0, to: 6` instead of `pts`.

If you add a new `topic`, also add a line for it under `review` in `tools.js` so the "Where to review this" line has somewhere to point.

## Teacher notes

- **All questions are new.** None are copied from the Basic Motion Quiz, the Kinematics Practice Quiz, or the Kinematics Test forms, so your live assessments stay unseen. The two quiz PDFs were used only for wording and format.
- **No significant figures.** Type-in answers ask for the nearest whole number or nearest tenth, and anything within that rounding is accepted.
- **No free fall.** Questions about dropped or thrown objects were left out, as requested.
- **Units are blocked, not marked wrong.** If a student types "14 m", the page asks them to remove the units before it grades the answer.
- **Course conventions followed:** no use of "deceleration"; a/t graphs shown as horizontal segments; the equations appear exactly as written on the slides.
- Every answer key was checked twice: once by script (one correct option per question, no empty explanations, every topic has a review source) and once by an independent recalculation of every slope, area and equation.

Created using Claude by Madison Webb, 2026.
Anthropic. (2026). *Claude* [large language model]. https://claude.ai
