import { useRouter } from 'next/router';

const objectiveData = [
  {
    id: 1,
    islamic: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
    conventional: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
  },
  {
    id: 2,
    islamic: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
    conventional: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
  },
  {
    id: 3,
    islamic: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
    conventional: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
  },
  {
    id: 4,
    islamic: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
    conventional: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
  },
  {
    id: 5,
    islamic: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
    conventional: [
      {
        title: 'strong force',
        desc: 'Lorem ipsum etc hef ae j',
      },
    ],
  },
  // Add data for other objectives here
];

export default function ObjectivePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>; // Render a loading state initially
  }
  const objective = objectiveData[id];

  if (!objective) {
    return <h1>objective Not Found</h1>;
  }

  console.log('Router Query:', router.query);
  return <div>{objective.islamic[0].title}</div>;
}
