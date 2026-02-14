# Contributing Guidelines

Thank you for considering contributing to this educational project!

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information

### Suggesting Enhancements

Have an idea to improve the tutorial? Open an issue with:
- Clear description of the enhancement
- Why it would be helpful for learners
- Example implementation (if applicable)

### Pull Requests

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test thoroughly in multiple browsers
5. Submit a pull request with clear description

### Code Standards

- Use clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused
- Follow existing code style
- No unnecessary dependencies

### Commit Message Format

- **Add:** New feature
- **Fix:** Bug fix
- **Update:** Changes to existing feature
- **Docs:** Documentation changes
- **Style:** Code style changes (formatting)
- **Refactor:** Code restructuring

Example: `Add: hint system feature`

## What We're Looking For

- Bug fixes
- Better explanations in comments
- Additional learning exercises
- Improved error messages
- Accessibility improvements
- Performance optimizations

## What to Avoid

- Adding complex frameworks or libraries
- Over-engineering simple solutions
- Removing educational comments
- Breaking changes without discussion

## Questions?

Open an issue with the "question" label.

Thank you for helping others learn JavaScript!
```

5. En altta **"Commit new file"** yeşil butonuna bas

---

## Adım 9: .gitignore Dosyası Oluştur

1. Repository ana sayfasında **"Add file"** butonuna tıkla
2. **"Create new file"** seç
3. Dosya adı olarak yaz: `.gitignore`
4. Aşağıdaki içeriği yapıştır:
```
# Operating System Files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor Files
.vscode/
.idea/
*.swp
*.swo
*~
.project
.settings/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependencies
node_modules/
bower_components/

# Environment Variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build Files
dist/
build/
```

5. En altta **"Commit new file"** yeşil butonuna bas

---

## Adım 10: GitHub Pages Aktifleştir

1. Repository sayfasında üstte **"Settings"** sekmesine tıkla
2. Sol menüden **"Pages"** bölümünü bul ve tıkla
3. **"Source"** başlığı altında:
   - **Branch:** "main" seç
   - **Folder:** "/ (root)" seçili bırak
4. **"Save"** butonuna bas
5. Sayfa yenilenecek
6. 2-3 dakika bekle
7. Sayfayı yenile (F5)
8. Üstte yeşil kutu içinde şöyle bir mesaj göreceksin:
```
   Your site is live at https://kullaniciadin.github.io/js-dom-events-game-tutorial/
