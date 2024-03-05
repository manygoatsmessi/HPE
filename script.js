window.onpagehide = function () {
  window.scrollTo(0, 0);
}

window.onbeforeunload = function () {
    document.getElementById('screen-darkener').classList.add('darken');
}

const container = document.querySelector('.section-container');
const items = document.querySelectorAll('.section');

container.addEventListener('wheel', (event) => {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: 'smooth'
  });
});




const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('transition');
      return;
    }
    entry.target.classList.remove('transition');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const sideTopicUnderline = document.querySelectorAll('.side-topic-underline');
const sideTopic = document.querySelectorAll('.side-topic');
const paragraphSection = document.querySelectorAll('.paragraph-section');
const table = document.querySelectorAll('.table');
const statNumber = document.querySelectorAll('.stat-number');
const stat = document.querySelectorAll('.stat');

// Loop over the elements and add each one to the observer
sideTopicUnderline.forEach((element) => observer.observe(element));
sideTopic.forEach((element) => observer.observe(element));
paragraphSection.forEach((element) => observer.observe(element));
table.forEach((element) => observer.observe(element));
statNumber.forEach((element) => observer.observe(element));
stat.forEach((element) => observer.observe(element));