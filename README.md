# Hinode Module - Google Analytics

<!-- Tagline -->
<p align="center">
    <b>A Hugo module to add Google Analytics to your Hinode site</b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/gethinode/mod-google-analytics/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/gethinode/mod-google-analytics.svg">
    </a>
    <a href="https://github.com/gethinode/mod-google-analytics/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/gethinode/mod-google-analytics.svg">
    </a>
    <a href="https://github.com/gethinode/mod-google-analytics/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/mod-google-analytics.svg">
    </a>
    <a href="https://github.com/gethinode/mod-google-analytics/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/gethinode/mod-google-analytics">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to enable [Google Analytics][google-analytics], part of the Google Marketing Platform, to a Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

## Contributing

This module uses [semantic-release][semantic-release] to automate the release of new versions. The package uses `husky` and `commitlint` to ensure commit messages adhere to the [Conventional Commits][conventionalcommits] specification. You can run `npx git-cz` from the terminal to help prepare the commit message.

## Configuration

> [!NOTE]
> By convention, Hinode uses kebab case as naming convention for module names. However, the module name in the site parameters is renamed to `GoogleAnalytics` to align with Hugo's privacy settings.

Set you `G-tag` in your site configuration (usually `hugo.toml`) in the following section:

```toml
[services]
  [services.googleAnalytics]
    ID = "G-xxxxxxxxxx"
```

You can modify the privacy configuration in the following section:

```toml
[privacy]
  [privacy.googleAnalytics]
    disable = false
    respectDoNotTrack = false
```

This module supports the following parameters (see the section `params.modules` in `config.toml`):

| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| GoogleAnalytics.force     | false   | Trigger to force include the analytics scripts, bypassing other settings. Use this setting for debugging and testing only. |

<!-- MARKDOWN LINKS -->
[hugo]: https://gohugo.io
[hinode_docs]: https://gethinode.com
[google-analytics]: https://marketingplatform.google.com
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
[conventionalcommits]: https://www.conventionalcommits.org
[husky]: https://typicode.github.io/husky/
[semantic-release]: https://semantic-release.gitbook.io/