import { v4 as uuidv4 } from 'uuid';
import pfp from '../assets/pfp.jpg'

const emptyCV = {
    personalInfo: {
        firstName: '',
        LastName: '',
        title: '',
        profileImage: pfp,
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
    },

    experience: [
        {
            id: uuidv4(),
            position: '',
            company: '',
            city: '',
            from: '',
            to: '',   
        },
    ],

    education: [
        {
            id: uuidv4(),
            uniName: '',
            degree: '',
            subject: '',
            from: '',
            to: '', 
        },
    ]

}


export default emptyCV;