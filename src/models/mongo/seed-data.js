export const seedData = {
    users: {
        _model: "User",
        homer: {
            firstName: "Homer",
            lastName: "Simpson",
            email: "homer@simpson.com",
            password: "secret",
        },
        marge: {
            firstName: "Marge",
            lastName: "Simpson",
            email: "marge@simpson.com",
            password: "secret",
        },
        bart: {
            firstName: "Bart",
            lastName: "Simpson",
            email: "bart@simpson.com",
            password: "secret",
        },
    },
    agencies: {
        _model: "Agency",
        clinistaff: {
            AgencyName: "Clinistaff",
            code: "DOC-T-1",
            office: "MediAgency",
        },
        allcare: {
            AgencyName: "AllCare",
            code: "NUR-F-1",
            office: "NurseAgency",
        },
        nurseLink: {
            AgencyName: "NurseLink",
            code: "NUR-T-1",
            office: "NurseAgency",
        },
    },
    rosters: {
        _model: "Roster",
        one: {
            hour: 8,
            profession: "doctor",
            staff: "->users.bart",
            agency: "->agencies.clinistaff",
            lat: "52.161290",
            lng: "-7.51540",
        },
        two: {
            hour: 5,
            profession: "nurse",
            staff: "->users.marge",
            agency: "->agencies.nurseLink",
            lat: "52.261290",
            lng: "-7.231540",
        },
        three: {
            hour: 3,
            profession: "doctor",
            staff: "->users.homer",
            agency: "->agencies.clinistaff",
            lat: "52.361290",
            lng: "-7.241540",
        },
    },
};
