import express from "express";
const router = express.Router();
export default router;

import { getEmployees, getRandomEmployee, getSingleEmployee, addEmployee } from "#db/employees";

router.route("/")
.get((req, res) => {
    res.status(200).send(getEmployees())
})
.post((req, res) => {
    if (!req.body) return res.status(400).send("Request body is required.");
    if (!req.body.name) return res.status(400).send("Name is empty")

    addEmployee(req.body.name)
    res.status(201).send(`added ${req.body.name} to employees`)
})

router.route("/random")
.get((req, res) => {
    res.status(200).send(getRandomEmployee())
})

router.route("/:id")
.get((req, res) => {
    const singleEmployee = getSingleEmployee(Number(req.params.id))
    if (singleEmployee){
        res.status(200).send(singleEmployee)
    }else(
        res.status(404).send("employee not found")
    )
})