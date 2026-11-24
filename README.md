<div align="center">

# Your Name — Portfolio

**Economics & Informatics. Data, systems and a bit of sourdough.**

A hand-built personal portfolio where every project is written up like a recipe.

[![Live site](https://img.shields.io/badge/live-view%20site-2f9e7a?style=for-the-badge)](https://yourhandle.github.io/your-repo/)
![HTML](https://img.shields.io/badge/HTML5-c67b2e?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-c0533b?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-2b2118?style=for-the-badge&logo=javascript&logoColor=white)

</div>

---

## About

I'm a BCom Economic Science student (Economics & Informatics) at North West University, graduating 2027. This site shows the work behind that: Oracle database design, SQL and Power BI analysis, econometrics in R and EViews, and system analysis in C# / Blazor.

It's built from scratch with no frameworks, no build step and no dependencies. Open `index.html` and it runs.

## Highlights

| | |
|---|---|
| **Recipe-style project cards** | Ingredients drop in, method steps tick off, and the result is stamped when a card scrolls into view. |
| **Sourdough starter scroll gauge** | A jar in the corner rises as you scroll down the page. |
| **Training overload chart** | An SVG load curve with deload weeks that draws itself on reveal. |
| **Live hero sparkline** | A random-walk "index" drawn on `<canvas>`, ticking in real time. |
| **Scroll-spy navigation** | The nav highlights the section you're reading, using `IntersectionObserver`. |
| **Accessible by default** | Respects `prefers-reduced-motion`, is responsive down to mobile, and uses semantic HTML. |

## Project structure

```
.
├── index.html    # content and markup
├── styles.css    # design tokens, layout, animations
├── script.js     # scroll reveal, scroll-spy, sparkline, starter jar
├── cv.pdf        # linked from the "Download CV" button
└── README.md
```

## Run locally

```bash
git clone https://github.com/yourhandle/your-repo.git
cd your-repo
# open index.html in a browser, or serve it:
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at `https://yourhandle.github.io/your-repo/`.

## Customising

- **Colours and fonts:** change the custom properties at the top of `styles.css` (`--mint`, `--amber`, `--terracotta`, `--font-head`, and so on) and the whole site re-themes.
- **Projects:** copy any `<article class="project project--recipe">` block in `index.html`. Separate ingredients with `·` and the script turns them into tags.
- **Contact links:** update the email, GitHub and LinkedIn links at the bottom of `index.html`.

## Tech

- Semantic HTML5
- CSS custom properties, grid and flexbox, keyframe animations
- Vanilla JavaScript (`IntersectionObserver`, canvas, `requestAnimationFrame`)
- Google Fonts: Fraunces, Inter, JetBrains Mono

## Contact

- Email: [you@email.com](mailto:you@email.com)
- LinkedIn: [linkedin.com/in/yourhandle](https://linkedin.com/in/yourhandle)
- GitHub: [@yourhandle](https://github.com/yourhandle)

## License

© Your Name. Code is available under the [MIT License](LICENSE) if you'd like to adapt the layout. Please don't reuse the written content or personal details.
