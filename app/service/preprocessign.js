const repository = require ('../repository/preprocessing');

module.exports={
     async slangwordService(){
             return repository.slangwordrepo();
      },

      async stopwordService(){
            return repository.stopwordrepo();
     },
     async stemmingService(text){
          return repository.stemmingRepo();
     }
}