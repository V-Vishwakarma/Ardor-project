// Blogger API key and blog ID
const API_KEY = 'YOUR_BLOGGER_API_KEY';
const BLOG_ID = 'YOUR_BLOG_ID';

// Fetch featured blog
fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const featuredBlog = data.items[0]; // Take the first post as featured
        document.getElementById('featuredBlog').innerHTML = `
            <img src="${featuredBlog.images ? featuredBlog.images[0].url : 'default-image.jpg'}" alt="${featuredBlog.title}">
            <h3>${featuredBlog.title}</h3>
            <p>${featuredBlog.content.substring(0, 150)}...</p>
            <a href="${featuredBlog.url}" target="_blank">Read More</a>
        `;
    });

// Fetch latest blog posts
fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=5`)
    .then(response => response.json())
    .then(data => {
        let latestBlogs = '';
        data.items.forEach(post => {
            latestBlogs += `
                <div class="blog-card">
                    <img src="${post.images ? post.images[0].url : 'default-image.jpg'}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p>${post.content.substring(0, 100)}...</p>
                    <a href="${post.url}" target="_blank">Read More</a>
                </div>
            `;
        });
        document.getElementById('latestBlogs').innerHTML = latestBlogs;
    });





function searchBlog() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let blogCards = document.querySelectorAll('.blog-card, .blog-post');

    blogCards.forEach(card => {
        let title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
