# OSRESS Website Documentation

## About

The OSRESS (Outdoor Sports and Recreation Education Summer School) website, hosted at [osress.pages.dev](https://osress.pages.dev), serves as the central platform for information about OSRESS, including event details, news, and related resources.

This repo contains the source code, documentation, and other resources required for developing and maintaining the website.

## Repository Structure

The repo is organized into the following main directories:

- `/.github`: GitHub-specific files for project management and automation.
  - `/workflows`: GitHub Actions workflows for deployment.
- `/docs`: Markdown documentation files, including this guide.
- `/site`: The main directory for the SvelteKit project.
  - `/messages`: Localization files for internationalization (i18n).
  - `/project.inlang`: Inlang directory for the project
  - `/src`: The core of the website.
    - `/routes`: SvelteKit route files for various pages (e.g., `/news`, `/pictures`, `/videos`).
    - `/lib`: Reusable code, such as utilities and components, accessible via the `$lib` alias.
      - `/ui`: UI components. [Learn more about UI component organization](#ui-components-organization).
  - `/static`: Static assets.
    - `/ext`: The main external content for the OSRESS website (a separate Git repo excluded from the main one, used exclusively during the build process to load content).

## The Website

### Implementation

The website is built using the [SvelteKit](https://svelte.dev/docs/kit) framework for its structure and styled with [Tailwind CSS](https://tailwindcss.com). It also supports internationalization via the [Paraglide-SvelteKit](https://inlang.com/m/dxnzrydw/paraglide-sveltekit-i18n) library. The primary font used is [Inter](https://fontsource.org/fonts/inter).

### Content

The website's content is managed separately from its source code and stored in a different repository. Before building the website and deploying it, the content repo must be placed in the `/site/static/ext` directory.

The decision to separate the content repository from the main source code ensures a cleaner and more maintainable codebase. This separation allows for easier updates to frequently changing content without requiring modifications to the source code, which in turn streamlines the deployment workflows.

Images for each edition of OSRESS are hosted at unique subdomains `https://osress-[YEAR].pages.dev` (e.g., `osress-2024.pages.dev`). This setup helps simplify content organization. Additionally, separating images from the main build optimizes workflows, allowing for better performance.

### Hosting

The website is fully static and hosted on [Cloudflare](https://www.cloudflare.com/). Deployment—both to production and preview environments—is managed through a GitHub workflow called `deploy-cloudflare`, which is triggered manually.

## Guidelines

### **Issue Labeling**

Each issue in this project should follow a structured labeling system to ensure
clarity and easy tracking of tasks. By default, every issue
should have **two labels**: one describing the **type of task**
and one identifying the **area it affects**.
Optionally, critical issues can be marked with a priority label.

#### **Mandatory Labels**

- **Task Type**: Specify the nature of the issue:
  - `feat`: A new feature or enhancement.
  - `fix`: A bug that needs to be fixed.
  - `refactor`: An update with no functional changes.
  - `other`: Uncategorized.

- **Area Affected**: Specify the part of the project affected:
  - `ui`: Related to UX/UI.
  - `content`: Related to the website's content.
  - `docs`: Related to the documentation.
  - `source`: Related to the website's source code.

#### **Optional Labels**

- `CRITICAL`: For issues that must be resolved as soon as possible.

#### **Full List of Issue Labels**

- `content`: Related to the website's content.
- `CRITICAL`: Resolve it ASAP.
- `docs`: Related to the documentation.
- `feat`: A new feature or enhancement.
- `fix`: A bug that needs to be fixed.
- `refactor`: An update with no functional changes.
- `source`: Related to the website's source code.
- `ui`: Related to UX/UI.

By following this system, the workflow remains organized
and makes it easier to prioritize and categorize tasks.

### UI Components Organization

The `src/lib/ui` directory contains all our UI components, organized into three
distinct categories for better maintainability and reusability:

#### 📦 `/common`

Contains highly reusable, atomic components that
serve as building blocks across the website.

**Characteristics:**

- Highly reusable across different contexts
- Follows consistent design patterns

#### 🏗 `/layout`

Houses components that define the website's structure
and appear consistently across multiple pages.

**Characteristics:**

- Used only once per application
- Define the overall page structure

#### 🧩 `/blocks`

Sits between atomic components and full layouts. These components are reusable
but more complex than common components, often aggregating functionality or content.

**Characteristics:**

- Composes multiple common components
- Acts as a cohesive unit that serves specific purposes within the layout

#### Best Practices

1. **Component Placement:**
   - If a component is used in multiple places → `/common`
   - If it's a singleton layout component → `/layout`
   - If it's reusable but more complex → `/blocks`

2. **File Naming:**
   - Use _PascalCase_ for component files (e.g., `Button.svelte`, `TopNav.svelte`)

3. **Directory Structure Example:**

```txt
src/lib/ui/
├── common/
│   ├── NavLink.svelte
│   ├── ContentBlockTitle.svelte
│   └── ...
├── layout/
│   ├── TopNav.svelte
│   ├── Footer.svelte
│   └── ...
└── blocks/
    ├── UserProfile/
    ├── SearchResults/
    └── ...
```
