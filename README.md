# TBD Docs Prototyping

Mock [TBD Developer Site](https://developer.tbd.website) to validate the process for publishing community-contributed
documentation.

**NOTE:** Block, Inc. owns all rights, title, and interest to content and code copied from
[developer.tbd.website](https://developer.tbd.website).  

## Implement Vercel Deploy Previews

1. Log in to https://app.netlify.com.
2. Under **Sites** click the **Import from Git** button.
3. Click the **GitHub** button.
4. If you wish to proceed, click **Authorize Netlify**.
5. _(Optional)_ If your GitHub account is a member of multiple organizations, select the appropriate one.
6. Select **Only select repositories**, choose the `prototype-tbdocs` repository, and click **Install Netlify**.
7. Select the `prototype-tbdocs` repository to configure site settings.

Owner: frank
Branch to deploy: feat/github-actions
Basic build settings:
Base directory: developer-site
Build command: npm run build
Publish directory: developer-site/

8. Click Deploy site


NETLIFY_AUTH_TOKEN
The token needed to deploy your site

Generate here:
1. Navigate to: https://app.netlify.com/user/applications#personal-access-tokens
2. Click New access token
3. Enter "tbdocs deploy actions" as the Description and click the Generate token button.
4. Copy the token to your GitHub secrets and click Done.


NETLIFY_SITE_ID
The site to where deploy your site
Get it by navigating to Site Settings > General and copying the Site ID UUID.
549c0b00-17e4-482e-b59b-78e474b70fc4

Configure the Netlify secrets in GitHub Settings
Repo > Settings > Secrets > Actions
Click New repository secret
Enter NETLIFY_SITE_ID for the Name and your site ID in the Secret field.
Click Add secret.
Click New repository secret
Enter NETLIFY_AUTH_TOKEN for the Name and the generated personal access token in the Secret field.
Click Add secret.


Explanation for why first time contributors require approval for Workflow runs
- https://github.blog/changelog/2021-04-22-github-actions-maintainers-must-approve-first-time-contributor-workflow-runs/

We should include a response for first time contributors for pull requests and issues
- https://github.com/actions/first-interaction
- part of what we can include for pull requests is a message letting them know that their workflow on the first contribution will require approval
- https://github.com/marketplace/actions/find-current-pull-request

How to enable a GitHub Action to create pull requests:
- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests
- https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization

Controller permissions of the GitHub 
- https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token

Security Hardening for GitHub Actions
- https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions?learn=getting_started&learnProduct=actions
- https://blog.gitguardian.com/github-actions-security-cheat-sheet/


Potential Options to overcome the issue with not being able to access secrets during deploy previews
- https://github.com/probot/probot
- https://www.geeksforgeeks.org/making-a-github-bot/
- https://probot.github.io/apps/gitpod-io/
- https://circleci.com/blog/managing-secrets-when-you-have-pull-requests-from-outside-contributors/
- https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows
- https://stackoverflow.com/questions/72823264/is-there-a-way-to-force-github-actions-use-main-branch-workflow-files-in-a-pull
- https://stackoverflow.com/questions/67247752/how-to-use-secret-in-pull-request-review-similar-to-pull-request-target
- https://dev.to/petrsvihlik/using-environment-protection-rules-to-secure-secrets-when-building-external-forks-with-pullrequesttarget-hci
- https://github.blog/2020-08-03-github-actions-improvements-for-fork-and-pull-request-workflows/
- https://docs.github.com/en/actions/security-guides/encrypted-secrets
- https://stackoverflow.com/questions/67964110/how-to-access-secrets-when-using-flutter-web-with-github-actions

## Create Docusaurus Site

NOTE: You can ignore this section if you are cloning this repository.

Follow the steps below to reproduce the creation of this mock instance of the TBD developer site.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`).
* Initialized git repository to track changes.

### Scaffold Docusaurus Site

Run the following command in your newly created git repository to create a `developer-site` directory containing a
skeleton Docusaurus website.

```shell
npx create-docusaurus@2.1.0 developer-site classic
```

The expected output should begin with:

```shell
[SUCCESS] Created developer-site.
[INFO] Inside that directory, you can run several commands:
```

Relocate the generated files to the root of the git repository:

```shell
rm developer-site/README.md
mv developer-site/* .
rm -r developer-site
```

Commit the new files:

```shell
git add -A
git commit -m "feat: Scaffold Docusaurus project"
```

