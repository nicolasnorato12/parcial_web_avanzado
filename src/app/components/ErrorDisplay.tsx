'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

type ErrorDisplayProps = {
  error?: string;
};

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return null;
}