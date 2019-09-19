const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {

  beforeEach(async () => {
    await db('hobbits').truncate();
  })

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('insert()', () => {
    it('should insert hobbits into db', async () => {
      // insert record
      await Hobbits.insert({ name: 'Gaffer' })
      // assert the record was inserted
      let hobbits = await db('hobbits')
      expect(hobbits).toHaveLength(1)
    })

    it('should insert Gaffer into db', async () => {
      // insert record
      const [id] = await Hobbits.insert({ name: 'Gaffer' })
      // assert the record was inserted
      let hobbit = await db('hobbits').where({id}).first()
      expect(hobbit.name).toBe('Gaffer')
    })
  
  })

})