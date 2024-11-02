# Documentation

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
