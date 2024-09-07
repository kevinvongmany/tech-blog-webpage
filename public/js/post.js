const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/dashboard');
      return;
    } 
  } 
  const invalidEl = document.getElementById('invalid-post');
  invalidEl.classList.remove('hidden');
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);