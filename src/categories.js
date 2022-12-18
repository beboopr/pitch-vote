const categories = [
  {
    label: 'Problem',
    value: 'problem',
    options: [
      { value: 1, label: '1: No problem given.' },
      { value: 2, label: '2: Not understood or not really a problem.' },
      { value: 3, label: '3: Somewhat understood and might need solved.' },
      { value: 4, label: '4: well defined; could be a need to solve it.' },
      { value: 5, label: '5: Clearly defined, explained, a definite need to solve it.' },
    ]
  },
  {
    label: 'Solution / Product',
    value: 'solution',
    options: [
      { value: 1, label: '1: No solution given.' },
      { value: 2, label: '2: Not understood or does not solve the problem.' },
      { value: 3, label: '3: Somewhat understood and might solve the problem.' },
      { value: 4, label: '4: well defined, a probable path to solving the problem.' },
      { value: 5, label: '5: Clearly defined, direct path to solve the problem.' },
    ]
  },
  {
    label: 'Target Market and Validation',
    value: 'market',
    options: [
      { value: 1, label: '1: None given or not at all understandable' },
      { value: 2, label: '2: Not appear accurate, complete, confusing, or not validated.' },
      { value: 3, label: '3: Accurate, somewhat validated. Product use in question.' },
      { value: 4, label: '4: Validated and potential for significant sales.' },
      { value: 5, label: '5: Fully validated and significant customers/revenue potential.' },
    ]
  },
  {
    label: 'Business/Revenue Model',
    value: 'model',
    options: [
      { value: 1, label: '1: Not given or not understandable.' },
      { value: 2, label: '2: Given, but not clear. Confusing.' },
      { value: 3, label: '3: Not viable or aligned with creating a profitable company.' },
      { value: 4, label: '4: Probably create a profitable company.' },
      { value: 5, label: '5: Aligned to create a highly profitable company.' },
    ]
  },
  {
    label: 'Traction',
    value: 'traction',
    options: [
      { value: 1, label: '1: There is no traction.' },
      { value: 2, label: '2: Traction is minimum.' },
      { value: 3, label: '3: Consistent but slow or does not support rapid advancement.' },
      { value: 4, label: '4: Good pace most likely leading to a successful company.' },
      { value: 5, label: '5: Traction is exceptional and will lead to a successful company.' },
    ]
  },
  {
    label: 'Roadmap',
    value: 'roadmap',
    options: [
      { value: 1, label: '1: There is no roadmap' },
      { value: 2, label: '2: The roadmap is minimal.' },
      { value: 3, label: '3: Missing some details, pace is questionable.' },
      { value: 4, label: '4: Significant details and aligned to most priorities.' },
      { value: 5, label: '5: Detailed, includes priorities for a successful company.' },
    ]
  },
  {
    label: 'Go-to-Market',
    value: 'execute',
    options: [
      { value: 1, label: '1: Little or no GTM strategy/execution.' },
      { value: 2, label: '2: Basic GTM with little impact on the success of the startup.' },
      { value: 3, label: '3: Details, idea of execution, not enough guarantee success.' },
      { value: 4, label: '4: Details, execution probably lead to a successful startup.' },
      { value: 5, label: '5: Details, execution leading to meeting financial goals.' },
    ]
  },
  {
    label: 'Team',
    value: 'team',
    options: [
      { value: 1, label: '1: The team is minimal, not enough to execute' },
      { value: 2, label: '2: Mostly in place, has most of the tools to be successful.' },
      { value: 3, label: '3: The team is in place and has the tools to reach the next level.' },
      { value: 4, label: '4: Complete and has the tools to become a successful company.' },
      { value: 5, label: '5: Perfect with all tools to become a successful company.' },
    ]
  },
  {
    label: 'Financials',
    value: 'financials',
    options: [
      { value: 1, label: '1: Little or no financials given' },
      { value: 2, label: '2: Financials are a minimum guess without basis.' },
      { value: 3, label: '3: Acceptable projects to guide to the next level.' },
      { value: 4, label: '4: Detailed, thought out to guide to the next level.' },
      { value: 5, label: '5: Detailed, analytical, and will lead to a successful company.' },
    ]
  },
  {
    label: 'Competition',
    value: 'competition',
    options: [
      { value: 1, label: '1: We have no competition' },
      { value: 2, label: '2: Little competitive analysis given.' },
      { value: 3, label: '3: Analysis given and contains the basics.' },
      { value: 4, label: '4: Good analysis that allows the startup to distinguish itself.' },
      { value: 5, label: '5: Excellent analysis showing a path to success.' },
    ]
  },
]

export default categories;
