import express from 'express';
import { isAuthenticate } from '../middlewares/auth.js';
import { completeNotes, createNote, deleteNote, displayNote, updateNote } from '../controllers/noteController.js';

const router=express.Router();

router.post('/create',isAuthenticate,createNote);
router.get('/mynote',isAuthenticate,displayNote);
router.put('/:id',isAuthenticate,updateNote);
router.put('/comp/:id',isAuthenticate,completeNotes);
router.delete('/:id',isAuthenticate,deleteNote);



export default router;