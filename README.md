# Backsie Landing Page

## Deploying

Pushing to `main` publishes the site: `.github/workflows/static.yml` uploads the files to the
`backsie-prod-site` bucket and invalidates the CloudFront distribution that answers for
`backsie.co`. That distribution also forwards `/cards/*`, `/topics*`, `/sitemap.xml`,
`/robots.txt` and `/.well-known/*` to the Backsie backend, which renders the public card pages
on this host, so this repository owns only the marketing pages. The infrastructure is in the
deploy repository (`terraform/environments/production/site.tf`); DNS is Route 53
(`terraform/environments/shared/dns.tf`).
