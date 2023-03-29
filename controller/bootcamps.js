// @desc   Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  public

exports.getbootcamps=(req,res,next)=>{
    res.status(200).json({success:true , message : "Show all bootcamp"});
}

// @desc   Get single bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  public

exports.getbootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message : `show bootcamp with id ${req.params.id}`});
}

// @desc   Post single bootcamp
//@route   POST /api/v1/bootcamps
//@access  private

exports.createbootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message : "create new bootcamp"});
}

// @desc   update bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  private

exports.updatebootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message : `update bootcamp with id ${req.params.id}`});
}



// @desc   delete bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  private

exports.deletebootcamp=(req,res,next)=>{
    res.status(200).json({success:true , message : `delete bootcamp with id ${req.params.id}`});
}

