# Button

## General Guidelines

### Usage

- Buttons are used to execute in-page actions.
- Anchors navigate to new pages or sections within a page.
- Avoid using buttons for navigation or anchors for in-page actions to prevent confusion.

### Alignment

- Center align text.

### Capitalization

- Use title-case for buttons, links, and actions. "Submit Form", "View Account Details", "Forgot Password".

### Abbreviations

- Use abbreviations only if they are widely recognized and commonly used. For example: "FAQ"

## Primary Button

### Usage

- Represents the most crucial action on a page.
- Limit to one per page to avoid confusion.

### Content

- Use verb-first phrases.
- Connect the phrase to the title.

### Style

- Distinctive styling, often using a prominent color.
- Optionally, include icons to the left of the text for important actions.

### Visual Hierarchy

- Primary buttons should stand out the most followed by secondary buttons, and then tertiary buttons.
- Place in prominent positions where they are easily noticed.
- Primary buttons should always indicate the main action you want users to take.

## Secondary Button

### Usage

- Suitable for safe and reversible actions.
- Exercise caution for irreversible actions; prompt user confirmation when necessary such as when resetting or canceling form field data.

### Content

- Secondary buttons provide additional actions that support the primary button.

### Style

- Less prominent than the primary button but still stands out.

### Visual Hierarchy

- Second to the primary button.

## Do's and Don'ts

<DosDonts
  :dos="[
    'Use clear and concise text on buttons',
    'Ensure buttons are easily clickable on all devices',
    'Use consistent styling for similar types of buttons',
    'Provide visual feedback on button interactions (hover, active states)'
  ]"
  :donts="[
    'Don\'t use buttons for navigation between pages',
    'Avoid using too many primary buttons on a single page',
    'Don\'t use vague text like \'Click Here\' on buttons',
    'Avoid using buttons when simple text links would suffice'
  ]"
/>

## Accessibility Considerations

- Ensure buttons have sufficient color contrast for readability.
- Provide text alternatives for icon-only buttons.
- Make sure buttons are keyboard accessible and have a visible focus state.
- Use appropriate ARIA labels when necessary to provide additional context for screen readers.

## Related Components

- [Anchor](/components/anchor)
- [Form Item](/components/form-item)

## Resources

- [WCAG 2.1 Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Buttons UX Design: Best Practices, Types and States](https://uxplanet.org/buttons-in-ui-design-the-evolution-of-style-and-best-practices-56536dc5386e)