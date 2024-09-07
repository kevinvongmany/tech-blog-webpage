const newFormHandler = async (event) => {
  event.preventDefault();
  const commentEl = document.getElementById('comment')
  const comment = commentEl.value.trim();
  const postId = commentEl.getAttribute('data-id');

  if (comment) {
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ comment, post_id: postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/post/' + postId);
      return;
    } 
  } 
  const invalidEl = document.getElementById('invalid-comment');
  invalidEl.classList.remove('hidden');
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', newFormHandler);