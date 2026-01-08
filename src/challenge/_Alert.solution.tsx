/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                                                                           ║
 * ║                    🔒 SOLUTION REFERENCE (FOR INTERVIEWERS)               ║
 * ║                                                                           ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 * 
 * This is a reference implementation showing ONE possible solution.
 * Candidates don't need to match this exactly - evaluate their approach!
 * 
 * Key things to look for:
 * - Clean prop interface with TypeScript
 * - Token usage (not hardcoded values)
 * - Variant styling pattern
 * - Accessibility considerations
 * - Code organization
 */

import { type ReactNode, type CSSProperties } from 'react';
import { 
  IconInfo, 
  IconCheckCircle, 
  IconExclamation, 
  IconXCircle,
  IconX 
} from '../utils/icons';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  /** Visual variant determining colors and icon */
  variant?: AlertVariant;
  /** Optional title displayed above the message */
  title?: string;
  /** Main content of the alert */
  children: ReactNode;
  /** Whether to show a dismiss button */
  dismissible?: boolean;
  /** Callback when dismiss button is clicked */
  onDismiss?: () => void;
  /** Optional action buttons to display */
  actions?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

// Variant-specific styling using design tokens
const variantStyles: Record<AlertVariant, {
  container: CSSProperties;
  icon: CSSProperties;
  title: CSSProperties;
  body: CSSProperties;
}> = {
  info: {
    container: { 
      backgroundColor: 'var(--ds-color-info-50)', 
      borderColor: 'var(--ds-color-info-200)' 
    },
    icon: { color: 'var(--ds-color-info-500)' },
    title: { color: 'var(--ds-color-info-800)' },
    body: { color: 'var(--ds-color-info-700)' },
  },
  success: {
    container: { 
      backgroundColor: 'var(--ds-color-success-50)', 
      borderColor: 'var(--ds-color-success-200)' 
    },
    icon: { color: 'var(--ds-color-success-500)' },
    title: { color: 'var(--ds-color-success-800)' },
    body: { color: 'var(--ds-color-success-700)' },
  },
  warning: {
    container: { 
      backgroundColor: 'var(--ds-color-warning-50)', 
      borderColor: 'var(--ds-color-warning-200)' 
    },
    icon: { color: 'var(--ds-color-warning-500)' },
    title: { color: 'var(--ds-color-warning-800)' },
    body: { color: 'var(--ds-color-warning-700)' },
  },
  error: {
    container: { 
      backgroundColor: 'var(--ds-color-error-50)', 
      borderColor: 'var(--ds-color-error-200)' 
    },
    icon: { color: 'var(--ds-color-error-500)' },
    title: { color: 'var(--ds-color-error-800)' },
    body: { color: 'var(--ds-color-error-700)' },
  },
};

// Map variants to their icons
const variantIcons: Record<AlertVariant, typeof IconInfo> = {
  info: IconInfo,
  success: IconCheckCircle,
  warning: IconExclamation,
  error: IconXCircle,
};

// Base styles using tokens
const baseStyles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    gap: 'var(--ds-spacing-3)',
    padding: 'var(--ds-spacing-4)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'var(--ds-radius-lg)',
  },
  iconWrapper: {
    flexShrink: 0,
  },
  icon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 'var(--ds-font-size-sm)',
    fontWeight: 'var(--ds-font-weight-semibold)',
  },
  body: {
    fontSize: 'var(--ds-font-size-sm)',
  },
  actions: {
    marginTop: 'var(--ds-spacing-3)',
    display: 'flex',
    gap: 'var(--ds-spacing-3)',
  },
  dismissButton: {
    flexShrink: 0,
    padding: 'var(--ds-spacing-1)',
    border: 'none',
    borderRadius: 'var(--ds-radius-md)',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background-color var(--ds-transition-fast)',
  },
  dismissIcon: {
    width: '1rem',
    height: '1rem',
  },
};

export function AlertSolution({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  actions,
  className = '',
}: AlertProps) {
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];

  return (
    <div
      role="alert"
      className={className}
      style={{
        ...baseStyles.container,
        ...styles.container,
      }}
    >
      {/* Icon */}
      <div style={{ ...baseStyles.iconWrapper, ...styles.icon }}>
        <Icon style={baseStyles.icon} />
      </div>

      {/* Content */}
      <div style={baseStyles.content}>
        {title && (
          <h3 
            style={{
              ...baseStyles.title,
              ...styles.title,
              marginBottom: children ? 'var(--ds-spacing-1)' : 0,
            }}
          >
            {title}
          </h3>
        )}
        
        {children && (
          <div style={{ ...baseStyles.body, ...styles.body }}>
            {children}
          </div>
        )}

        {actions && (
          <div style={baseStyles.actions}>
            {actions}
          </div>
        )}
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          style={{
            ...baseStyles.dismissButton,
            ...styles.icon,
          }}
          aria-label="Dismiss alert"
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <IconX style={baseStyles.dismissIcon} />
        </button>
      )}
    </div>
  );
}

export default AlertSolution;
