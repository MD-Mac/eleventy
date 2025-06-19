# Eleventy Site

A static site built with [11ty/Eleventy](https://www.11ty.dev/), the simpler static site generator.

## 🚀 Quick Start

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MD-Mac/eleventy.git
   cd eleventy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add the following scripts to your package.json:
   ```json
   "scripts": {
     "start": "eleventy --serve",
     "build": "eleventy"
   }
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
.
├── _data/          # Global data files
├── _includes/      # Layouts and components
├── _site/         # Generated site (don't edit)
├── content/       # Your content (markdown files)
└── .eleventy.cjs  # Eleventy configuration
```

## 🛠 Configuration

The site uses the following Eleventy configuration:

- Content is stored in the `content/` directory
- Layouts and includes are in `_includes/`
- Global data files are in `_data/`
- Built files are output to `_site/`
- Uses Nunjucks as the template engine

## 🔧 Development

### Template Engines

- **Markdown** for content files
- **Nunjucks** for layouts and includes
- Supports passthrough file copy

### Adding Content

1. Create new `.md` files in the `content/` directory
2. Add front matter at the top of your markdown files:
   ```yaml
   ---
   layout: layouts/base.njk
   title: Your Page Title
   ---
   ```

## 📝 License

ISC

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🤝 Support

For support, please open an issue in the GitHub repository. 
