# Emergent Data Strategies - Design System

## Brand Identity

**Company**: Emergent Data Strategies
**Tagline**: "Using Data and AI to drive your business forward"
**Headquarters**: Brooklyn, NY
**Specialties**: GenAI, Data Engineering, Strategy Consulting

---

## Design Philosophy

**Swiss Design Aesthetic** - Clean, minimal, functional design with:
- Bold typography and strong visual hierarchy
- High contrast (black on white)
- Generous use of whitespace
- Precise alignment and grid systems
- Accent color for strategic emphasis
- Geometric precision

---

## Color Palette

### Primary Colors
- **White**: `#FFFFFF` - Primary background
- **Black**: `#000000` - Primary text, borders, UI elements

### Accent Color
- **Vibrant Orange-Red**: `#FF5733` (RGB: 255, 87, 51)
  - Used for: Highlights, hover states, emphasized text (DATA, AI keywords)
  - Applied to: Links, interactive elements, key words in hero

### Neutral
- **Gray-400**: Used for secondary text labels (e.g., "HEADQUARTERS", "SPECIALITY")

### Selection
- **Background**: Accent color (#FF5733)
- **Text**: White

---

## Typography

### Font Family
**Primary**: Inter (Google Fonts)
- Weights used: 400 (Regular), 700 (Bold), 900 (Black)
- Fallback: System sans-serif

### Type Scale & Usage

#### Hero Section
- **Size**: `text-5xl` (48px) mobile → `text-7xl` (72px) tablet → `text-8xl` (96px) desktop
- **Weight**: Black (900)
- **Transform**: UPPERCASE
- **Tracking**: `tracking-tighter` (-0.05em)
- **Leading**: `leading-[1]` (tight line height)
- **Word Spacing**: `0.20em` (extra spacing between words)

#### Service Titles
- **Size**: `text-3xl` (30px) mobile → `text-5xl` (48px) small → `text-7xl` (72px) tablet → `text-8xl` (96px) desktop
- **Weight**: Black (900)
- **Transform**: UPPERCASE
- **Tracking**: `tracking-tighter`
- **Leading**: `leading-none`

#### Service Descriptions
- **Size**: `text-xl` (20px) mobile → `text-3xl` (30px) desktop
- **Weight**: Medium (500)
- **Leading**: `leading-tight`

#### Navbar Brand
- **Size**: `text-xl` (20px) mobile → `text-2xl` (24px) desktop
- **Weight**: Black (900)
- **Transform**: UPPERCASE
- **Tracking**: `tracking-tighter`

#### Info Grid Headers
- **Size**: `text-xs` (12px)
- **Weight**: Black (900)
- **Transform**: UPPERCASE
- **Tracking**: `tracking-widest` (+0.1em)

#### Info Grid Content
- **Size**: `text-xl` (20px) mobile → `text-2xl` (24px) desktop
- **Weight**: Bold (700)

#### CTA Button
- **Size**: `text-2xl` (24px) mobile → `text-4xl` (36px) desktop
- **Weight**: Black (900)
- **Transform**: UPPERCASE
- **Tracking**: `tracking-widest`

#### Service Numbers
- **Size**: `text-lg` (18px) mobile → `text-3xl` (30px) desktop
- **Weight**: Bold (700)

---

## Layout & Spacing

### Container
- **Max Width**: 1200px
- **Horizontal Padding**: 20px (`px-5`)
- **Centered**: `mx-auto`

### Sections
- **Hero Padding**: `py-24` (96px) mobile → `py-32` (128px) desktop
- **Info Grid Padding**: `py-8` (32px) mobile → `py-12` (48px) desktop
- **Services Padding**: `py-10` (40px) mobile → `py-16` (64px) desktop

### Margins
- **Bottom Spacing**: `mb-24` (96px) between major sections
- **Bottom CTA**: `mt-32` (128px) top margin

---

## Borders

### Style
- **Thickness**: 4px solid black
- **Usage**: Section dividers, navbar bottom, grid separators, service separators

### Grid Borders
- Mobile: Bottom borders (`border-b-4`)
- Desktop: Right borders (`border-r-4`) for grid columns

---

## Components

### Navbar
- **Height**: Auto (padding-based)
- **Layout**: Flexbox, space-between
- **Border**: Bottom 4px black
- **Components**:
  - Logo (32px mobile, 40px desktop)
  - Company name (uppercase, black)
  - CTA button (black background, white text)

### Buttons

#### Primary CTA (Navbar)
- **Background**: Black
- **Text**: White
- **Padding**: `px-6 py-3` (24px x 12px)
- **Font**: Bold, uppercase, wide tracking
- **Shadow**: `4px 4px 0px rgba(128,128,128,0.5)`
- **Hover**:
  - Background → Accent color
  - Shadow → `2px 2px 0px rgba(0,0,0,1)`
  - Transform → `translateY(2px)`

#### Large CTA (Bottom)
- **Background**: Black
- **Text**: White
- **Padding**: `px-12 py-8` (48px x 32px)
- **Font**: Black, uppercase, widest tracking
- **Shadow**: `8px 8px 0px rgba(128,128,128,0.5)`
- **Hover**:
  - Background → Accent color
  - Shadow → `4px 4px 0px rgba(0,0,0,1)`
  - Transform → `translateY(4px)`

### Service Accordion
- **Border**: Bottom 4px black
- **Layout**: Flex, items-baseline (desktop) / items-start
- **Hover State**:
  - Text → Accent color
  - Arrow → Rotates 45°, accent color
- **Expanded State**:
  - Max height → 320px (`max-h-80`)
  - Opacity → 100%
  - Bottom margin → 64px (`mb-16`)
- **Collapsed State**:
  - Max height → 0
  - Opacity → 0
- **Transition**: 500ms with custom cubic-bezier `(0.25,1,0.5,1)`

### Info Grid
- **Layout**: 1 column mobile → 3 columns desktop
- **Borders**: 4px black (top, bottom mobile, right desktop)
- **Headers**: Gray, uppercase, small, wide tracking
- **Content**: Bold, larger text

### Links
- **Default**: Bold text with arrow icon
- **Hover**: Accent color
- **Icon Animation**: Diagonal movement (translate-x-1, -translate-y-1)

---

## Icons

### Library
**Lucide React** - Minimal, consistent icon set

### Usage
- **Arrow Up Right**:
  - Size: 32px mobile (`w-8 h-8`), 48px desktop (`w-12 h-12`)
  - Stroke: 3px weight
  - Used for: Service items, external links
- **Small Arrow**: 20px for inline links

### Animations
- **Rotation**: 45° on hover (500ms duration)
- **Translation**: Diagonal movement on hover

---

## Animations

### Fade In
- **Duration**: 400ms
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth ease-out)
- **Effect**:
  - Opacity: 0 → 1
  - Transform: translateY(20px) → translateY(0)

### Accordion
- **Duration**: 500ms
- **Easing**: `cubic-bezier(0.25, 1, 0.5, 1)`
- **Properties**: max-height, opacity, margin

### Hover Transitions
- **Color Changes**: 300ms
- **Shadows**: Instant (position changes)
- **Arrow Rotation**: 500ms

### Scroll (if implemented)
- **Duration**: 20s linear infinite
- **Transform**: translateX(0) → translateX(-50%)

---

## Interactions

### Touch/Mobile
- **Click to toggle**: Accordion opens/closes on tap
- **No hover states**: Disabled on touch devices
- **Cursor**: Pointer on mobile for interactive elements

### Desktop
- **Hover to preview**: Accordion opens on mouse enter
- **Auto-close**: Closes on mouse leave
- **Cursor**: Default for most elements, pointer for buttons/links

---

## Responsive Breakpoints

### Tailwind Defaults
- **sm**: 640px
- **md**: 768px (primary breakpoint for layout shifts)
- **lg**: 1024px (typography scaling)

### Key Responsive Changes
- Grid: 1 column → 3 columns at `md`
- Typography: Scales at each breakpoint
- Borders: Bottom → Right at `md`
- Spacing: Increases at `md` and `lg`

---

## Accessibility

### Selection Highlighting
- **Background**: Accent color (#FF5733)
- **Text**: White
- High contrast for readability

### Touch Targets
- Minimum 48px height for buttons
- Adequate spacing between interactive elements

### Semantic HTML
- Proper heading hierarchy
- Semantic nav, sections
- Alt text for images

---

## Content Strategy

### Voice & Tone
- **Professional yet approachable**
- **Concise and action-oriented**
- **Technical but accessible**

### Service Descriptions
- Focus on value and outcomes
- Clear, jargon-free language
- 1-2 sentence format

### CTAs
- Direct and commanding
- "Book a call", "Let's build together"
- Action-oriented verbs

---

## Use in Prompts

### For New Content/Deliverables

```
Use the Emergent Data Strategies design system:

COLORS:
- Primary: Black (#000000) on White (#FFFFFF)
- Accent: Vibrant orange-red (#FF5733)

TYPOGRAPHY:
- Font: Inter (weights 400, 700, 900)
- Style: Bold, UPPERCASE headlines
- Hierarchy: Large display type (72-96px), tight tracking

LAYOUT:
- Swiss design aesthetic: minimal, functional, grid-based
- Max width 1200px, generous whitespace
- 4px black borders as dividers

STYLE:
- High contrast, clean lines
- Accent color for emphasis only
- Professional, modern, data-focused
```

---

## Brand Assets

### Logo
- **File**: `emergent_data_logo_mark.png`
- **Usage**: Navbar (32-40px height), favicon
- **Placement**: Left of company name

### Domain
- **Website**: emergentdata.co
- **Email**: hello@emergentdata.co

---

## Technical Stack

- **Framework**: React 19.2.0 + TypeScript
- **Build**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

---

*Document created: November 2025*
*Version: 1.0*