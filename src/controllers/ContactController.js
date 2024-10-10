import express from "express";
const getContact = (req, res) => {
    return res.render("home", { data: { title: 'Contact website', page: 'contact'} })
}
export default getContact