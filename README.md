# Miku Push! Web

The main web page of Miku Push!


## Contributing

Contributions are welcome! You can fork this repository and make a pull request with your changes.

We don't want to change much the design, but you can open an issue with recommendations or mistakes we made, 
you can make changes on it too, but not breaking, for example colors, margins, accessibility issues like contrast or other.

The site should keep simple, SEO friendly and performant, server side rendering related changes will be rejected
by default because we don't have resources for allow server side rendering on our web server.

## Build

Requirements:
- Node.js 22 or later
- Docker (if you want a preview on nginx)

### Dev Web server

For development, you should use the dev web.

```sh
npm run dev
```

### Build static site

For production, you should build the site.

```sh
npm run build
```

After you will found all the static files in the `dist` directory.

### Build static site on NGINX

You can see a preview using NGINX with using docker.

```sh
docker compose up -d
```

After you can visit the site on your favorite browser in `http://localhost:8080`.
