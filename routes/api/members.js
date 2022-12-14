// **************** 13 **************
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members')

// Gets All Members (this is a json object)
// /api/members is a route we created
router.get('/', (req, res) => {
    res.json(members);
});

// Get Single Member
router.get('/:id', (req, res) => {
    // 'some()' runs the equality condition based on true or false. its a js method
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))); 
    } else {
        // to give a status of 400 with member with invalid id
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }

});

// Create Member
router.post('/', (req, res) => {
    // res.send(req.body);
    // we use a universal id here
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
      return  res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    res.json(members);
    // res.redirect('/');
    /*
    while this res.json(members); add to json member and go to new page
    this  res.redirect('/'); add to member and redirect back to the same page
    */
});

// Update Member
router.put('/:id', (req, res) => {
    // 'some()' runs the equality condition based on true or false. its a js method
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member });
            }
        });
    } else {
        // to give a status of 400 with member with invalid id
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }

});

// Delete Member
router.delete('/:id', (req, res) => {
    // 'some()' runs the equality condition based on true or false. its a js method
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))}); 
    } else {
        // to give a status of 400 with member with invalid id
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }

});

module.exports = router;

// **************** 12 **************
// const express = require('express');
// const uuid = require('uuid');
// const router = express.Router();
// const members = require('../../Members')

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// router.get('/', (req, res) => {
//     res.json(members);
// });

// // Get Single Member
// router.get('/:id', (req, res) => {
//     // 'some()' runs the equality condition based on true or false. its a js method
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id))); 
//     } else {
//         // to give a status of 400 with member with invalid id
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }

// });

// // Create Member
// router.post('/', (req, res) => {
//     // res.send(req.body);
//     // we use a universal id here
//     const newMember = {
//         id: uuid.v4(),
//         name: req.body.name,
//         email: req.body.email,
//         status: 'active'
//     }

//     if(!newMember.name || !newMember.email) {
//       return  res.status(400).json({ msg: 'Please include a name and email' });
//     }

//     members.push(newMember);
//     res.json(members);
// });

// // Update Member
// router.put('/:id', (req, res) => {
//     // 'some()' runs the equality condition based on true or false. its a js method
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found) {
//         const updMember = req.body;
//         members.forEach(member => {
//             if(member.id === parseInt(req.params.id)) {
//                 member.name = updMember.name ? updMember.name : member.name;
//                 member.email = updMember.email ? updMember.email : member.email;

//                 res.json({ msg: 'Member updated', member });
//             }
//         });
//     } else {
//         // to give a status of 400 with member with invalid id
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }

// });

// module.exports = router;

// **************** 11 **************
// const express = require('express');
// const uuid = require('uuid');
// const router = express.Router();
// const members = require('../../Members')

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// router.get('/', (req, res) => {
//     res.json(members);
// });

// // Get Single Member
// router.get('/:id', (req, res) => {
//     // 'some()' runs the equality condition based on true or false. its a js method
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id))); 
//     } else {
//         // to give a status of 400 with member with invalid id
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }

// });

// // Create Member
// router.post('/', (req, res) => {
//     // res.send(req.body);
//     // we use a universal id here
//     const newMember = {
//         id: uuid.v4(),
//         name: req.body.name,
//         email: req.body.email,
//         status: 'active'
//     }

//     if(!newMember.name || !newMember.email) {
//       return  res.status(400).json({ msg: 'Please include a name and email' });
//     }

//     members.push(newMember);
//     res.json(members);
// });

// module.exports = router;

// **************** 10 **************
// const express = require('express');
// const router = express.Router();
// const members = require('../../Members')

// // Gets All Members (this is a json object)
// // /api/members is a route we created
// router.get('/', (req, res) => {
//     res.json(members);
// });

// // Get Single Member
// router.get('/:id', (req, res) => {
//     // 'some()' runs the equality condition based on true or false. its a js method
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id))); 
//     } else {
//         // to give a status of 400 with member with invalid id
//         res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//     }

// });

// module.exports = router;