const express = require('express');

const RequestStrategyFactory = require('./RequestStrategyFactory/RequestStrategyFactory');

const app = express();

app.get('/:type/:id', async (req, res, next) => {
  const type = req.params.type;
  const id = req.params.id;
  try {
    const factory = new RequestStrategyFactory();
    const requestStrategy = factory.createRequestStrategy(type);
    const result = await requestStrategy.doRequest(id);
    console.log(result)
    res.json(result);
  } catch (err) {
      if(!err.statusCode) err.statusCode = 500;
      next(err)
  }
});

app.use((err, req, res, next)=> {
    console.log(err);
    res.status(err.statusCode).json({message: err.message})
})

app.listen(3000, res => console.log(`Server on in http://localhost:3000`));