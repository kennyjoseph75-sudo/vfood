# Backup Protocol

This document outlines the standard procedure for creating a backup of the project.

## Procedure

1.  **Update the Changelog:** Before creating a backup, ensure that the `blueprint.md` file is up-to-date. This update must include:
    *   A clear and concise summary of all changes made since the last backup.
    *   The **reason** for the current backup (e.g., "Milestone: Completed landing page redesign," "Fix: Resolved navigation issues").

2.  **Create a Timestamped Archive:** To create the backup, a timestamped ZIP archive of the entire project directory must be created. This ensures a single, compressed file that is easy to manage and restore.

### Command

The following terminal command is the **only** approved method for creating a manual backup:

```
TZ=GMT zip -r vfood-backup_$(date +%d-%m-%Y:%H-%M-%S).zip . -x "*.zip"
```

### Command Breakdown:

*   `TZ=GMT`: Sets the timezone to Greenwich Mean Time for the command.
*   `zip -r`: Creates a recursive ZIP archive.
*   `vfood-backup_$(date +%d-%m-%Y:%H-%M-%S).zip`: Names the archive with the prefix "vfood-backup_" followed by the current date and time in `DD-MM-YYYY:HH-MM-SS` format (GMT).
*   `.`: Specifies that the contents of the current directory should be archived.
*   `-x "*.zip"`: Excludes any existing files ending with the `.zip` extension from the new backup archive. This prevents backups from containing previous backups.

## File Listing

To list files, you MUST use the `ls -R` terminal command. The `list_files` tool is not reliable and MUST NOT be used.
