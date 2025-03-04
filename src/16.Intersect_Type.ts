

type emp = {
    name: string;
    startDate: Date;
};

type manager = {
    name: string;
    department:string;
};

type techLead=emp & manager;

const T1:techLead={
    name:"Ajay",
    department:"IT",
    startDate:new Date(),
}

//You cannot do And(&), Or(|) in interfaces . 