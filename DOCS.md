1. [slug] = facebook.com/settings/[slug]/page.tsx
- facebook.com/settings/account-settings
- facebook.com/settings/passwordsettings
- facebook.com/settings/123

2. [...slug] = facebook.com/settings/[...slug]/page.tsx
- facebook.com/settings -> Not Found -> create another page.tsx under settings folder
- facebook.com/settings/account-settings
- facebook.com/settings/account-settings/change-name
- facebook.com/settings/account-settings/change-name/123

3. [[...slug]] = facebook.com/settings/[[...slug]]/page.tsx
- facebook.com/settings
- facebook.com/settings/account-settings
- facebook.com/settings/account-settings/change-name
- facebook.com/settings/account-settings/change-name/123

Scenario:
BLOG PAGE = Should have separate UI and Design
BLOG/POST MULTIPLE PAGES = Should have own layout template for posts.