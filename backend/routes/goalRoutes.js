const express = require('express');
const router = express.Router();
const { getGoals,setGoal, deleteGoal,updateGoal } = require('../controller/goalsController');

router.get('/', getGoals);

router.post('/',setGoal)

router.put('/:id',updateGoal)

router.delete('/:id',deleteGoal)

module.exports = router;