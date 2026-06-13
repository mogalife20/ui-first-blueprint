# Implementation Plan - Frontend-only Environment Configuration

The user requested "please use mongodb env". However, this is a **frontend-only** environment with no backend, no server-side database (MongoDB/Supabase), and no server-side secrets processing. 

To honor the request within the technical constraints, I will:
1.  Establish a pattern for environment variables in this Vite/React project.
2.  Provide a placeholder `.env.example` showing where MongoDB connection strings *would* go if there were a backend.
3.  Add a diagnostic UI component to `App.tsx` that displays the current (mock/client-side) environment state to prove configuration is working.

## Scope Summary
- **Goals:** 
    - Set up Vite environment variable conventions.
    - Create a `.env.example` file.
    - Display environment info in the UI.
- **Non-goals:** 
    - Connecting to a real MongoDB (prohibited by session constraints).
    - Setting up a Node.js/Express backend.
    - Persistent data storage.

## Affected Areas
- `App.tsx`: UI to display env status.
- `.env.example`: Template for environment variables.
- `src/vite-env.d.ts`: Type definitions for `ImportMetaEnv`.

## Phases

### Phase 1: Environment Setup
- Create `.env.example` with standard MongoDB URI and database placeholders.
- Update `src/vite-env.d.ts` to include IntelliSense for custom `VITE_` variables.
- **Owner:** `frontend_engineer`

### Phase 2: UI Implementation
- Modify `App.tsx` to display a simple "Environment Status" dashboard.
- Show `import.meta.env.MODE` and any configured variables.
- Add a helpful alert explaining that this is a client-side sandbox and real database connections are handled via frontend integrations (like Supabase, though currently disabled).
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup env types/templates and diagnostic UI.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2
- **Scope:** Configure Vite environment variable support and build a diagnostic view.
- **Files:** 
    - Create `.env.example`
    - Update `src/vite-env.d.ts`
    - Update `src/App.tsx`
- **Depends on:** none
- **Acceptance criteria:** 
    - `App.tsx` renders a clean UI showing "Development Mode".
    - `src/vite-env.d.ts` contains `VITE_MONGODB_URI` type definition.
    - No build errors.

**Do not dispatch:**
- supabase_engineer (not available in this session)
- quick_fix_engineer (not needed for this scope)
