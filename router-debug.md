# GitHub Pages Router Debug

- URL tested: https://nadjimlab.github.io/qiraati-download-page/
- Browser pathname: `/qiraati-download-page/`
- Browser still renders the app's internal 404 page after successful workflow run 32529149228.
- Published JS includes `base:"/qiraati-download-page/".replace(/\/$/,"")`.
- GitHub Pages build and deploy jobs are successful.
- Next investigation: verify Wouter location hook behavior and use a deterministic pathname normalizer or hash-free static fallback for the project subpath.
