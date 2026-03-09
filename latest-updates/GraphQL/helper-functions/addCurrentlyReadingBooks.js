export function addCurrentlyReadingBooks(currentlyReading) {
  const currentlyReadingSection = document.querySelector('.currently-reading .books');

  if (currentlyReadingSection) {
    if (Object.keys(currentlyReading).length === 0) {
      const paragraph = document.createElement('p');
      paragraph.classList.add('namdhinggo-regular', 'description');
      paragraph.innerHTML = 'I am surprisingly not currently reading any books. I am most likely debating which books to start and should have some books added here soon.';
      currentlyReadingSection.appendChild(paragraph);
    } else {
      currentlyReading.forEach(item => {
        const figureElement = document.createElement('figure')
        figureElement.classList.add('book');

        const imageElement = document.createElement('img');
        imageElement.classList.add('book-photo')
        imageElement.setAttribute('src', item.book.image.url)
        imageElement.setAttribute('alt', item.book.title + ' by ' + item.book.contributions[0].author.name);

        figureElement.appendChild(imageElement);

        const figCaption = document.createElement('figcaption');
        const link = document.createElement('a');
        link.classList.add('patrick-hand-regular', 'link');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'https://hardcover.app/books/' + item.book.slug);
        link.innerText = 'hardcover.app';

        figCaption.appendChild(link);
        figureElement.appendChild(figCaption)

        currentlyReadingSection.appendChild(figureElement)
      })
    }
  }
}
