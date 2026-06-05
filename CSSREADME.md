# 🎨 Orange Ember Design System

A complete dark-theme design system built entirely from a single orange palette.

The goal is to create a modern SaaS dashboard, admin panel, fintech application, analytics platform, or business management application with a premium warm-dark appearance.

---

# Palette

| Shade | Hex     |
| ----- | ------- |
| 50    | #FFF1E5 |
| 100   | #FFE4CC |
| 200   | #FFC999 |
| 300   | #FFAD66 |
| 400   | #FF9233 |
| 500   | #FF7700 |
| 600   | #CC5F00 |
| 700   | #994700 |
| 800   | #663000 |
| 900   | #331800 |
| 950   | #241100 |

---

# Design Philosophy

Most applications make the mistake of using bright brand colors as backgrounds.

This creates visual fatigue and poor readability.

Instead:

* Use the darkest shades for surfaces
* Use medium shades for hierarchy
* Use bright shades only for actions
* Use light shades for content

Think of it like this:

Background → Dark

Content → Light

Actions → Bright

---

# Color Roles

## Background Hierarchy

### App Background

```css
--bg-primary: #241100;
```

Use for:

* Entire application background
* Dashboard background
* Root layout background
* Page background

Reason:

This is the darkest color in the palette.

It creates strong contrast while maintaining the orange brand identity.

---

### Secondary Background

```css
--bg-secondary: #331800;
```

Use for:

* Sidebar
* Top navigation
* Footer
* Secondary panels

Reason:

Slightly lighter than the main background.

Creates depth without looking like a different theme.

---

### Card Background

```css
--bg-card: #663000;
```

Use for:

* Cards
* Widgets
* Containers
* Dashboard blocks

Reason:

Allows cards to separate visually from the page background.

---

### Elevated Background

```css
--bg-elevated: #994700;
```

Use for:

* Modals
* Drawers
* Selected cards
* Popovers

Reason:

Creates a clear elevation level.

---

# Text System

## Primary Text

```css
--text-primary: #FFF1E5;
```

Use for:

* Main headings
* Titles
* Important content

Reason:

Maximum readability.

---

## Secondary Text

```css
--text-secondary: #FFE4CC;
```

Use for:

* Labels
* Descriptions
* Navigation links

Reason:

Softer than pure white.

---

## Muted Text

```css
--text-muted: #FFC999;
```

Use for:

* Helper text
* Metadata
* Timestamps
* Captions

Reason:

Lower visual priority.

---

## Disabled Text

```css
--text-disabled: #FFAD66;
```

Use for:

* Disabled controls
* Placeholder text

Reason:

Clearly visible but not interactive.

---

# Border System

## Default Border

```css
--border-default: #663000;
```

Use for:

* Cards
* Inputs
* Tables

---

## Hover Border

```css
--border-hover: #994700;
```

Use for:

* Hovered cards
* Hovered inputs

---

## Active Border

```css
--border-active: #FF7700;
```

Use for:

* Selected items
* Focused inputs

---

# Brand Colors

## Primary Brand

```css
--primary: #FF7700;
```

Use for:

* Primary buttons
* Main actions
* Important badges
* Active states

This is your main brand color.

---

## Hover

```css
--primary-hover: #CC5F00;
```

Use for:

* Button hover
* Link hover

---

## Active

```css
--primary-active: #994700;
```

Use for:

* Pressed buttons
* Selected tabs

---

# Buttons

## Primary Button

```css
background: #FF7700;
color: #FFF1E5;
```

Used for:

* Create
* Save
* Submit
* Continue

---

## Primary Hover

```css
background: #CC5F00;
```

Provides interaction feedback.

---

## Secondary Button

```css
background: #331800;
border: 1px solid #663000;
color: #FFF1E5;
```

Used for:

* Cancel
* Back
* Optional actions

---

# Inputs

## Default

```css
background: #331800;
border: 1px solid #663000;
color: #FFF1E5;
```

---

## Hover

```css
border-color: #994700;
```

---

## Focus

```css
border-color: #FF7700;
box-shadow: 0 0 0 3px rgba(255,119,0,0.2);
```

Reason:

Clearly indicates active input.

---

# Sidebar

## Background

```css
background: #331800;
```

---

## Menu Item

```css
color: #FFC999;
```

---

## Menu Hover

```css
background: #663000;
color: #FFF1E5;
```

---

## Active Menu

```css
background: #994700;
border-left: 4px solid #FF7700;
```

Reason:

Easy navigation recognition.

---

# Cards

## Default

```css
background: #331800;
border: 1px solid #663000;
```

---

## Hover

```css
background: #663000;
border-color: #994700;
transform: translateY(-2px);
```

Reason:

Creates depth and interaction feedback.

---

# Tables

## Header

```css
background: #331800;
color: #FFF1E5;
```

---

## Row

```css
background: #241100;
```

---

## Row Hover

```css
background: #331800;
```

---

# Badges

## Success

```css
background: #FF9233;
color: #241100;
```

---

## Warning

```css
background: #FF7700;
color: #241100;
```

---

## Danger

```css
background: #CC5F00;
color: #FFF1E5;
```

---

# Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #241100;
}

::-webkit-scrollbar-thumb {
  background: #994700;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #FF7700;
}
```

---

# CSS Variables

```css
:root {
  --bg-primary: #241100;
  --bg-secondary: #331800;
  --bg-card: #663000;
  --bg-elevated: #994700;

  --primary: #FF7700;
  --primary-hover: #CC5F00;
  --primary-active: #994700;

  --text-primary: #FFF1E5;
  --text-secondary: #FFE4CC;
  --text-muted: #FFC999;
  --text-disabled: #FFAD66;

  --border-default: #663000;
  --border-hover: #994700;
  --border-active: #FF7700;
}
```

---

# Recommended Usage Percentage

A good UI usually follows:

```text
60%  Background Colors
25%  Surface/Card Colors
10%  Text Colors
5%   Accent Colors
```

Do NOT make the whole application orange.

Use orange only for actions and highlights.

This keeps the interface premium, readable, and professional.

---

# Ideal For

* SaaS Platforms
* Admin Dashboards
* Analytics Systems
* CRM Applications
* Fintech Products
* Business Management Tools
* AI Platforms
* Developer Tools

Theme Name:

Orange Ember Dark

```
```
