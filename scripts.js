function markProgress(courseId) {
  let progress = JSON.parse(localStorage.getItem('progress')) || {};
  progress[courseId] = true;
  localStorage.setItem('progress', JSON.stringify(progress));
  alert('Marked as complete!');
}

document.addEventListener('DOMContentLoaded', () => {
  const progressList = document.getElementById('progressList');
  if (progressList) {
    const progress = JSON.parse(localStorage.getItem('progress')) || {};
    const courses = {
      html: 'Intro to HTML',
      css: 'CSS Fundamentals',
    };

    for (let courseId in courses) {
      const li = document.createElement('li');
      li.textContent = ${courses[courseId]} - ${progress[courseId] ? '✅ Completed' : '❌ Incomplete'};
      progressList.appendChild(li);
    }
  }
});
  