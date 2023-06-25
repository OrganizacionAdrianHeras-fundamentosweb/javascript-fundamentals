const images = document.getElementById('images');
const getImages = () => {
  axios('https://picsum.photos/v2/list?page=1&limit=5')
    .then((res) => {
      const fragment = document.createDocumentFragment();
      const data = res.data;
      data.forEach((e) => {
        const newImage = document.createElement('IMG');
        newImage.setAttribute('src', e.download_url);
        fragment.append(newImage);
      });
      images.append(fragment);

      setObserver();
    })
    .catch(console.log);
};

let lastImage = images.lastElementChild;
const callback = (entries, observer) => {
  entries.forEach((e) => {
    if(e.isIntersecting) {
      console.log(e);
      observer.unobserve(e.target);
      getImages();
    }
  });
}

const setObserver = () => {
  const options = {
    threshold: 0.5
  }

  lastImage = images.lastElementChild;
  const observer = new IntersectionObserver(callback, options);
  observer.observe(lastImage);
};

getImages();

