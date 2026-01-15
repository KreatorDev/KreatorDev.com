import { BlogPostType } from '@/components/blog/BlogPost';

export const blogPosts: BlogPostType[] = [
  {
    title: "A Week in Cambridge, UK: What I Learned",
    date: "April 17, 2025",
    author: "Anaïs Killian",
    coverImage: "/blog/cambridge/uk.png",
    content: `I recently went to Cambridge, UK for a week, for a research program. Here is what I learned.`,
    writing: `
<p>I'm a member of the Harvard AI Safety Team, and we have a Slack channel called opportunities dedicated to sharing links to AI-related applications, events, conferences, and other initiatives. Just before spring break, there was a link for the <a href="https://www.meridiancambridge.org/visiting-researcher-programme" target="_blank" rel="noopener noreferrer">Meridian Researchers Programme</a>: a week-long AI Safety Research Fellowship dedicated to developing “compelling research projects while preparing proposals for Open Philanthropy's $40 million AI safety research initiative.” I decided to write my application over spring break, and just a week later I was accepted. Even though I love my routine and I would miss a week of school, a week of meetings, a week of my own research, I immediately said yes.</p>

<p>Being a part of this network from Cambridge, UK, thousands of miles from the Harvard campus, made the world feel a little smaller and AI Safety work feel a little more connected. A day of the program typically went as follows: we would have workshops in the morning, such as on grant writing, project planning and management, and the theory of change. The afternoon would entail finding teammates and working together to propose a 6-12 month research project, for which we would submit a grant proposal to Open Philanthropy.</p>

<p>Submitting a proposal was a two-part process: First, you submit a brief(er) outline of your project, detailing what your research is, what findings it would aim to generate, and how you would measure success. Then, if that is accepted by OpenPhil, you complete a much more elaborate application, which hones in on the specifics of your project, team, proposed budget, and research background.</p>

<p>Typically, this entire process can take anywhere from 5 weeks to 4 months. Though long and elaborate, it ensures OpenPhil funds the right projects and the best people.</p>

<p>Here are some takeaways (among many) from this research program:</p>
<ul>
  <li>Red-team and blue-teaming is probably the most effective way to iron out your research. Sit down with another individual or small group and they may very well find an aspect of your project that does not make sense or something you overlooked.</li>
  <li>Know the most important papers in your research field by author, title, and date. Researchers will reference these over and over again, and you should know the context of the paper with regard to timeline and impact.</li>
  <li>Your research should be goal-driven, not idea-driven. It is easy to conflate these two. When creating a research project, one of the central questions upfront should be: what research outputs would this produce, and why are these beneficial?</li>
  <li>Cold email researchers, maybe something like “I'll take you out to lunch if you can explain your research to me.” Most researchers genuinely enjoy talking to others about their work, and you can also get the chance to ask them questions about your own research or interests.</li>
  <li>Finally, as emphasized by <a href="https://www.arena.education/david-quarel" target="_blank" rel="noopener noreferrer">David Quarel</a>, Head Teaching Fellow for Arena, make sure your experiments stay in touch with reality. Have a ground-truth measure, not just proxies, and you should have at least one golden measure (validation loss, accuracy, etc.) so that others can understand your results.</li>
</ul>

<p>Importantly, I think this program taught me to apply to more unexpected applications I see in my Slack, and say yes to things.</p>
`,

    images: [
      {
        src: "/blog/cambridge/notebook.png",
        alt: "Notebook",
        caption: "A diagram outlining a potential project on testing multi-agent RLHF deception."
      },
      {
        src: "/blog/cambridge/walk.png",
        alt: "A Cambridge Walk",
        caption: "Cambridge had an incredible juxtaposition between its business and liveliness, and its quiet, reflective streets."
      },
      {
        src: "/blog/cambridge/water.png",
        alt: "Cambridge University",
        caption: "Have you ever tried Punting?"
      },
      {
        src: "/blog/cambridge/wheel.png",
        alt: "A Ferris Wheel",
        caption: "My walk every morning to the office included this beautiful view."
      }
    ]
  },
  {
    title: "Research is like Playing Piano",
    date: "April 20, 2025",
    author: "Anaïs Killian",
    coverImage: "/blog/piano/ml.png",
    content: `You have to overcome the inertia.`,
    writing: `
<p>Research is like playing piano. Sometimes it can be intimidating to start: an experiment, creating new algorithms, and forming new research ideas, as you are nervous you may run into a terrible feeling: confusion.</p>
<p>The start of a session could begin with frustration, which is not a pleasant feeling. However, after some time into the session, things become at a “flow”: you know what has to be done.</p>
<p>Playing piano for me as a kid was the same way. I felt a lot of the same sensations.</p>
Sometimes with research I feel nostalgic of this: the same feelings that I felt when playing piano.
<p>I've learned that you just have to overcome the inertia: you just have to start, and then after a couple minutes you reach flow state.</p>
`,
  }
];
