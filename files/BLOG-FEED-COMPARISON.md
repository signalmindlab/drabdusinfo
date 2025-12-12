# Blog Feed Options for Posts Without Images

Since your blog posts don't have featured images, I've created two optimized versions:

## Option 1: Grid Layout (No Placeholder Images)

**File:** `blog-feed.html`

### Features:
- Grid cards that **only show images if they exist**
- Posts without images get a **colored left border** instead
- Clean, card-based design
- Better for blogs with mixed content (some posts with images, some without)

### Visual Style:
```
┌─────────────────────┐
│ [Image if exists]   │
│                     │
│ Date                │
│ Title               │
│ Description...      │
│ Read more →         │
└─────────────────────┘

or (if no image):

┏━━━━━━━━━━━━━━━━━━━┓ ← Blue left border
┃ Date              ┃
┃ Title             ┃
┃ Description...    ┃
┃ Read more →       ┃
┗━━━━━━━━━━━━━━━━━━━┛
```

### Best For:
- Future-proofing (if you add images later)
- Visual consistency with other grid sections
- Modern card-based design

---

## Option 2: List Layout (Text-Only Design)

**File:** `blog-feed-text-only.html`

### Features:
- **No image space** at all - pure text design
- Larger titles and descriptions
- Horizontal dividers between posts
- Magazine/newsletter style
- Shows reading time if available

### Visual Style:
```
DATE · 5 min read
Large Bold Title Here
Description text explaining what the post is about
and giving readers a preview...
Read full article →
────────────────────────────────
DATE · 3 min read
Another Post Title Here
More description text...
Read full article →
```

### Best For:
- **Recommended if your blog never uses featured images**
- Text-heavy, article-focused content
- Academic/professional writing
- More space for descriptions

---

## Comparison

| Feature | Grid (Option 1) | List (Option 2) |
|---------|----------------|-----------------|
| Image support | Yes (optional) | No |
| Space efficiency | Medium | High |
| Future-proofing | Yes | Medium |
| Description length | 150 chars | 200 chars |
| Layout style | Cards | List |
| Best for | Mixed content | Text-only blogs |

---

## Installation

### For Option 1 (Grid with Optional Images):
```bash
cp blog-feed.html files/blog-feed.html
```

### For Option 2 (Text-Only List):
```bash
cp blog-feed-text-only.html files/blog-feed.html
```

Then in both cases, add to your `index.qmd`:
```markdown
## Recent Blog Posts
From my [blog](https://blog.drabdus.info){target="_blank"}

{{< include files/blog-feed.html >}}

<p align="right">[Visit Full Blog »](https://blog.drabdus.info){target="_blank"}</p>
```

---

## My Recommendation

Since you mentioned your blog **has no images**, I recommend **Option 2 (Text-Only List)**:

✅ No wasted space for missing images  
✅ More room for descriptions  
✅ Cleaner, more focused design  
✅ Better for article/blog content  
✅ Professional, magazine-style layout  

However, if you think you might add featured images to your blog posts in the future, use **Option 1** for flexibility.

---

## Customization

### Change number of posts (Both Options)
Line 15 in either file:
```javascript
const posts = data.items.slice(0, 3); // Change 3 to any number
```

### Adjust description length
**Option 1:** Line 23: `.substring(0, 150)`  
**Option 2:** Line 23: `.substring(0, 200)`

### Colors and spacing
Modify the `<style>` section in either file to match your design preferences.

---

## Preview Both Options

To test both:
1. Install Option 1, render, and preview
2. Replace with Option 2, render, and preview
3. Choose your favorite!

Both are fully functional and ready to use.
