# Contributing to EthSigner documentation
:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

Welcome to the EthSigner documentation repository. The following guidelines explain how to contribute to this 
repo. They are mostly guidelines, not rules. Use your best judgment, 
and feel free to propose changes to this document in a pull request.

#### Table Of Contents
[Code of Conduct](#code-of-conduct)

[I just have a quick question](#i-just-have-a-quick-question)

[How To Contribute](#how-to-contribute)
  * [Reporting Documentation Bugs](#reporting-documentation-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Contribution](#your-first-contribution)
  * [Pull Requests](#pull-requests)

[Style Guides](#style-guides)
  * [Java Style Guide](#java-code-style-guide)
  * [Coding Conventions](#coding-conventions)
  * [Git Commit Messages & Pull Request Messages](#git-commit-messages--pull-request-messages)
  
[Pull Request Labels](#pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [EthSigner Code of Conduct](CODE-OF-CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior to [private@pegasys.tech].

## I just have a quick question

> **Note:** Please don't create an issue to ask a question.  You'll get faster results by using the resources below.

* [EthSigner documentation]
* [Gitter]

## How To Contribute
### Reporting Documentation Bugs

This section guides you through submitting a bug report for documentation. Following these guidelines helps maintainers 
and the community understand your report and find related reports.

Before creating bug reports, please check the [before-submitting-a-bug-report](#before-submitting-a-bug-report) 
checklist as you might find out that you don't need to create one. When you create a bug report, [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems to address the same problem that you're experiencing, 
open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report
* **Perform a [cursory search of project issues](https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10121)** 
to see if the problem has already been reported. If it has **and the issue is still open**, add a comment 
to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?
Bugs are tracked as [Jira issues](https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10000).  

Explain the problem and include additional details to help maintainers understand the problem:

* **Use a clear and descriptive summary** for the issue to identify the problem.
* **Describe the problem** in as many details as possible. If screenshots will help to explain the problem,
attach them in the report. 
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, 
or copy/pasteable snippets, which you use in those examples. If you're providing code snippets in the issue, 
use backticks (```) to format the snippets.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots, a video, or both**, which show you following the described steps and clearly demonstrate the problem.

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after switching to a new version of the software) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of the documentation?** 
What's the most recent version in which the problem doesn't happen? 
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of the documentation are you using?** The exact version is shown in the URL. For example, in the URL `https://docs.ethsigner.pegasys.tech/en/stable/`, the version is `stable`.
* **Which OS & version are you running?**
* **Which browser and version are you using?**
* **What version of Java are you running?** You can get the exact version by looking at the EthSigner logfile during startup.
or copy/pasteable snippets, which you use in those examples. If you're providing code snippets in the issue, use backticks (```) to format the snippets.

### Suggesting Enhancements

This section guides you through the process of suggesting documentation enhancements.

Follow these guidelines so that maintainers and the community can understand your suggestion and find related suggestions.

Before you create enhancement suggestions, check the 
[before-submitting-an-enhancement-suggestion](#before-submitting-an-enhancement-suggestion) list as 
you might find out that you don't need to create one.

When you are creating an enhancement suggestion,  
[include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). 

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search of project issues](https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10121)** 
to see whether the suggestion has been made already. If it has **and the issue is still open**, add a comment 
to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [Jira issues](https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10000).
Provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. If you're providing code snippets in the issue, 
 use backticks (````) to format the code snippets..
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots** that help to explain the enhancement where possible.
* **Explain why this enhancement would be useful** to most users.

## Your First Contribution
Start by looking through the issues that contain the Good First Issue and Help Wanted labels on the [Jira dashboard](https://pegasys1.atlassian.net/secure/Dashboard.jspa?selectPageId=10000):
* [Good First Issue](https://pegasys1.atlassian.net/browse/ES-9?jql=project%20%3D%20ES%20AND%20resolution%20%3D%20Unresolved%20AND%20labels%20%3D%20GoodFirstIssue%20ORDER%20BY%20priority%20DESC): issues that should only require a few lines of documentation.
* [Help wanted issues](https://pegasys1.atlassian.net/issues/?jql=project%20%3D%20ES%20AND%20resolution%20%3D%20Unresolved%20AND%20labels%20%3D%20HelpWanted%20ORDER%20BY%20priority%20DESC): issues that require more work than Good First Issue issues.

When you've identified an issue you want to work on, ping us on [Gitter], and we'll assign it to you. 

### Contribution Workflow
The documentation is maintained by using the same contributor workflow in which everyone, 
without exception, suggests an enhancement by submitting a pull request (PR). This facilitates social contribution, easy testing, and peer review.

To contribute changes, use the following workflow:

1. [**Fork the repository**](https://github.com/PegaSysEng/doc.ethsigner/fork).
1. **Clone your fork** to your computer.
1. **Create a topic branch** and name it appropriately.
Starting the branch name with the issue number is a good practice and a reminder to fix only one issue in a 
pull request.
1. **Make your changes** by adhering to the following documentation convention: In general a commit serves a single purpose, and diffs should be easily comprehensible.
1. **Commit your changes** by using a clear commit message.
1. **Test your changes** locally before pushing them to ensure that your suggestion does not affect another part of the documentation.
    * Displaying the doc with [MkDocs] in a preview mode enables you to check the rendering as explained in the [MkDocs And Markdown Guide](MKDOCS-MARKDOWN-GUIDE.md#preview-the-documentation). 
1. **Push your changes** to your remote fork (usually labeled as `origin`).
1. **Create a pull request** on the EthSigner documentation repository. If the PR addresses an existing Jira issue, 
include the issue number in the PR title in square brackets, such as `[PAN-2374]`, for example. 
1. **Add the "documentation" label** to identify the type of your PR. 
1. **Ensure your changes are reviewed** by selecting the reviewers who should review your PR. If you don't know who to choose, select the reviewers listed by GitHub or leave the option blank.
1. **Make any required changes** on your contribution, based on the reviewers' feedback. Make the changes, commit them to your branch, and push to your remote fork.
1. **After your PR is validated**, all tests have passed, and your branch has no conflicts with the target branch,
you can **squash and merge** your PR, and you're done. You contributed to the EthSigner documentation! Thanks!

### Pull Requests

The process described here has several goals:

- Maintain product quality
- Fix problems that are important to users
- Engage the community in working toward the best possible product
- Enable a sustainable system for maintainers to review contributions
- Further explanation on PRs and commit messages can be found in this post: 
[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

To have your contribution considered by the approvers, follow these steps:

1. Complete the CLA, as described in [CLA.md].
2. Follow all instructions in [PULL-REQUEST-TEMPLATE.md](.github/pull_request_template.md).
3. Follow the [Style Guides](#style-guides).
4. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) 
are passing.
<details><summary>What if the status checks are failing?</summary>If a status check is failing, 
and you believe that the failure is unrelated to your change, please leave a comment on the pull request 
explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. 
If we conclude that the failure was a false positive, then we will open an issue to track that problem 
with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewers 
may ask you to complete additional design work, tests, or other changes before your pull request 
can be ultimately accepted.

# Style Guides

## Documentation Style Guide
Use the [documentation guidelines and examples](DOC-STYLE-GUIDE.md) when you suggest documentation changes.
The guidelines are not automatically enforced but are recommended to make the documentation consistent and enhance the user experience.

If you are unfamiliar with Markdown syntax, see our [MKDocs Markdown guide](MKDOCS-MARKDOWN-GUIDE.md). Additionally, we have extensions that are available in the EthSigner documentation described in this guide.

## Git Commit Messages & Pull-Request Messages
* Use the present tense ("Add feature" not "Added feature").
* Use the imperative mood ("Move cursor" not "Moves cursor").
* Provide a summary on the first line with more details on additional lines, as needed.
* Reference issues and pull requests liberally.
* For more information about how to write great commit messages, see [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

# Pull-Request Labels

#### Pull-Request Labels

| Label name                                                              | Description                                                                                |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`work-in-progress`][search-label-work-in-progress]                     | Pull requests which are still being worked on, more changes will follow.                   |
| [`requires-changes`][search-label-requires-changes]                     | Pull requests which need to be updated based on review comments and then reviewed again.   |
| [`needs engineering approval`][search-label-needs-engineering-approval] | Pull requests which need to be approved from a technical person, mainly documentation PRs. |

[private@pegasys.tech]: mailto:private@pegasys.tech
[Gitter]: https://gitter.im/PegaSysEng/EthSigner
[EthSigner documentation]: https://docs.ethsigner.pegasys.tech/
[CLA.md]: ./CLA.md
[Code Reviews]: /docs/community/code-reviews.md
[MkDocs]: https://www.mkdocs.org/
