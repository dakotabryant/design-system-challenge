import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * BUTTON COMPONENT
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This is an example component in our design system demonstrating:
 * - TypeScript prop definitions with proper types
 * - Variant and size patterns
 * - Usage of design tokens via Tailwind/CSS variables
 * - Forwarding refs for DOM access
 * - Composition patterns with slots (icons)
 * 
 * Candidates can reference this component's patterns when building their own.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Optional icon to display before the label */
  leftIcon?: ReactNode;
  /** Optional icon to display after the label */
  rightIcon?: ReactNode;
  /** Whether the button takes full width of its container */
  fullWidth?: boolean;
  /** Loading state - disables button and shows spinner */
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--ds-color-primary-600)] 
    text-[var(--ds-color-text-inverse)] 
    hover:bg-[var(--ds-color-primary-700)] 
    active:bg-[var(--ds-color-primary-800)]
  `,
  secondary: `
    bg-[var(--ds-color-surface)] 
    text-[var(--ds-color-text-primary)] 
    border border-[var(--ds-color-border)]
    hover:bg-[var(--ds-color-surface-raised)]
    active:bg-[var(--ds-color-neutral-200)]
  `,
  ghost: `
    bg-transparent 
    text-[var(--ds-color-text-primary)] 
    hover:bg-[var(--ds-color-neutral-100)]
    active:bg-[var(--ds-color-neutral-200)]
  `,
  destructive: `
    bg-[var(--ds-color-error-600)] 
    text-[var(--ds-color-text-inverse)] 
    hover:bg-[var(--ds-color-error-700)]
    active:bg-[var(--ds-color-error-800)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-[var(--ds-spacing-3)] py-[var(--ds-spacing-1)] text-[var(--ds-font-size-sm)] gap-[var(--ds-spacing-1)]',
  md: 'px-[var(--ds-spacing-4)] py-[var(--ds-spacing-2)] text-[var(--ds-font-size-sm)] gap-[var(--ds-spacing-2)]',
  lg: 'px-[var(--ds-spacing-6)] py-[var(--ds-spacing-3)] text-[var(--ds-font-size-base)] gap-[var(--ds-spacing-2)]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      isLoading = false,
      disabled,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`
          inline-flex items-center justify-center
          font-[var(--ds-font-weight-medium)]
          rounded-[var(--ds-radius-lg)]
          transition-colors duration-[var(--ds-transition-fast)]
          focus-ring
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

/** Simple loading spinner for button loading state */
function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default Button;

