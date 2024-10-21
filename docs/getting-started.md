# Getting Started

STUDS builds on Blazor and Kendo to provide a streamlined UI design system. To integrate it into your project, follow these steps.

## Step 1: Choose Your Development Package

1. Select either Kendo or Telerik as your foundation.

2. Ensure that Node.js is installed. → [https://nodejs.org/en/download/prebuilt-installer](https://nodejs.org/en/download/prebuilt-installer)

3. Install npm
   ```
   npm install -g npm
   ```

4. Install via npm or your preferred method.

| Package | Installation Method |
|---------|---------------------|
| Kendo   | `npm install kendo-ui` |
| Telerik | `npm install telerik-ui` |

## Step 2: Add CSS and SVG Files

Ensure that the STUDS CSS is applied **after** Kendo or Telerik to avoid conflicts. This will provide base styling for your project. The order should be:

1. All Kendo or Telerik stylesheets
2. Bootstrap (if you are using it)
3. studs-ui-kit.css
4. Any additional app-specific layout styles.

Go to the [STUDS downloads page](https://studs.strongtie.com/downloads) to view, download, or get links to the CSS, SVGs, and fonts. From there, you have the option to select a specific release or always have the most current version. The current directory will always contain the latest release.

### Web-Based Applications
Use the following CDN link to include the current STUDS UI Kit:

```html
<link rel="stylesheet" href="https://www.strongtie.com/studs/current/studs-ui-kit.css">
```

### Desktop Applications
Download the CSS and SVG files and embed them within your project folder.

## Step 3: Customize Your Application's Styles

Once the STUDS UI Kit is applied, you can add custom styles to fit your application's layout. Make sure any custom styles come **after** STUDS in the style hierarchy.