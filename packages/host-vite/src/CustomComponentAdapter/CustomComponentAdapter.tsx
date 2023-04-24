import { useEffect, useState } from 'react';
import { loadRemoteModule } from './loadRemoteModule';

export interface CustomComponentAdapterProps {
  url: string;
}

export function CustomComponentAdapter({ url }: CustomComponentAdapterProps) {
  const [RemoteSource, setRemoteSource] = useState<{
    Component: React.FC<any>;
  }>();

  useEffect(() => {
    (async () => {
      const myModule = await loadRemoteModule(url);
      setRemoteSource({ Component: myModule });
    })();
  }, [url]);

  return RemoteSource ? <RemoteSource.Component message='world' /> : null;
}
