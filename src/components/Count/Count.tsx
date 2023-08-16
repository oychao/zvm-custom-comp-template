/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
import { useState } from 'react';

interface CountProps {
  globalData: Record<string, any>;
}

export function Count(props: CountProps) {
  console.log(props);
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
