import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Error creating comment", error);
    return res.status(500).json({
      success: false,
      message: "Error creating comment",
      data: {},
      err: error,
    });
  }
};
