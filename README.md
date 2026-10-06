Kgothatso Foundation Website

Official website for the Kgothatso Foundation, a community-focused nonprofit organisation supporting children, youth, families, and vulnerable communities in South Africa.

About the Project

The website provides information about the Kgothatso Foundation, its programmes, community initiatives, and ways for individuals and organisations to get involved.

The website was designed to be:

Professional and accessible
Responsive across desktop, tablet, and mobile devices
Easy to navigate
Image-focused
Suitable for community engagement and fundraising
Easy to maintain and deploy
Features

Responsive navigation
Home page with organisation overview
About page
Programmes and services page
Get Involved form
Donation information
Gallery
Contact page
Google Maps location
Responsive design
Mobile navigation
Local image assets
Form submission integration support
Website Pages



Page

Description

index.html

Homepage and organisation overview

about.html

About the Foundation, mission, vision and values

programmes.html

Foundation programmes and services

get-involved.html

Volunteer, donation and partnership form

gallery.html

Community and Foundation image gallery

contact.html

Contact information, donation details and location

Project Structure

kgothatso-foundation/

│

├── index.html

├── about.html

├── programmes.html

├── get-involved.html

├── gallery.html

├── contact.html

├── style.css

├── script.js

├── README.md

│

├── images/

│   ├── hero.jpg

│   ├── about.jpg

│   ├── child-support.jpg

│   ├── education.jpg

│   ├── youth.jpg

│   ├── food-security.jpg

│   └── gallery-1.jpg

│

└── media/

    └── Foundation media assets

Technologies

The website uses:

HTML5
CSS3
JavaScript
Google Maps Embed
Google Fonts
No frontend framework is required.

Responsive Design

The website was developed using a responsive CSS approach so that the layout adapts to different screen sizes.

Desktop

The desktop layout uses multi-column sections, CSS Grid and Flexbox to organise content and maintain clear spacing and navigation.

Tablet

A tablet breakpoint adjusts the layout, spacing and typography to accommodate narrower screens while maintaining the desktop-style structure where appropriate.

Mobile

The mobile layout changes larger multi-column sections into single-column layouts where necessary. The navigation also changes to a mobile menu to make the website easier to use on smaller screens.

CSS Techniques Used

The responsive styling makes use of:

CSS Grid
Flexbox
Media queries
Relative units such as rem and %
clamp() for responsive sizing
Responsive spacing
Responsive typography
Flexible containers
Responsive image sizing
The stylesheet uses breakpoints at approximately:

60rem for tablet-sized screens
40rem for mobile-sized screens
22.5rem for very small screens
Responsive Testing

The website was tested using Visual Studio Code Live Server and browser developer tools.

Testing was performed at the following viewport sizes:



Device Type

Viewport

Desktop

1440 × 900

Tablet

768 × 1024

Mobile

390 × 844

The following areas were checked during testing:

Navigation
Mobile menu
Page layouts
Typography
Images
Forms
Google Maps section
Donation section
Footer
Horizontal scrolling
Overall readability and usability
Screenshot Evidence

Responsive testing screenshots are included in the project:

screenshots/

├── desktop.png

├── tablet.png

└── mobile.png

These screenshots provide evidence of the website being tested at desktop, tablet and mobile viewport sizes.

Getting Started

Clone the repository:

git clone https://github.com/YOUR-USERNAME/kgothatso-foundation.git

Enter the project directory:

cd kgothatso-foundation

Open the website by opening index.html in a browser.

For local development, Visual Studio Code with the Live Server extension can also be used.

Images

Website images and media assets are stored in the project’s image/media folders.

The existing image filenames and paths should be kept consistent with the HTML files.

Recommended image requirements:

JPG or WebP format
Optimised for web use
High enough resolution for desktop displays
Compressed to keep page loading times low
Properly licensed or owned by the Foundation
Get Involved Form

The Get Involved page contains a form for visitors who want to:

Volunteer
Donate
Partner with the Foundation
Ask about programmes
Make another enquiry
The form currently contains:

action="YOUR_FORM_ENDPOINT"

A real form endpoint must be added before deployment.

Possible solutions include:

Formspree
Web3Forms
A custom PHP backend
Another email/form processing service
The website is currently configured to display a message explaining that the form still needs to be connected if no endpoint has been provided.

Contact Information

Kgothatso Foundation

2081 Tshabalala Street
Maphanga / Nhlapo Section
Katlehong
Ekurhuleni
1431
South Africa

Email: info@kgothatso-foundation.org.za

Alternative Email: tshepo.kubeka@gmail.com

Phone: 075 204 2586

Location

The Contact page includes a Google Maps embed for the Foundation’s Katlehong location.

The map can be updated if the Foundation moves or if a more precise location needs to be displayed.

Donation Information

The website currently includes the Foundation’s banking information for donations.

Before publishing the website, verify all banking information directly with the Foundation to ensure that the displayed details are correct and current.

Customisation

Colours

The main colours can be changed in style.css through the CSS variables:

:root {

    --green: #173c2d;

    --dark: #0a1d16;

    --gold: #c39a52;

    --cream: #f7f5ef;

    --white: #fff;

    --text: #18251f;

    --muted: #68736d;

}

Typography

The website uses:

DM Sans for general text
Playfair Display for headings
These can also be changed inside style.css.

Deployment

The website is a static website and can be deployed using:

GitHub Pages
Netlify
Vercel
Cloudflare Pages
Traditional cPanel hosting
GitHub Pages

After pushing the project to GitHub:

Open the repository.
Go to Settings.
Select Pages.
Select the deployment branch.
Save the configuration.
GitHub will provide the published website URL.

Before Launch

Check the following before making the website public:

☐ Replace placeholder images
☐ Connect the Get Involved form
☐ Verify all contact information
☐ Verify donation banking information
☐ Test every navigation link
☐ Test the mobile layout
☐ Test the contact form
☐ Test the Google Maps location
☐ Check spelling and grammar
☐ Optimise images
☐ Add the Foundation’s social media links if applicable
☐ Add a favicon
☐ Test the website on multiple browsers
☐ Connect the final domain
☐ Enable HTTPS
Part 2 Changelog

Responsive CSS and Layout

Updated the external stylesheet to provide a consistent responsive design across desktop, tablet and mobile screen sizes.
Added responsive media queries for different viewport sizes.
Improved the use of CSS Grid and Flexbox for page layouts.
Replaced rigid sizing with relative units such as rem and % where appropriate.
Added responsive typography using scalable sizing.
Added responsive spacing and container sizing.
Updated layouts so that multi-column content can adapt to narrower screens.
Improved mobile navigation behaviour.
Added accessibility attributes to navigation controls, including aria-expanded, aria-controls and aria-current.
Added accessible labels to navigation and logo elements.
Improved image sizing so images adapt more effectively to available screen space.
Tested the website using Visual Studio Code Live Server and browser developer tools.
Tested the website at desktop, tablet and mobile viewport sizes.
Added screenshot evidence documenting the responsive testing process.
HTML Improvements

Updated the HTML files to include appropriate metadata.
Improved navigation accessibility across the website.
Added aria-current="page" to identify the current page in the navigation.
Improved the mobile menu button structure.
Added descriptive accessibility labels where appropriate.
Preserved the existing website content, design structure and image file paths.
Maintenance

Content such as programmes, images, contact information and donation details can be updated directly in the relevant HTML files.

For larger content changes, consider moving the website to a content management system or adding a backend/CMS.

License

This project is intended for the Kgothatso Foundation.

All Foundation branding, photographs, logos and original content remain the property of their respective owners.

Third-party assets should only be used in accordance with their applicable licences.

Credits

Website developed for the Kgothatso Foundation.

Original website development credit:

EddieDigitalSolutions