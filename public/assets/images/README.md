# Assets Folder

Place your project images here:

## Folder Structure:
- `/public/assets/images/` - For project screenshots and portfolio images
- `/public/assets/icons/` - For custom icons (if needed)

## Usage in Components:
```jsx
// Use images like this in your components:
<img src="/assets/images/your-image.jpg" alt="Description" />

// Or with Next.js Image component:
import Image from 'next/image'
<Image src="/assets/images/your-image.jpg" alt="Description" width={600} height={400} />
```

## Recommended Image Formats:
- `.jpg` or `.webp` for photos
- `.png` for images with transparency
- `.svg` for icons and logos

## Recommended Sizes:
- Project thumbnails: 600x400px
- Hero images: 1200x800px
- Profile photos: 400x400px