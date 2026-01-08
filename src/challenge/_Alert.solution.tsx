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

import { type ReactNode } from 'react';
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
  container: string;
  icon: string;
  title: string;
  body: string;
}> = {
  info: {
    container: 'bg-[var(--ds-color-info-50)] border-[var(--ds-color-info-200)]',
    icon: 'text-[var(--ds-color-info-500)]',
    title: 'text-[var(--ds-color-info-800)]',
    body: 'text-[var(--ds-color-info-700)]',
  },
  success: {
    container: 'bg-[var(--ds-color-success-50)] border-[var(--ds-color-success-200)]',
    icon: 'text-[var(--ds-color-success-500)]',
    title: 'text-[var(--ds-color-success-800)]',
    body: 'text-[var(--ds-color-success-700)]',
  },
  warning: {
    container: 'bg-[var(--ds-color-warning-50)] border-[var(--ds-color-warning-200)]',
    icon: 'text-[var(--ds-color-warning-500)]',
    title: 'text-[var(--ds-color-warning-800)]',
    body: 'text-[var(--ds-color-warning-700)]',
  },
  error: {
    container: 'bg-[var(--ds-color-error-50)] border-[var(--ds-color-error-200)]',
    icon: 'text-[var(--ds-color-error-500)]',
    title: 'text-[var(--ds-color-error-800)]',
    body: 'text-[var(--ds-color-error-700)]',
  },
};

// Map variants to their icons
const variantIcons: Record<AlertVariant, typeof IconInfo> = {
  info: IconInfo,
  success: IconCheckCircle,
  warning: IconExclamation,
  error: IconXCircle,
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
      className={`
        flex
        gap-[var(--ds-spacing-3)]
        p-[var(--ds-spacing-4)]
        border
        rounded-[var(--ds-radius-lg)]
        ${styles.container}
        ${className}
      `}
    >
      {/* Icon */}
      <div className={`shrink-0 ${styles.icon}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h3 
            className={`
              text-[var(--ds-font-size-sm)] 
              font-[var(--ds-font-weight-semibold)]
              ${styles.title}
              ${children ? 'mb-[var(--ds-spacing-1)]' : ''}
            `}
          >
            {title}
          </h3>
        )}
        
        {children && (
          <div className={`text-[var(--ds-font-size-sm)] ${styles.body}`}>
            {children}
          </div>
        )}

        {actions && (
          <div className="mt-[var(--ds-spacing-3)] flex gap-[var(--ds-spacing-3)]">
            {actions}
          </div>
        )}
      </div>

      {/* Dismiss Button */}
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          className={`
            shrink-0
            p-[var(--ds-spacing-1)]
            rounded-[var(--ds-radius-md)]
            ${styles.icon}
            hover:bg-black/5
            focus-ring
            transition-colors
          `}
          aria-label="Dismiss alert"
        >
          <IconX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default AlertSolution;

