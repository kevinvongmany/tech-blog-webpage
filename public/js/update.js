const updateFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.update-post-form').dataset.id;
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/post/' + id);
      return;
    } 
  } 
  const invalidEl = document.getElementById('invalid-update');
  invalidEl.classList.remove('hidden');
};

document
  .querySelector('.update-post-form')
  .addEventListener('submit', updateFormHandler);