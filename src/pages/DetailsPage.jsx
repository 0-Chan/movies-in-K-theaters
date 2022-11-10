import { useParams } from 'react-router-dom';

import DetailsContainer from '../container/DetailsContainer';

export default function DetailsPage() {
  const { rank } = useParams();
  return (
    <div>
      <DetailsContainer rank={rank} />
    </div>
  );
}
