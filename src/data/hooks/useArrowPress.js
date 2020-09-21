import { useEffect, useContext } from 'react';
import DateContextHandler from 'data/context';
import { DECREASE_ONE_DAY, INCREASE_ONE_DAY } from 'utils/constants';
// Hook
export function useArrowPress() {

    const {store} = DateContextHandler;
    const data = useContext(store)
    const { handleActiveDate} = data;

    function downHandler({ key }) {
      if (key === "ArrowRight") {
        handleActiveDate(INCREASE_ONE_DAY)
      } else if (key === "ArrowLeft") {
        handleActiveDate(DECREASE_ONE_DAY)
      } else return;
    }
  
    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  }
