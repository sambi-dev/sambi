'use client';

// :: Courtesy of the smart folks at Basehub AI  https://basehub.ai ::
import { useEffect } from 'react';

import { mountVercelToolbar } from '@vercel/toolbar';

export const ToolbarProvider = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // mountVercelToolbar returns a cleanup function to unmount the toolbar
      return mountVercelToolbar();
    }
  }, []);

  return null;
};
