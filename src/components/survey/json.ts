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
              value: [3, 0],
              text: "I'm usually open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: [2, 1],
              text: "I'm ocasionally open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: [1, 2],
              text: "I'm rarely open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: [0, 3],
              text: "I'm not open to getting to know people personally and establishing relationships",
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
              value: [0, 3],
              text: "I tend to make quick decisions everytime",
            },
            {
              value: [1, 2],
              text: "I tend to take quick decisions ocassionally",
            },
            {
              value: [2, 1],
              text: "I tend to take quick decisions rarely",
            },
            {
              value: [3, 0],
              text: "I tend to take long time to make decisions",
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
              value: [3, 0],
              text: "I'm usually guarded about other people's use of my time.",
            },
            {
              value: [2, 1],
              text: "I'm occasionally guarded about other people's use of my time.",
            },
            {
              value: [1, 2],
              text: "I'm rarely guarded about other people's use of my time.",
            },
            {
              value: [0, 3],
              text: " I'm usually open to other people's use of my time",
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
                value: [0, 3],
                text: "I tend to initiate interactions everytime",
              },
              {
                value: [1, 2],
                text: "I tend to initiate interactions ocassionally",
              },
              {
                value: [2, 1],
                text: "I tend to initiate interactions rarely",
              },
              {
                value: [3, 0],
                text: "I tend to wait for others to initiate interactions with me.",
              },
            ],
          },
        ],
      },
  ],
  firstPageIsStarted: true,
};
