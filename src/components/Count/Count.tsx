import { useState } from 'react';

interface CountProps {
  globalData: Record<string, any>;
}

export function Count({}: CountProps) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
