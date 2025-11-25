'use client';

import disableDevtool from 'disable-devtool';
import { useEffect } from 'react';

export default function DevToolsBlocker() {
  useEffect(() => {
    disableDevtool();
  }, []);
  return <></>;
}
