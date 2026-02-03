let profiledata=
{
    profileinfo: {
        name:"Aaryan Jha",
        title:"My Portfolio",
        email:"jhaaryan615@gmail.com",
        address:"Ratopul",
        phone:"9886463506",
        bio:"I'm Batman",
    },
    education:[
    {
        id:"1",
        degree:"BCA",
        year:"2024",
        description:"Running",
        institution:"NKC",

        id:"2",
        degree:"+2",
        year:"2020",
        description:"Completed",
        institution:"KIST",

    }
    ],
    project:[
        {
            id:"1",
            project_name:"Portfolio",
            technologies:["REACT","Springboot","MySql"],
            desc:"yes",
            
        }
    ],
    hobbies:[
        {
            id:"1",
            name:"Cricket",
            description:"very good all-rounder",
            icon:"",
        }
    ]
    }
export const mockAPI=
{
    getprofiledata()
    {
        return{ ...profiledata}
    }

}