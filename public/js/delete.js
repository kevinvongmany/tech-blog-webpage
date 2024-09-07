const postList = document.querySelector('.post-list');

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      const invalidEl = document.getElementById('invalid-delete');
      invalidEl.classList.remove('hidden');
    }
  }
};

postList.addEventListener('click', delButtonHandler);
