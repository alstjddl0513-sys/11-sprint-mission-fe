import { useEffect, useState } from 'react';

export function usePageSize() {
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 744) {
        setPageSize(10);
      } else if (width > 375) {
        setPageSize(6);
      } else {
        setPageSize(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return pageSize;
}
