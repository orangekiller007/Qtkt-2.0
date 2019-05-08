const mongoose = require('mongoose');
const Incident = mongoose.model('Incident');
const _ = require('lodash');
const jwt = require('jsonwebtoken');


module.exports.createincident = (req, res, next) => {
    var incident = new Incident();
    incident.ticketid = req.body.ticketid;
    incident.issue = req.body.issue;
    incident.summary = req.body.summary;
    incident.severity = req.body.severity;
    incident.internal = req.body.internal;
    incident.submittedby = req.body.submittedby;
    incident.updated = req.body.updated;
    incident.category = req.body.category;
    incident.subcategory = req.body.subcategory;
    incident.assignedto = req.body.assignedto;
    incident.comments = req.body.comments;
    incident.state = req.body.state;
//req.header
//

    incident.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //if (err.code == 11000)
              //  res.status(422).send(['Duplicate email adrress found.']);
            //else
                return next(err);
        }

    });
}


module.exports.showincident = (req, res, next) =>{
    const header = req.headers['authorization'];
    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;

    const decoded = jwt.verify(token, 'SECRET#123');

    console.log(decoded);

   // console.log(docoded.email);
    utype=decoded['usertype'];
    em=decoded['fullName'];
if(utype=='User'){

    Incident.find({assignedto:em},
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Ticket record not found.' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    )//.where('submittedby').equals(em) ;
    //.where('submittedby').equals(em) ;
    //and({submittedby:em},{assignedto:em})

 


}

else{

    Incident.find(//{ _id: req._id },
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Ticket record not found.' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    );
}
}

module.exports.deleteincident= (req, res, next) =>{
 /*   Incident.remove({ _id: req.body._id },
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Cannot Delete Incident' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    );*/

    Incident.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
        })

}

module.exports.editincident=(req,res,next)=>{
 //   Incident.findById({_id:req.params.id},function(err,result){res.json(result)})
    Incident.findOne(
        {_id:req.params.id},function(err,result){res.json(result)}

    )
}

module.exports.updateincident=(req,res,next)=>{
    Incident.findById({_id:req.params.id},(err,result,next)=>{
        if(!result){
            return next(new error('Error'))
        }
        else{
          
            result.ticketid=req.body.ticketid;
            result.issue=req.body.issue;
           result.summary=req.body.summary;
            result.severity=req.body.severity;
            result.internal=req.body.internal;
            result.submittedby=req.body.submittedby;
           result.updated=req.body.updated;
            result.category=req.body.category;
            result.subcategory=req.body.subcategory;
            result.assignedto=req.body.assignedto;
            result.comments=req.body.comments;
            result.state=req.body.state;
            result.save().then(master=>{res.json('update complete');
        })
        }
        });
}

module.exports.showsubmittedincident = (req, res, next) =>{
    const header = req.headers['authorization'];
    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;

    const decoded = jwt.verify(token, 'SECRET#123');

    console.log(decoded);

   // console.log(docoded.email);
    utype=decoded['usertype'];
    em=decoded['fullName'];
if(utype=='User'){

    Incident.find({submittedby:em},
        (err, incident) => {
            if (!incident)
                return res.status(404).json({ status: false, message: 'Ticket record not found.' });
            else
                return res.status(200).json(incident
                   // { status: true, incident : _.pick(incident,['issue','ticketid']) }
                   );
        }
    )//.where('submittedby').equals(em) ;
    //.where('submittedby').equals(em) ;
    //and({submittedby:em},{assignedto:em})

 


}

}























































