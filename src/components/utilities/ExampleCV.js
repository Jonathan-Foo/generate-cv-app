import { v4 as uuidv4 } from 'uuid';
import tempPFP from '../assets/tempPFP.jpg'

const cvExample = {
    personalInfo: {
        firstName: 'Bob',
        lastName: 'Smith',
        title: 'Senior Web Developer',
        profileImage: tempPFP,
        address: '17, North Street',
        phoneNumber: 13213214,
        email: 'bob.smith@gmail.com',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo maiores harum quos iusto pariatur perspiciatis praesentium porro temporibus animi, inventore at modi laborum, voluptates earum doloribus nihil. Suscipit, aliquid."
    },

    experience: [
        {
            id: uuidv4(),
            position: 'Senior Web Developer',
            company: 'Google LLC',
            city: 'Mountain View',
            from: '2019',
            to: '2022',   
        },
        {
            id: uuidv4(),
            position: 'Junior Web Developer',
            company: 'Facebook Inc',
            city: 'Menlo Park',
            from: '2015',
            to: '2019',   
        },
        {
            id: uuidv4(),
            position: 'Graphic Designer',
            company: 'Netflix Inc',
            city: 'Los Gatos',
            from: '2015',
            to: '2011',   
        },         
    ],

    education: [
        {
            id: uuidv4(),
            uniName: 'University of California, Berkeley',
            degree: 'Master',
            subject: 'Software Engineer',
            from: '2022',
            to: '2020', 
        },
        {
            id: uuidv4(),
            uniName: 'University of San Francisco',
            degree: 'Bachelor',
            subject: 'Graphic Design',
            from: '2017',
            to: '2020', 
        }
    ]

}


export default cvExample;