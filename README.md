# Design System Interview Challenge

A pair programming interview challenge for the **Frontend Engineer - Design Systems** role.

**Stack:** React, TypeScript, Tailwind CSS  
**Duration:** 45 minutes

---

### Setup

```bash
npm install
npm run dev
```

The app will run at `http://localhost:5173`

### Interview Structure

| Time | Phase | Focus |
|------|-------|-------|
| 0-5 min | **Intro** | Welcome, explain the challenge, share screen |
| 5-10 min | **Exploration** | Let candidate review tokens, Button component |
| 10-40 min | **Building** | Candidate implements Alert component |
| 40-45 min | **Discussion** | Wrap-up, questions, API design discussion |

### The Challenge

Build a reusable **Alert** component for our design system.

**File to edit:** `src/challenge/Alert.tsx`

### Requirements

#### Required Features
1. **Variants:** `info`, `success`, `warning`, `error` with appropriate styling
2. **Title:** Optional heading above the message
3. **Dismissible:** Optional close button with `onDismiss` callback

#### Stretch Goals (if time permits)
4. **Icons:** Display variant-appropriate icons (available in `src/utils/icons.tsx`)
5. **Actions:** Support for action buttons within the alert

### Resources Available

| File | Description |
|------|-------------|
| `src/index.css` | Design tokens (colors, spacing, typography) |
| `src/components/Button/Button.tsx` | Reference component showing patterns |
| `src/utils/icons.tsx` | Icon components you can use |
| `src/challenge/Playground.tsx` | Test cases for your component |

### Design Token Examples

```tsx
// Use tokens via Tailwind's arbitrary value syntax
<div className="bg-[var(--ds-color-info-50)]">...</div>
<div className="p-[var(--ds-spacing-4)]">...</div>
<div className="rounded-[var(--ds-radius-lg)]">...</div>
```

### Expected Usage

```tsx
// Basic
<Alert variant="info">
  This is a message.
</Alert>

// With title
<Alert variant="success" title="Success!">
  Your changes have been saved.
</Alert>

// Dismissible
<Alert variant="warning" dismissible onDismiss={() => {}}>
  This can be closed.
</Alert>
```

---

## 🛠 Project Structure

```
src/
├── challenge/
│   ├── Alert.tsx        # YOUR CHALLENGE - Edit this file
│   └── Playground.tsx   # Test cases for your component
├── components/
│   └── Button/          # Reference component
├── utils/
│   └── icons.tsx        # Icon components
├── App.tsx              # Main app with navigation
└── index.css            # Design tokens
```

---

## Tips for Success

1. **Start simple** - Get basic structure working, then iterate
2. **Use the tokens** - Reference `index.css` for available values
3. **Follow patterns** - Look at Button component for inspiration
4. **Think out loud** - Share your reasoning as you code
5. **Ask questions** - Clarify requirements if needed
