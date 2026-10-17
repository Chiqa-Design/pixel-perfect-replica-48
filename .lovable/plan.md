# Convarg Wave 1

## Goal
Build a usable first Convarg experience aligned to Wave 1 of the supplied PRD.

## Scope
- Shared Convarg shell with Varg app navigation, account menu, and sign-out.
- VargID sign-in, registration, email verification, MFA challenge/enrolment, and password recovery entry points.
- Six-step resumable workspace setup, capability review, assembly progress, and a ready workspace.
- VargNotify feed, unread count, and notification preferences.
- Apply the uploaded behavioral UX guidance and PRD brand tokens.

## Assumptions
- Use email-based tenant identification for enterprise SSO entry; external OAuth/SSO remain provider-dependent.
- Workspace opens to a useful activity/next-steps home rather than an app-switcher-only screen.
- No VargCore directory/object renderer or Wave 2 screens; no production integrations beyond what project credentials support.

## Validation
- Verify the core sign-in-to-setup-to-workspace UI flow and responsive shell.
- Run the existing routing tests and inspect current preview build diagnostics.
