import { InMemoryDbService } from "angular-in-memory-web-api";


export class EmpApiService implements InMemoryDbService{
    createDb(){
        return { EmployeeList: [] = [
            {id:1, fullName: 'Roshan Singh', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:2, fullName: 'Sunil Kumar Sen', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:3, fullName: 'Sima Das Gupta', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:4, fullName: 'Rohan Desai', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:5, fullName: 'Rahim Sheikh', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:6, fullName: 'Srestha Rawat', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:7, fullName: 'Priti Singh', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:8, fullName: 'Sunidhi Jaiswal', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:9, fullName: 'Rajesh Kumar Kundu', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
            {id:10, fullName: 'Raima Kaur', emailId:"name@example.com", contact:1234567890, Dob: '10/09/2000', address: "IND"},
        ]
    };
}
}