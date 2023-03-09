import { pool } from "../db.js";

export const home   = async (req, res) => {
    const result = await pool.query('Select 1 + 1 as Result')
    res.json(result)
    console.log(result)
}