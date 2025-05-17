import Note from '../models/note.model.js';
import  logger from  '../utils/logger.js';

export const createNote = async (req, res) => {
  try {
    const userId = req.user.id;  
    const { title, content } = req.body;
    const note = new Note({ userId, title, content });
    await note.save();
    logger.info(`node has been created by ${userId}`);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await Note.find({ userId });  
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const userId = req.user.id;
    const note = await Note.findOne({ _id: req.params.id, userId });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId },
      { title, content },
      { new: true }
    );
    if (!note) return res.status(404).json({ message: 'Note not found or not authorized' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId });
    if (!note) return res.status(404).json({ message: 'Note not found or not authorized' });
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
