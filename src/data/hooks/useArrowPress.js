import { useEffect, useContext, useCallback } from 'react';
import DataContextHandler from 'data/context';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants';
// Hook
export function useArrowPress() {
  const { store } = DataContextHandler;
  const data = useContext(store);
  const { handleActiveDate } = data;

  const downHandler = useCallback(
    ({ key }) => {
      if (key === 'ArrowRight') {
        handleActiveDate(INCREASE_ONE_DAY);
      } else if (key === 'ArrowLeft') {
        handleActiveDate(DECREASE_ONE_DAY);
      } else return;
    },
    [handleActiveDate]
  );

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]); // Empty array ensures that effect is only run on mount and unmount
}
