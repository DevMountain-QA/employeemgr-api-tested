let postEmployee = require('../functions/postEmployee')
let deleteEmployee = require('../functions/deleteEmployee')
let getEmployees = require('../functions/getEmployees')

let containsValue = require('../functions/containsValue')
module.exports = {
    'postEmployees': browser => {
        postEmployee(browser, {id:'9999', name:'Andrew Larson', phone:'1234567890', email:'aj@devmounta.in', title:'Lead Instructor'})
        postEmployee(browser, {id:'9998', name:'Sunny', phone:'1234567890', email:'aj@devmounta.in', title:'Lead Instructor'})
        postEmployee(browser, {id:'9997', name:'Clark', phone:'1234567890', email:'aj@devmounta.in', title:'Lead Instructor'})
        postEmployee(browser, {id:'9996', name:'Andrew Smith', phone:'1234567890', email:'aj@devmounta.in', title:'Lead Instructor'})
    },
    'deleteEmployee': browser => {
        deleteEmployee(browser, '9999')
        deleteEmployee(browser, '9998')
        deleteEmployee(browser, '9997')
        deleteEmployee(browser, '9996')
    },
    // 'getEmployees': browser => {
    //     getEmployees
    //     console.log(employees)
    // },

}