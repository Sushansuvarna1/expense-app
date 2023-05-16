const Profile = require("../models/profile")

const profileController = {}


profileController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Profile.findOneAndUpdate({ _id: id, userId: req.user._id }, body, { new: true, runValidators: true })
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json(err.mesaage)
        })
}



profileController.profile = (req, res) => {
    if (req.file) {
        const id = req.params.id
        const body = req.body
        body.avatar = req.file.path
        Profile.findOneAndUpdate({ _id: id, userId: req.user._id }, { $set: body }, { new: true, runValidators: true })
            .then((profile) => {
                res.json(profile)
            })
            .catch((err) => {
                res.json(err.mesaage)
            })
    } else {
        res.json({
            errors: "only jpg and png file supporter"
        })
    }

}

profileController.list = (req, res) => {
    Profile.findOne({ userId: req.user._id })
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json({
                message: err.mesaage
            })
        })
}


profileController.delete = (req, res) => {
    const id = req.params.id
    Profile.findOneAndDelete({ _id: id, userId: req.user._id })
        .then((profile) => {
            res.json(profile)
        })
        .catch((err) => {
            res.json({
                message: err.mesaage
            })
        })
}

module.exports = profileController