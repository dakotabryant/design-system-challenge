import type { ReactNode } from 'react';

// TODO: Define your variant type
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

// TODO: Define your props interface
export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  // Add more props as needed...
}

// TODO: Implement the Alert component
export function Alert({ 
  variant = 'info', 
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  // Your implementation here...
  
  return (
    <div>
      {/* Implement the Alert UI */}
      <p>Alert component - {variant}</p>
      {title && <strong>{title}</strong>}
      <div>{children}</div>
      {dismissible && (
        <button onClick={onDismiss}>Dismiss</button>
      )}
    </div>
  );
}

export default Alert;

