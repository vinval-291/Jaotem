# Firebase Security Specification

## Data Invariants
1. A `Post` must have a `title`, `excerpt`, `content`, `author`, `category`, `img`, `createdAt`, and `authorId`.
2. Only users listed in the `admins` collection can create, update, or delete posts.
3. Posts are publicly readable if they exist.
4. `admins` collection is only readable by authenticated users (to check role) but not writable via client.

## The "Dirty Dozen" Payloads (Deny Cases)
1. **Unauthenticated Write**: Unauthenticated user trying to create a post.
2. **Non-Admin Write**: Authenticated non-admin trying to create a post.
3. **Missing Required Fields**: Admin trying to create a post with a missing required field (e.g., `title`).
4. **Identity Spoofing**: Admin trying to create a post where `authorId` doesn't match their UID.
5. **Immutable Field Tampering (createdAt)**: Admin trying to update a post's `createdAt` timestamp.
6. **Immutable Field Tampering (authorId)**: Admin trying to update a post's `authorId`.
7. **Resource Exhaustion (Title)**: Admin trying to inject a 2MB string into the `title` field.
8. **Type Mismatch**: Admin trying to set `category` to a non-string type.
9. **Unauthorized Deletion**: Non-admin trying to delete any post.
10. **ID Poisoning**: Admin trying to create a post with an invalid ID format (e.g., too long or weird chars).
11. **Shadow Update**: Admin trying to add a "verified" field to a post that isn't in the schema.
12. **Privilege Escalation**: User trying to write to the `admins` collection directly to make themselves an admin.
