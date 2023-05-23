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
              text: "I'm usually open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I'm ocasionally open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "I'm rarely open to getting to know people personally and establishing relationships with them.",
            },
            {
              value: {
                v: [0, 3],
                isRev: false,
              },
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
              value: {
                v: [0, 3],
                isRev: false,
              },
              text: "I tend to make quick decisions everytime",
            },
            {
              value: {
                v: [1, 2],
                isRev: false,
              },
              text: "I tend to take quick decisions ocassionally",
            },
            {
              value: {
                v: [2, 1],
                isRev: false,
              },
              text: "I tend to take quick decisions rarely",
            },
            {
              value: {
                v: [3, 0],
                isRev: false,
              },
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
              value: {
                v: [3, 0],
                isRev: true,
              },
              text: "I'm usually guarded about other people's use of my time.",
            },
            {
              value: {
                v: [2, 1],
                isRev: true,
              },
              text: "I'm occasionally guarded about other people's use of my time.",
            },
            {
              value: {
                v: [1, 2],
                isRev: true,
              },
              text: "I'm rarely guarded about other people's use of my time.",
            },
            {
              value: {
                v: [0, 3],
                isRev: true,
              },
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
                value: {
                  v: [0, 3],
                  isRev: true,
                },
                text: "I tend to initiate interactions everytime",
              },
              {
                value: {
                  v: [1, 2],
                  isRev: true,
                },
                text: "I tend to initiate interactions ocassionally",
              },
              {
                value: {
                  v: [2, 1],
                  isRev: true,
                },
                text: "I tend to initiate interactions rarely",
              },
              {
                value: {
                  v: [3, 0],
                  isRev: true,
                },
                text: "I tend to wait for others to initiate interactions with me.",
              },
            ],
          },
        ],
      },
  ],
  firstPageIsStarted: true,
};
