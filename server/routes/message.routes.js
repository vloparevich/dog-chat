const { Router } = require('express');
const router = new Router();

//*********************************************************************
// GET route to read all the messages of a specific user
//*********************************************************************
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  console.log('HIT->userId ' + userId);
});

module.exports = router;
