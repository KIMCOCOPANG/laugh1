// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const images = [
        // '상대 경로 복사'를 통해 얻은 이미지 파일 경로를 사용합니다.
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'laugh-1.html' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'guestbook.html' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' },
        { file: 'sample/image1.png', hoverFile: 'sample/image2.webp', link: 'http://example.com/1' },
        { file: 'sample/image3.jpg', hoverFile: 'sample/image4.png', link: 'http://example.com/2' }
    ];

    const imageGrid = document.querySelector(".image-grid");

    images.forEach(image => {
        const anchor = document.createElement("a");
        anchor.href = image.link;

        const img = document.createElement("img");
        img.src = image.file;
        img.dataset.hover = image.hoverFile;

        anchor.appendChild(img);
        imageGrid.appendChild(anchor);

        anchor.addEventListener("mouseover", () => {
            img.src = img.dataset.hover;
        });

        anchor.addEventListener("mouseout", () => {
            img.src = image.file;
        });
    });
});
