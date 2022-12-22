import { useEffect, useRef } from 'react';
import { drawChart } from '../utils';

export default function ChartComponent({ data }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
  }, [ref]);

  return (
    <div>
      <div ref={ref} />
    </div>
  );
}
