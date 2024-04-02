import { aggregateData, connectDB, getData } from '../../../mongo';

export function POST(request){
    debugger
    return Response.json({message : "test"})
}

export async function GET(request){
    await connectDB();
   let data = await aggregateData("lang_tamil" , 
   [
        { $lookup: {
           from: "lang_rels",
           localField: "id",
           foreignField: "cat_id",
           as: "related_data"
         }
       },
       {$sort: {
         id: 1
       }},
       { $skip: (0) * 10 },
       { $limit: 10 }
     ]
   )
    debugger
    

// [
//     { $lookup: {
//        from: "lang_rels",
//        localField: "id",
//        foreignField: "cat_id",
//        as: "related_data"
//      }
//    },
//    {$sort: {
//      id: 1
//    }},
//    { $skip: (0) * 10 },
//    { $limit: 10 }
//  ]


    return Response.json({message :data})

}