const { string } = require('joi')
const mongoose = require('mongoose')

const postweddingSchema = new mongoose.Schema({
    ClientName:{
        type:String
    },
    BrideName:{
        type:String
    },
    GroomName:{
        type:String
    },    
    date :{
        type : String,
    },
    FromDate:{
        type : String,
      },
    ToData:{
        type : String,
      },
    MinBudget: {
        type : String,
    required : true,
    },
    MaxBudget: {
        type : String,
        required : true,
    },
    City:{
        type : String,
       },
    SpecialService:{
        type : String
    },
    NoOfGuests:{
        type:Number
    },
    muhDikhal:[{
        type:String
    }],
    muhDikhalvalue:{
        musicvalues:{
            type:String
        },
        dancevalues:{
            type:String
        }
    },
    SubaarambhYatra:[{
        type:String
    }],
    Honneymoon :{
        DestinationIndia:{
            type:String
        },
        DestinationAbroad:{
            type:String
        },
        HonneymoonDays:{
            type:String
        }
    },
    Food :{
        Foodtype:{
            type:String
        },
        items:{
            type:String
        }
    }

},{
    timestamps:true
    
})


const PostWeddingForm = mongoose.model('PostWeddingForm',postweddingSchema)

exports.PostWeddingForm = PostWeddingForm