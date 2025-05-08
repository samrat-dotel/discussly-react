const questions = [
  {
    id: 1,
    date: "2025-05-07",
    category: "React",
    title: "How to lift state up in React?",
    questionText:
      "I am confused about lifting state in React. When and how should I lift state up?",
    views: 140,
    votes: 12,
    answerCount: 2,
    tags: ["react", "state"],
    answers: [
      {
        id: 1,
        answer: "Lifting state means moving state to a common ancestor.",
        timestamp: [2025, 5, 7],
        voteCount: 4,
        upVoted: false,
        user: {
          id: 2,
          name: "Aashish Thapa",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
      },
      {
        id: 2,
        answer: "Use it when multiple components share the same data.",
        timestamp: [2025, 5, 7],
        voteCount: 3,
        upVoted: true,
        user: {
          id: 3,
          name: "Sita Sharma",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    date: "2025-05-06",
    category: "Tailwind CSS",
    title: "Why is Tailwind class not applying?",
    questionText:
      "I'm adding Tailwind classes, but styles aren't showing up. What could be wrong?",
    views: 90,
    votes: 8,
    answerCount: 2,
    tags: ["tailwind", "css"],
    answers: [
      {
        id: 1,
        answer: "Check if Tailwind is properly set up in your config files.",
        timestamp: [2025, 5, 6],
        voteCount: 5,
        upVoted: false,
        user: {
          id: 4,
          name: "John Devkota",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        },
      },
      {
        id: 2,
        answer: "Sometimes purging removes unused classes unexpectedly.",
        timestamp: [2025, 5, 6],
        voteCount: 2,
        upVoted: false,
        user: {
          id: 5,
          name: "Mina Rai",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        },
      },
    ],
  },
  {
    id: 3,
    date: "2025-05-05",
    category: "JavaScript",
    title: "Difference between var, let and const?",
    questionText:
      "What are the differences between var, let, and const in JavaScript?",
    views: 200,
    votes: 25,
    answerCount: 2,
    tags: ["javascript", "variables"],
    answers: [
      {
        id: 1,
        answer:
          "`var` is function-scoped, while `let` and `const` are block-scoped.",
        timestamp: [2025, 5, 5],
        voteCount: 10,
        upVoted: true,
        user: {
          id: 6,
          name: "Kiran Basnet",
          avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        },
      },
      {
        id: 2,
        answer: "`const` is used when the variable shouldn't be reassigned.",
        timestamp: [2025, 5, 5],
        voteCount: 8,
        upVoted: false,
        user: {
          id: 7,
          name: "Rita K.C.",
          avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        },
      },
    ],
  },
  {
    id: 4,
    date: "2025-05-04",
    category: "Node.js",
    title: "Best practices for error handling in Express?",
    questionText:
      "What are some best practices to handle errors in an Express.js application?",
    views: 180,
    votes: 15,
    answerCount: 2,
    tags: ["nodejs", "express", "errors"],
    answers: [
      {
        id: 1,
        answer: "Use middleware for centralized error handling.",
        timestamp: [2025, 5, 4],
        voteCount: 6,
        upVoted: true,
        user: {
          id: 8,
          name: "Ramesh Bhattarai",
          avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        },
      },
      {
        id: 2,
        answer:
          "Always catch async errors using try-catch or libraries like express-async-errors.",
        timestamp: [2025, 5, 4],
        voteCount: 5,
        upVoted: false,
        user: {
          id: 9,
          name: "Bina Magar",
          avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        },
      },
    ],
  },
  {
    id: 5,
    date: "2025-05-03",
    category: "MongoDB",
    title: "How to model many-to-many relationships?",
    questionText:
      "What's the best way to implement many-to-many relationships in MongoDB?",
    views: 60,
    votes: 5,
    answerCount: 2,
    tags: ["mongodb", "schema", "relationships"],
    answers: [
      {
        id: 1,
        answer:
          "Use an intermediate (junction) collection to relate the two entities.",
        timestamp: [2025, 5, 3],
        voteCount: 3,
        upVoted: true,
        user: {
          id: 10,
          name: "Prakash Neupane",
          avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        },
      },
      {
        id: 2,
        answer:
          "Embedding arrays can also work but has limitations for large data.",
        timestamp: [2025, 5, 3],
        voteCount: 2,
        upVoted: false,
        user: {
          id: 11,
          name: "Sarita Ghimire",
          avatar: "https://randomuser.me/api/portraits/women/23.jpg",
        },
      },
    ],
  },
];

export default questions;
