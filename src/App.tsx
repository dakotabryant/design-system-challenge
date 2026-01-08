import { useState } from 'react';
import { Button } from './components';
import { Playground } from './challenge/Playground';
import { IconStar } from './utils/icons';
import styles from './App.module.css';

function App() {
  const [activeTab, setActiveTab] = useState<'challenge' | 'reference'>('challenge');

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h1 className={styles.title}>Design System Challenge</h1>
            <p className={styles.subtitle}>Frontend Engineer - Design Systems Interview</p>
          </div>
          <div className={styles.timer}>
            <svg className={styles.timerIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            45 minutes
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <button
            onClick={() => setActiveTab('challenge')}
            className={`${styles.tab} ${activeTab === 'challenge' ? styles.tabActive : ''}`}
          >
            Challenge Playground
          </button>
          <button
            onClick={() => setActiveTab('reference')}
            className={`${styles.tab} ${activeTab === 'reference' ? styles.tabActive : ''}`}
          >
            Reference Components
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        {activeTab === 'challenge' ? (
          <div>
            {/* Instructions Card */}
            <div className={styles.instructionsCard}>
              <h2 className={styles.instructionsTitle}>
                Your Challenge: Build an Alert Component
              </h2>
              <div className={styles.instructionsBody}>
                <p>
                  Create a reusable <code className={styles.code}>Alert</code> component 
                  for our design system. Your component should support:
                </p>
                <ul>
                  <li><strong>Variants:</strong> info, success, warning, error</li>
                  <li><strong>Optional title</strong> with body content</li>
                  <li><strong>Dismissible</strong> with close button and callback</li>
                  <li><strong>Stretch:</strong> Icons and action buttons</li>
                </ul>
                <p>
                  Edit <code className={styles.code}>src/challenge/Alert.tsx</code> to 
                  implement your component. Use the design tokens in <code className={styles.code}>src/index.css</code>.
                </p>
              </div>
            </div>

            {/* Playground */}
            <Playground />
          </div>
        ) : (
          <div>
            {/* Reference: Button Component */}
            <section className={styles.referenceSection}>
              <h2 className={styles.sectionTitle}>Button Component</h2>
              <p className={styles.sectionDescription}>
                Reference implementation showing variant patterns, sizes, and icon slots.
                See <code className={styles.codeInline}>src/components/Button/Button.tsx</code>
              </p>
              
              <div className={styles.demoCard}>
                <h3 className={styles.demoLabel}>Variants</h3>
                <div className={styles.demoRow}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>

                <h3 className={styles.demoLabel}>Sizes</h3>
                <div className={styles.demoRow}>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>

                <h3 className={styles.demoLabel}>With Icons</h3>
                <div className={styles.demoRow}>
                  <Button leftIcon={<IconStar style={{ width: '1rem', height: '1rem' }} />}>
                    Left Icon
                  </Button>
                  <Button rightIcon={<IconStar style={{ width: '1rem', height: '1rem' }} />}>
                    Right Icon
                  </Button>
                </div>

                <h3 className={styles.demoLabel}>States</h3>
                <div className={styles.demoRow}>
                  <Button disabled>Disabled</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </section>

            {/* Design Tokens Reference */}
            <section className={styles.referenceSection}>
              <h2 className={styles.sectionTitle}>Design Tokens</h2>
              <p className={styles.sectionDescription}>
                Available tokens defined in <code className={styles.codeInline}>src/index.css</code>
              </p>

              <div className={styles.tokensGrid}>
                {/* Colors */}
                <div className={styles.demoCard}>
                  <h3 className={styles.demoLabel}>Semantic Colors</h3>
                  <div className={styles.colorGroup}>
                    {['info', 'success', 'warning', 'error'].map((color) => (
                      <div key={color}>
                        <div className={styles.colorLabel}>{color}</div>
                        <div className={styles.colorSwatches}>
                          <div 
                            className={styles.colorSwatch}
                            style={{ backgroundColor: `var(--ds-color-${color}-50)` }}
                            title={`--ds-color-${color}-50`}
                          />
                          <div 
                            className={styles.colorSwatch}
                            style={{ backgroundColor: `var(--ds-color-${color}-500)` }}
                            title={`--ds-color-${color}-500`}
                          />
                          <div 
                            className={styles.colorSwatch}
                            style={{ backgroundColor: `var(--ds-color-${color}-700)` }}
                            title={`--ds-color-${color}-700`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spacing */}
                <div className={styles.demoCard}>
                  <h3 className={styles.demoLabel}>Spacing Scale</h3>
                  <div className={styles.spacingRow}>
                    {[1, 2, 3, 4, 6, 8].map((n) => (
                      <div key={n} className={styles.spacingItem}>
                        <div 
                          className={styles.spacingBox}
                          style={{ 
                            width: `var(--ds-spacing-${n})`,
                            height: `var(--ds-spacing-${n})`
                          }}
                        />
                        <div className={styles.spacingLabel}>{n}</div>
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
