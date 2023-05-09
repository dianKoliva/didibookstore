import Author from '../database/models/Author.js';

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.update(req.body);
      res.json(author);
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.destroy();
      res.json({ message: 'Author deleted' });
    } else {
      res.status(404).json({ message: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
