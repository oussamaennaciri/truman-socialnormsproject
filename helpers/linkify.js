module.exports = function linkify(text, postId) {
    if (!text) return '';
    return text.replace(/(https?:\/\/[^\s]+)/g, function (url) {
      return `<a href="${url}" class="tracked-link" data-post-id="${postId}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
  };  