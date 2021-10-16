import { useState, useEffect } from 'react';
import { TimeLineUtils } from '../../util/TimeLineUtils';

export const useTimeLineMarkerPosition = () => {
  const [markerPosition, setMarkerPosition] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const value = TimeLineUtils.getPercentages(
      today,
      today
    ).start_in_percentage;

    if (markerPosition === '') {
      setMarkerPosition(value);
    } else {
      const timer = setTimeout(() => setMarkerPosition(value), 10000);
      return () => clearTimeout(timer);
    }
  }, [markerPosition]);

  return markerPosition;
};
