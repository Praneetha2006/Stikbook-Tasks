const validatePost = (title, content, author) => {

    if (!title || title.length < 5) {
        return "Title must be at least 5 characters";
    }

    if (!content || content.length < 20) {
        return "Content must be at least 20 characters";
    }

    if (!author) {
        return "Author is required";
    }

    return null;
};

module.exports = validatePost;