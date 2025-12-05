# Design Guidelines: Bliss & Burn Fitness Training Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from fitness industry leaders including the provided Bliss & Burn reference, Peloton, ClassPass, and modern wellness platforms. The design prioritizes emotional engagement, trust-building through social proof, and conversion-focused layouts typical of fitness/wellness landing pages.

## Core Design Principles
- **Empowering & Energetic**: Visual hierarchy that inspires action and transformation
- **Trust-First**: Heavy emphasis on testimonials, transformations, and trainer credibility
- **Conversion-Optimized**: Strategic placement of WhatsApp CTAs throughout the journey
- **Feminine & Professional**: Balances warmth with expertise for women-focused fitness

## Layout System
**Spacing Units**: Consistent use of Tailwind units: `4, 8, 12, 16, 20, 24, 32` for predictable rhythm
- Section padding: `py-16 md:py-24 lg:py-32` for major sections
- Component spacing: `gap-8 md:gap-12` for card grids
- Content max-width: `max-w-7xl` for full sections, `max-w-4xl` for text-heavy content

## Typography Hierarchy
**Font Stack**: Google Fonts via CDN
- **Primary (Headings)**: Poppins - Bold (700), SemiBold (600)
- **Secondary (Body)**: Inter - Regular (400), Medium (500)

**Scale**:
- Hero Headline: `text-5xl md:text-6xl lg:text-7xl` (Poppins Bold)
- Section Headings: `text-3xl md:text-4xl lg:text-5xl` (Poppins SemiBold)
- Subsection Titles: `text-2xl md:text-3xl` (Poppins SemiBold)
- Body Text: `text-base md:text-lg` (Inter Regular)
- Small Text: `text-sm` (Inter Regular)

## Page Structure (8 Sections)

### 1. Hero Section (Full viewport impact)
- **Height**: `min-h-screen` with vertical centering
- **Layout**: Two-column on desktop (`lg:grid-cols-2`), stacked mobile
- **Content**: Left - headline, subheadline, WhatsApp CTA button, trust badge ("Trusted by 1000+ women")
- **Image**: Right - motivational fitness imagery (women working out, joyful energy)
- **CTA Button**: Large prominent button with blur background effect when overlaying imagery

### 2. Social Proof Banner
- **Layout**: Full-width marquee/ticker
- **Content**: Rotating logos or stats ("4.8★ Rating | 10 Years Experience | 5000+ Transformations")
- **Height**: `py-8`

### 3. Program Overview
- **Layout**: Grid of 3-4 cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
- **Cards**: Icon, title, 2-line description for each class type
- **Spacing**: `gap-6 md:gap-8`
- **Time Schedule**: Prominently displayed in bordered section

### 4. About/Story Section
- **Layout**: Two-column (`lg:grid-cols-2`), image + text
- **Image**: Founder photo (professional, approachable)
- **Content**: Personal story, credentials, mission statement
- **WhatsApp CTA**: Secondary button at section end

### 5. Training Types Showcase
- **Layout**: Masonry-style grid with 6-9 cards (`grid-cols-2 md:grid-cols-3`)
- **Cards**: Large icon/image, title, description (Cardio, Yoga, Zumba, Strength, etc.)
- **Visual Treatment**: Subtle borders, generous padding (`p-6 md:p-8`)

### 6. Transformation Gallery & Testimonials
- **Layout**: Three-column testimonials (`lg:grid-cols-3`)
- **Content**: Before/after images, client quotes with names, star ratings
- **Video Testimonials**: Embedded video players (2-3 videos) in `lg:grid-cols-2` layout
- **Spacing**: `gap-8 md:gap-12`

### 7. Pricing Packages
- **Layout**: Four pricing cards in horizontal scroll on mobile, grid on desktop (`lg:grid-cols-4`)
- **Card Structure**: Package name, class count, features list, prominent price, CTA button
- **Featured Package**: Center card elevated with scale or border emphasis
- **Spacing**: `gap-6 md:gap-8`

### 8. Meet Trainers & Contact
- **Trainers**: Four-column grid (`md:grid-cols-2 lg:grid-cols-4`) with photos, names, credentials
- **Contact Form**: Two-column layout (form left, contact info right)
- **Form Fields**: Name, Email, Contact Number, Purpose dropdown, Submit button
- **Additional**: Office hours, WhatsApp link, social media icons

### 9. Footer
- **Layout**: Three-column grid (`md:grid-cols-3`)
- **Content**: Logo + description | Quick links | Contact details + social icons
- **Newsletter**: Optional signup form integrated into footer
- **Spacing**: `py-16`

## Component Library

### Navigation
- Sticky header with logo left, "Book Consultation" button right
- Mobile: Simplified with hamburger (optional given single-page)
- Height: `h-20`

### Buttons
- Primary CTA: Large, rounded (`rounded-full`), `px-8 py-4 text-lg`
- Secondary: Medium size, `px-6 py-3`
- WhatsApp buttons: Icon + text combination

### Cards
- Rounded corners: `rounded-2xl`
- Padding: `p-6 md:p-8`
- Subtle shadows for depth

### Forms
- Input fields: `rounded-lg`, `px-4 py-3`, full-width with labels
- Dropdown: Styled select with custom arrow
- Submit: Full-width button, `py-4`

### Icons
**Library**: Heroicons via CDN
- Use outline style for general UI
- Solid style for emphasis (star ratings, feature highlights)

## Images Strategy

### Hero Image
**Placement**: Right side of hero section (desktop), above content (mobile)
**Description**: Energetic photo of women in fitness class or working out - bright, motivational, diverse representation
**Treatment**: Subtle gradient overlay on edges for text readability

### Transformation Gallery
**Type**: Before/after comparison images (6-8 pairs)
**Layout**: Grid display with clear labeling
**Aspect Ratio**: Square or 4:3

### Trainer Photos
**Type**: Professional headshots
**Style**: Consistent framing and background treatment
**Shape**: Circular or rounded square

### Training Type Icons/Images
**Type**: Combination of illustrative icons and action photos
**Style**: Consistent visual treatment across all types

### Background Imagery
**Sections needing backgrounds**: Hero, CTA sections
**Treatment**: Subtle, non-distracting, high contrast maintained for readability

## Floating Elements
- **WhatsApp Button**: Fixed bottom-right, `z-50`, circular with icon, pulsing animation
- **Position**: `bottom-8 right-8`

## Responsive Behavior
- Mobile-first approach with stacked layouts
- Breakpoints: `md:768px`, `lg:1024px`, `xl:1280px`
- Touch-friendly tap targets (min `44px`)
- Horizontal scroll for pricing cards on mobile

## Animations
**Minimal & Purposeful**:
- Smooth scroll behavior for anchor links
- Fade-in on scroll for testimonial cards
- Subtle hover lift for pricing cards
- Pulsing effect on floating WhatsApp button only

This design creates a comprehensive, conversion-focused fitness landing page that builds trust, showcases value, and drives WhatsApp consultations while maintaining professional polish throughout.