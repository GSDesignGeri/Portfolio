# KRT Portfolio — Easy Edit Version

This version is designed so you can update the website without learning HTML.

## The ONE file you normally edit

Open:

`content.js`

Everything important is there:

- Your studio/name
- Hero headline
- About text
- Email
- Social links
- Services
- Projects
- Project names
- Project descriptions
- Project images
- Project galleries

### Changing your name

Find:

`name: "KRT"`

and replace it with your name/studio name.

### Changing your email

Find:

`email: "hello@yourdomain.com"`

and replace it with your real email.

### Changing an image

Put your image inside:

`assets/`

For example:

`assets/my-sculpt.jpg`

Then change:

`image: "anatomy.svg"`

to:

`image: "my-sculpt.jpg"`

You can use JPG, PNG, WEBP or SVG.

### Adding a new project

Copy one entire project inside the `PROJECTS` list and change the text/images.

For example:

```js
{
  number: "04",
  title: "MY NEW PROJECT",
  shortTitle: "NEW PROJECT",
  category: "SURFACE DESIGN",
  description: "Short description of the project.",
  image: "my-project.jpg",
  gallery: ["my-project.jpg", "my-project-2.jpg"],
  tags: ["3D SCULPTING", "SURFACE DESIGN"]
}
```

The website automatically creates the project card and case-study page.

## Publishing for free

Use GitHub Pages:

1. Create a free GitHub account.
2. Create a public repository.
3. Upload the contents of this folder.
4. Go to Settings → Pages.
5. Choose Deploy from branch → `main` → `/root`.
6. Add your custom domain under the Pages settings.
7. Add the DNS records GitHub gives you at your domain registrar.

No paid hosting is required.

## Important

The artwork included is placeholder artwork for the layout. Replace it with your own work before publishing.

You can edit `content.js` with a simple text editor. You do not need to touch `index.html` for normal updates.
