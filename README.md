# README

Scrape list of blog posts from Tailscale



## Requirements

- Deno



## Usage

- scrape

```sh
deno task scrape
```

- create CSV from JSON with title, date, URL, and authors

```sh
(
  echo "title,publishedAt,url,authors";
  jq -r '.[] | [.title, .publishedAt, ("https://tailscale.com/blog/" + .slug.current), (.authors | map(.member.name) | join(", "))] | @csv' out/posts.json
) > out/posts.csv
```
