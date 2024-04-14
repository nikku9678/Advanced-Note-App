import { User } from "../models/user.js";
import { Note } from "../models/note.js";
export const createNote = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    console.log(title, description);
    if (!title || !description) {
      return res.status(400).send({
        error: "You must provide a title and description",
      });
    }

    await Note.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Note added successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const displayNote = async(req, res) => {
    const id =req.user._id;
    console.log(id);

    const note = await  Note.find({user : id});
    
    if(!note){return res.status(404).json({message:"No such note found"})}

    res.status(200).json({
        status:true,
        message:"Note  fetched Successfully!",
        note,
    })
};
export const updateNote = async(req, res,next) => {
    try {
        const id = req.params.id;
        
        const { title, description } = req.body;
        const note = await Note.findByIdAndUpdate(
          id,
          { ...req.body },
          { new: true }
        );
        if (!note) return next(new ErrorHandler("Task not found", 404));
        // note.isCompleted =!note.isCompleted
        await note.save();

        res.status(200).json({
          success: true,
          message: "note Updated!",
        });
      } catch (error) {
        next(error);
      }
};
export const completeNotes = async(req, res,next) => {
    try {
        const id = req.params.id;
        const note = await Note.findById(id);
        if (!note) return next(new ErrorHandler("Task not found", 404));
        note.isCompleted =!note.isCompleted
        await note.save();

        res.status(200).json({
          success: true,
          message: "note Updated!",
        });
      } catch (error) {
        next(error);
      }
};
export const deleteNote = async(req, res,next) => {
    try {
        const note =await Note.findById(req.params.id);
        if (!note) return next(new ErrorHandler("note not found", 404));
        await note.deleteOne();
    
        res.status(200).json({
          message: "note Deleted!",
          success: true,
        });
      } catch (error) {
        next(error);
      }
};
