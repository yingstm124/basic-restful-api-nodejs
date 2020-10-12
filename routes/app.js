
module.exports = {

    getAllEmployee: (req, res) => {
        
        let query = 'SELECT * FROM Employee' 

        db.query(query, (err, result) => {
            if(err){
                console.log(err)
                res.status(500)
            }
            else{
                res.json(result)
                console.log('result ', result)
            }
        })
    },

    getEmployee: (req, res) => {

        const id = req.params.id
        let query = 'SELECT * FROM Employee e WHERE e.emp_id = ?'

        db.query(query, id, (err, result) => {
            if(err){
                console.log(err)
                res.status(500)
            }
            else{
                res.json(result)
            }
        })
    },

    addEmployee: (req, res) => {

        let empInfo = req.body
        let query = 'INSERT INTO Employee SET ?'

        db.query(query, empInfo, (err, result) => {
            if(err){
                console.log(err)
                res.status(500)
            }
            else{ 
                console.log('insert employee')
                res.status(200)
            }
        })
    },

    editEmployee: (req, res) => {

        const id = req.params.id
        let empInfo = req.body
        let query = 'UPDATE Employee e SET ? WHERE e.emp_id = ?'

        db.query(query, [empInfo,id], (err, result) => {
            if(err){
                console.log(err)
                res.status(500)
            }
            else{
                console.log('edit employee')
                res.status(200)
            }
        })

    },
    
    deleteEmployee: (req, res) => {

        const id = req.params.id
        let query = 'DELETE FROM Employee e WHERE e.emp_id = ?'

        db.query(query, [id], (err, result) => {
            if(err){
                console.log(err)
                res.status(500)
            }
            else{
                console.log('employee deleted')
                res.status(200)
            }
        })
    }

}