import { useState } from 'react';
import { Button } from './components';
import { Playground } from './challenge/Playground';
import { IconStar } from './utils/icons';

function App() {
  const [activeTab, setActiveTab] = useState<'challenge' | 'reference'>('challenge');

  return (
    <div className="min-h-screen bg-[var(--ds-color-background)]">
      {/* Header */}
      <header className="border-b border-[var(--ds-color-border)] bg-[var(--ds-color-surface)]">
        <div className="max-w-5xl mx-auto px-[var(--ds-spacing-6)] py-[var(--ds-spacing-4)]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[var(--ds-font-size-2xl)] font-[var(--ds-font-weight-bold)] text-[var(--ds-color-text-primary)]">
                Design System Challenge
              </h1>
              <p className="text-[var(--ds-font-size-sm)] text-[var(--ds-color-text-secondary)] mt-[var(--ds-spacing-1)]">
                Frontend Engineer - Design Systems Interview
              </p>
            </div>
            <div className="flex items-center gap-[var(--ds-spacing-2)] text-[var(--ds-font-size-sm)] text-[var(--ds-color-text-tertiary)]">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                45 minutes
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-[var(--ds-color-border)] bg-[var(--ds-color-surface)]">
        <div className="max-w-5xl mx-auto px-[var(--ds-spacing-6)]">
          <div className="flex gap-[var(--ds-spacing-6)]">
            <button
              onClick={() => setActiveTab('challenge')}
              className={`
                py-[var(--ds-spacing-3)] 
                border-b-2 
                text-[var(--ds-font-size-sm)] 
                font-[var(--ds-font-weight-medium)]
                transition-colors
                ${activeTab === 'challenge' 
                  ? 'border-[var(--ds-color-primary-600)] text-[var(--ds-color-primary-600)]' 
                  : 'border-transparent text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)]'
                }
              `}
            >
              Challenge Playground
            </button>
            <button
              onClick={() => setActiveTab('reference')}
              className={`
                py-[var(--ds-spacing-3)] 
                border-b-2 
                text-[var(--ds-font-size-sm)] 
                font-[var(--ds-font-weight-medium)]
                transition-colors
                ${activeTab === 'reference' 
                  ? 'border-[var(--ds-color-primary-600)] text-[var(--ds-color-primary-600)]' 
                  : 'border-transparent text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)]'
                }
              `}
            >
              Reference Components
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-[var(--ds-spacing-6)] py-[var(--ds-spacing-8)]">
        {activeTab === 'challenge' ? (
          <div>
            {/* Instructions Card */}
            <div className="mb-[var(--ds-spacing-8)] p-[var(--ds-spacing-6)] bg-[var(--ds-color-primary-50)] border border-[var(--ds-color-primary-200)] rounded-[var(--ds-radius-xl)]">
              <h2 className="text-[var(--ds-font-size-lg)] font-[var(--ds-font-weight-semibold)] text-[var(--ds-color-primary-900)] mb-[var(--ds-spacing-3)]">
                Your Challenge: Build an Alert Component
              </h2>
              <div className="text-[var(--ds-font-size-sm)] text-[var(--ds-color-primary-800)] space-y-[var(--ds-spacing-2)]">
                <p>
                  Create a reusable <code className="px-1.5 py-0.5 bg-[var(--ds-color-primary-100)] rounded">Alert</code> component 
                  for our design system. Your component should support:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-[var(--ds-spacing-2)]">
                  <li><strong>Variants:</strong> info, success, warning, error</li>
                  <li><strong>Optional title</strong> with body content</li>
                  <li><strong>Dismissible</strong> with close button and callback</li>
                  <li><strong>Stretch:</strong> Icons and action buttons</li>
                </ul>
                <p className="mt-[var(--ds-spacing-3)]">
                  Edit <code className="px-1.5 py-0.5 bg-[var(--ds-color-primary-100)] rounded">src/challenge/Alert.tsx</code> to 
                  implement your component. Use the design tokens in <code className="px-1.5 py-0.5 bg-[var(--ds-color-primary-100)] rounded">src/index.css</code>.
                </p>
              </div>
            </div>

            {/* Playground */}
            <Playground />
          </div>
        ) : (
          <div className="space-y-[var(--ds-spacing-8)]">
            {/* Reference: Button Component */}
            <section>
              <h2 className="text-[var(--ds-font-size-xl)] font-[var(--ds-font-weight-semibold)] mb-[var(--ds-spacing-2)]">
                Button Component
              </h2>
              <p className="text-[var(--ds-color-text-secondary)] text-[var(--ds-font-size-sm)] mb-[var(--ds-spacing-4)]">
                Reference implementation showing variant patterns, sizes, and icon slots.
                See <code className="px-1.5 py-0.5 bg-[var(--ds-color-neutral-100)] rounded">src/components/Button/Button.tsx</code>
              </p>
              
              <div className="p-[var(--ds-spacing-6)] bg-[var(--ds-color-surface-raised)] rounded-[var(--ds-radius-xl)] border border-[var(--ds-color-border)]">
                <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-[var(--ds-spacing-3)] mb-[var(--ds-spacing-6)]">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>

                <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                  Sizes
                </h3>
                <div className="flex flex-wrap items-center gap-[var(--ds-spacing-3)] mb-[var(--ds-spacing-6)]">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>

                <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                  With Icons
                </h3>
                <div className="flex flex-wrap gap-[var(--ds-spacing-3)] mb-[var(--ds-spacing-6)]">
                  <Button leftIcon={<IconStar className="w-4 h-4" />}>
                    Left Icon
                  </Button>
                  <Button rightIcon={<IconStar className="w-4 h-4" />}>
                    Right Icon
                  </Button>
                </div>

                <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                  States
                </h3>
                <div className="flex flex-wrap gap-[var(--ds-spacing-3)]">
                  <Button disabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </section>

            {/* Design Tokens Reference */}
            <section>
              <h2 className="text-[var(--ds-font-size-xl)] font-[var(--ds-font-weight-semibold)] mb-[var(--ds-spacing-2)]">
                Design Tokens
              </h2>
              <p className="text-[var(--ds-color-text-secondary)] text-[var(--ds-font-size-sm)] mb-[var(--ds-spacing-4)]">
                Available tokens defined in <code className="px-1.5 py-0.5 bg-[var(--ds-color-neutral-100)] rounded">src/index.css</code>
              </p>

              <div className="grid gap-[var(--ds-spacing-6)]">
                {/* Colors */}
                <div className="p-[var(--ds-spacing-6)] bg-[var(--ds-color-surface-raised)] rounded-[var(--ds-radius-xl)] border border-[var(--ds-color-border)]">
                  <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                    Semantic Colors
                  </h3>
                  <div className="grid grid-cols-4 gap-[var(--ds-spacing-4)]">
                    {['info', 'success', 'warning', 'error'].map((color) => (
                      <div key={color} className="space-y-[var(--ds-spacing-2)]">
                        <div className="text-[var(--ds-font-size-xs)] font-[var(--ds-font-weight-medium)] uppercase tracking-wide text-[var(--ds-color-text-tertiary)]">
                          {color}
                        </div>
                        <div className="flex gap-1">
                          <div 
                            className="w-8 h-8 rounded" 
                            style={{ backgroundColor: `var(--ds-color-${color}-50)` }}
                            title={`--ds-color-${color}-50`}
                          />
                          <div 
                            className="w-8 h-8 rounded" 
                            style={{ backgroundColor: `var(--ds-color-${color}-500)` }}
                            title={`--ds-color-${color}-500`}
                          />
                          <div 
                            className="w-8 h-8 rounded" 
                            style={{ backgroundColor: `var(--ds-color-${color}-700)` }}
                            title={`--ds-color-${color}-700`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacing */}
                <div className="p-[var(--ds-spacing-6)] bg-[var(--ds-color-surface-raised)] rounded-[var(--ds-radius-xl)] border border-[var(--ds-color-border)]">
                  <h3 className="text-[var(--ds-font-size-sm)] font-[var(--ds-font-weight-medium)] text-[var(--ds-color-text-secondary)] mb-[var(--ds-spacing-4)]">
                    Spacing Scale
                  </h3>
                  <div className="flex items-end gap-[var(--ds-spacing-3)]">
                    {[1, 2, 3, 4, 6, 8].map((n) => (
                      <div key={n} className="text-center">
                        <div 
                          className="bg-[var(--ds-color-primary-500)] rounded-sm mb-[var(--ds-spacing-2)]"
                          style={{ 
                            width: `var(--ds-spacing-${n})`,
                            height: `var(--ds-spacing-${n})`
                          }}
                        />
                        <div className="text-[var(--ds-font-size-xs)] text-[var(--ds-color-text-tertiary)]">
                          {n}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
