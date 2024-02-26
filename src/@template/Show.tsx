import React, { Children } from 'react';

interface ShowProps {
  children: React.ReactNode;
}

export const Show: React.FC<ShowProps> & {
  When: ({ isTrue, children }: { isTrue: boolean; children: React.ReactNode }) => React.ReactNode;
  Else: ({
    render,
    children,
  }: {
    render?: React.ReactNode;
    children?: React.ReactNode;
  }) => React.ReactNode;
} = (props) => {
  let when: React.ReactNode | null = null;
  let otherwise: React.ReactNode | null = null;

  Children.forEach(props.children, (child) => {
    if ((child as any).props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && (child as any).props.isTrue === true) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);
Show.Else = ({ render, children }) => render || children;
