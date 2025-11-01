# Deater Foundation Editor Guide

Welcome to the Deater Foundation site editor! This guide walks through how to update content with Decap CMS and how changes deploy to Netlify.

## Accessing the CMS

1. Visit `https://deaterfoundation.netlify.app/admin`.
2. Click **Login with Netlify Identity** and authenticate with the email address invited by the site administrator.
3. Choose **Continue with GitHub** on first login to connect your Identity account to GitHub. (You will not need to interact with GitHub directly after this step.)

## Editorial workflow

The CMS uses the Editorial Workflow so every update follows the same lifecycle:

1. Create or edit content and click **Save**. The entry moves to the “Drafts” column.
2. Click **Set status to In Review** when ready for approval. Reviewers receive a notification.
3. Once approved, click **Publish**. Netlify will build and deploy the site automatically (usually within a few minutes).

## Editing pages

- **Home page**: Update hero copy, statistics, and section text by editing the body content. Avoid removing the structural shortcodes (the text between `{% ... %}`) unless you are coordinating with a developer.
- **About, Donate, Contact, Privacy**: These pages are written in Markdown. Use regular headings, paragraphs, and lists. The contact form markup will remain in place below the editable introduction text.

## Programs, news, and people

- Navigate to the collection (Programs, News & Stories, or People).
- Click **New** to add a new entry or select an existing entry to update.
- Fill in the fields on the left. Preview updates in the right-hand panel.
- Upload images to the media library; they will be stored under `src/assets/images/uploads` in the repository. (Headshots are optional—if none is provided the site will show initials as a placeholder.)

### Programs

- **Order** controls the display sequence on the Programs landing page.
- The **Hero** fields populate the top banner of each program page.

### News & Stories

- Use the **Publish Date** to control ordering.
- The summary appears on listing pages and social shares.

### People

- Provide a square headshot image for best results. If you skip the headshot, add the person’s initials so the site can show an accessible placeholder.
- **Display Order** determines where a person appears on the team grid.

## Global settings

The **Site settings** collection manages global metadata such as the mission statement, contact information, social links, and donation URL. Changes here update the footer and other references automatically.

## Deployment tips

- Expect builds to take 1–2 minutes after publishing. You can monitor progress in the Netlify Deploys tab.
- If a build fails, contact a developer to review the deploy logs.
- Use Deploy Previews (automatically created for each draft) to share updates before publishing.

## Need help?

Email `web@deaterfoundation.org` for CMS support or to request new content types.
