export const json = {
  title: "How Open or Guarded You are",
  logoPosition: "left",
  showProgressBar: "top",
  showTimerPanel: "top",
  maxTimeToFinishPage: 20,
  pages: [
    {
      name: "startPage",
      elements: [
        {
          type: "html",
          name: "welcomeMsg",
          html: "<b>Take this quiz to find out how open or guarded you are.</b></br></br>\n",
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Question 1",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
              text: "I am generally open to getting to know new people and establishing relationships with them.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I prefer to take my time and be cautious when it comes to opening up to others and building relationships.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "I tend to keep certain aspects of my personal life guarded until I feel a deep sense of trust with someone.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I believe in maintaining a balance between being open to forming connections and protecting my own boundaries.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "Question2",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
              text: "I frequently make snap decisions without thoroughly considering all available information or alternatives.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I generally prefer making decisions promptly, relying on my instincts and initial impressions rather than extensive analysis.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "I occasionally find myself making hasty decisions, but I also recognize the importance of taking time to evaluate different options.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I tend to be more deliberate and thoughtful in my decision-making process, carefully weighing all relevant factors before taking action.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question3",
          title: "Question 3",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: true,
              },
              text: "I am highly protective of my time and rarely allow others to infringe upon it without a clear understanding of their intentions and the value they bring.",
            },
            {
              value: {
                v: [2, 1],
                isRev: true,
              },
              text: "I tend to be cautious when it comes to how others use my time, and I prioritize setting boundaries to ensure that it aligns with my own priorities and needs.",
            },
            {
              value: {
                v: [1, 2],
                isRev: true,
              },
              text: "While I am generally open to accommodating others, I am mindful about maintaining a sense of control over my time and evaluating requests before committing to them.",
            },
            {
              value: {
                v: [0, 3],
                isRev: true,
              },
              text: "I believe in being respectful of my own time and establishing healthy boundaries to ensure that it is utilized in a way that aligns with my personal and professional goals.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question4",
          title: "Question 4",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
              text: "I am typically proactive in initiating interactions and reaching out to others, as I enjoy taking the lead in social situations.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I often find myself being the one to initiate interactions, as I appreciate being in control of my social connections and enjoy taking the first step.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "While I generally feel comfortable initiating interactions, I also appreciate it when others take the initiative and reach out to me.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I tend to be more reserved when it comes to initiating interactions, preferring to wait for others to make the first move before engaging in social interactions.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question5",
          title: "Question 5",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
              text: "I prioritize engaging with others by focusing on their interests during conversations, even if it means diverting from the original topic at hand.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I often find myself steering conversations towards the interests of the people involved, as I believe it helps build stronger connections and fosters a more enjoyable interaction.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "While I generally try to accommodate the interests of others during conversations, I also recognize the importance of balancing it with the main subject or purpose of the discussion.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I tend to prefer sticking to the business or subject at hand during conversations, but I also value incorporating personal interests if it helps create a more engaging and enjoyable conversation.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question6",
          title: "Question 6",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: true,
              },
              text: "I am generally patient with others, even in challenging situations, and strive to understand their perspectives.",
            },
            {
              value: {
                v: [2, 1],
                isRev: true,
              },
              text: "I consider myself relatively patient with others, although there are times when my patience may be tested.",
            },
            {
              value: {
                v: [1, 2],
                isRev: true,
              },
              text: "I have some level of patience with others, but there are certain situations or behaviors that can make it challenging for me.",
            },
            {
              value: {
                v: [0, 3],
                isRev: true,
              },
              text: "I find it difficult to be patient with others, and I often struggle to understand or tolerate their actions or behaviors.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question7",
          title: "Question 7",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: true,
              },
              text: "I consistently rely on facts and evidence to make informed decisions, considering them as crucial factors in the decision-making process.",
            },
            {
              value: {
                v: [2, 1],
                isRev: true,
              },
              text: "I generally make decisions based on facts or evidence, although there may be instances where I also consider other factors or intuition.",
            },
            {
              value: {
                v: [1, 2],
                isRev: true,
              },
              text: "While I occasionally incorporate facts or evidence into my decision-making process, I also rely on other factors or my intuition to guide my choices.",
            },
            {
              value: {
                v: [0, 3],
                isRev: true,
              },
              text: "I rarely prioritize facts or evidence when making decisions, often relying on other factors or my intuition to guide my choices.",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "radiogroup",
          name: "question8",
          title: "Question 8",
          choices: [
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
              text: "I am comfortable and eager to share my opinions and ideas, often actively participating in discussions and conversations.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I generally feel comfortable sharing my opinions and ideas, but there are times when I prefer to listen and observe rather than actively contribute.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "While I have no issue sharing my opinions and ideas, I often prefer to wait for the right moment or be prompted before actively contributing to discussions.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I am hesitant and reluctant to share my opinions and ideas, often preferring to keep them to myself rather than actively participating in discussions.",
            },
          ],
        },
      ],
    },
  ],
  firstPageIsStarted: true,
};
