//Import schemas:
const indexesSchema = require('./indexesSchema');

//--------------------------------------------------------------------------------------------------------------------//
// IS AUTO INCREMENT:
// Generate auto increment number to the fields designated in the schema before saving them to the database.
//--------------------------------------------------------------------------------------------------------------------//
const isAutoIncrement = (Schema, fieldName, start = 1, increment = 1) => {
    //PRE SAVE INSERT:
    Schema.pre('save', async function (next) {
        const data = this;

        //Set projection:
        let indexesProj = {}
        indexesProj[fieldName] = 1;

        //Find last record in global indexes collection:
        await indexesSchema.Model.findOne({}, indexesProj, { $orderby : { 'createdAt' : -1 } }).exec()
        .then(async (indexesData) => {
            //Initializate index and _id (global_indexes):
            let currentIndex = start;
            let _id = undefined;

            //Check indexes data:
            if(indexesData){
                //Increment last index:
                currentIndex = indexesData[fieldName] + increment;      
                _id = indexesData._id;
            }

            //Save index (global_indexes):
            await saveIndex(fieldName ,currentIndex, _id, start);

            //Set index into current schema:
            data[fieldName] = currentIndex;

            next();
        })
        .catch((err) => {
            //Send error:
            next(err);
        });
    });

    //Return MongoDB Schema:
    return Schema;
}
//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
// SAVE INDEX:
// This function is responsible for saving the current index in the collection of global indexes.
//--------------------------------------------------------------------------------------------------------------------//
async function saveIndex(fieldName, currentIndex, _id = undefined, start){
    //Set save index data:
    let saveIndexData = {};
    saveIndexData[fieldName] = parseInt(currentIndex, 10);

    //Create mongodb save object:
    const objIndex = new indexesSchema.Model(saveIndexData);

    //Check if start is equal to current index (first index):
    if(currentIndex == start){
        //INSER FIRST INDEX:
        await objIndex.save(objIndex)
            .then((indexData) => {
                console.log('\nInsert global index success.')
            })
            .catch((err) => {
                //Send error:
                console.error('\nInsert global index error:' + err);
            }
        );
    } else {
        //FIND ONE AND UPDATE INDEX:
        if(_id !== undefined){
            await indexesSchema.Model.findOneAndUpdate({ _id: _id }, saveIndexData, { new: true })
            .then(async (updatedIndexData) => {
                //Check if have results:
                if(updatedIndexData) {
                    console.log('\nUpdate global index success.')
                } else {
                    //Dont match (empty result):
                    console.log('\nUpdate global index dont match (empty result).')
                }
            })
            .catch((err) => {
                //Send error:
                console.error('\nUpdate global index error:' + err);
            });
        } else {
            console.log('Undefined _id update index!');
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------//
//Export middlewares:
module.exports = {
    isAutoIncrement
};
//--------------------------------------------------------------------------------------------------------------------//