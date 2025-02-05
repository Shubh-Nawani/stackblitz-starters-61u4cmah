const Menu = require('../models/menuModel')

const addMenu = async (req, res) => {
    try {
        const {name, desc, price} = req.body

        if (name == null || price == null) {
            return res.status(400).send("Please fill all required fields")
        }

        const newMenu = new Menu({
            name,
            desc,
            price
        })

        await newMenu.save()
        return res.status(201).send("Menu created!")


    } catch (err) {
        return res.status(500).send(err.message)
    }
}

module.exports = addMenu