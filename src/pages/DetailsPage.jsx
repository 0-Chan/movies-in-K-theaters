import { useParams } from 'react-router-dom';

import DetailsContainer from '../container/DetailsContainer';

export default function DetailsPage({ params }) {
  const { rank } = params || useParams();

  return (
    <div>
      <DetailsContainer rank={rank} />
    </div>
  );
}
