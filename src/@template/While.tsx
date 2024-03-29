import React, { ReactNode } from 'react';

interface WhileProps {
  condition: boolean;
  children: React.ReactNode;
}

export const While: React.FC<WhileProps> = ({ condition, children }): ReactNode | null =>
  condition ? <>{children}</> : null;
