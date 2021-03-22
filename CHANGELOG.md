# go-cms-api Change Log

Version numbers are semver-compatible dates in YYYY.MM.DD-X format,
where X is the revision number


# 2021.3.22

### Bug Fixes
* **Expired Accounts:** Fix date calculation of when user accounts have expired
to the point that they should be deleted from LDAP.


# 2021.3.19

### Features
* **Logging:** Remove all invalid characters from new LDAP SAMAccount names.


# 2021.2.21

### Bug Fixes
* **User:** Fix JSON log markdown format in create user error logs.


# 2021.2.19

### Features
* **User:** Create username hash from sub for LDAP usernames


# 2021.2.2

### Features
* **Debug:** Add debug info for failed LDAP creation, to figure out what to do
with Cisco accounts that have email addresses for sub username.


# 2020.10.26-1

### Features
* **Environment:** Send this package's software version in environment info.


# 2020.10.26

### Features
* **CMS LDAP Sync:** Start CMS LDAP sync whenever activating, deactivating,
creating, or deleting a user.


# 2020.10.24-1

### Bug Fixes
* **Account Expiration:** Fix issues adding and removing users from the Active
group when setting account expiration. Also validate the maximum hours a user
can set for themselves.


# 2020.10.24

### Features
* **User Creation:** Improve user creation and error handling when input is
invalid. Check that call ID is not in use before creating user.


# 2020.10.23-4

### Features
* **Set User Password:** Add route to set user LDAP password
* **Demo Environment:** Add route to get demo environment info


# 2020.10.23-3

### Bug Fixes
* **User Expiration:** When user is being manually extended or expired, add or
remove them from the Active LDAP group


# 2020.10.23-2

### Bug Fixes
* **User Expiration:** Fix extending user expiration and adding them to the
Active group.


# 2020.10.23-1

### Features
* **User Expiration:** Run a scheduled job every hour (or configurable amount)
to remove expired users from the configured Active group in LDAP.
* **User:** Combined admin and user account routes all into /user route


# 2020.10.23

### Features
* **Created:** Created site and changelog
