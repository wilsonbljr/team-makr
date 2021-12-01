export const auth = {
    userId: 1,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM4MzAzMTU1LCJleHAiOjE2MzgzMDY3NTV9.iX0tVHJEF9ytDbOoNHvftfPwgI-oybV3JJXvyEp5o4U'
}

export const users = [
    {
        id: 1,
        skills: [
            {
                level: 4,
                skillId: 9
            },
            {
                level: 4,
                skillId: 10
            },
            {
                level: 4,
                skillId: 11
            },
            {
                level: 3,
                skillId: 12
            },
            {
                level: 3,
                skillId: 13
            }
        ],
        lastName: 'Minatozaki',
        firstName: 'Sana'
    },
    {
        id: 2,
        skills: [
            {
                level: 5,
                skillId: 14
            },
            {
                level: 4,
                skillId: 9
            },
            {
                level: 4,
                skillId: 10
            },
            {
                level: 4,
                skillId: 12
            },
            {
                level: 4,
                skillId: 13
            },
            {
                level: 4,
                skillId: 11
            }
        ],
        lastName: 'Bley',
        firstName: 'Wilson'
    },
    {
        id: 3,
        skills: [
            {
                level: 5,
                skillId: 11
            },
            {
                level: 4,
                skillId: 12
            },
            {
                level: 4,
                skillId: 14
            }
        ],
        lastName: 'Dyer',
        firstName: 'Stephanie'
    }
]

export const user = {
    id: 2,
    firstName: "Wilson",
    lastName: "Bley",
    pronoun: "He/Him",
    admin: false,
    email: "wilson@gmail.com",
    phone_number: "41933654321"
}

export const team = {
    id: 1,
    name: "Agile Applet",
    description: "SCRUMMMMMMMM",
    users: [
        {
            user_active: 1,
            leader: 1,
            id: 1,
            firstName: "Sana",
            lastName: "Minatozaki"
        },
        {
            user_active: 1,
            leader: 0,
            id: 2,
            firstName: "Wilson",
            lastName: "Bley"
        },
    ]
}

export const teams = [
    {
        id: 1,
        name: "Agile Applet",
        description: "SCRUMMMMMMMM"
    },
    {
        id: 2,
        name: "Abstract Connoisseurs",
        description: "OOP rules"
    },
    {
        id: 3,
        name: "Hypertext Assassins",
        description: "HTML?"
    },
    {
        id: 4,
        name: "Callback Cats",
        description: "Promise me"
    }
]

export const personTeam = [{
    id: 2,
    name: "Abstract Connoisseurs",
    description: "OOP rules",
    user_active: 1,
    leader: 1
},
{
    id: 3,
    name: "Novo time",
    description: "Descricao gigante pra testar o wrap de texto aaa aaa aaaaaa aaaaaaa",
    user_active: 1,
    leader: 0
},
{
    id: 4,
    name: "Nosso time",
    description: "Descricao do nosso time",
    user_active: 1,
    leader: 0
}]

export const skills = [
    {
        id: 9,
        name: "Trabalho em equipe",
        soft_skill: true
    },
    {
        id: 10,
        name: "Tomada de decisão",
        soft_skill: true
    },
    {
        id: 11,
        name: "Rustt",
        soft_skill: true
    },
    {
        id: 12,
        name: "JavaScript",
        soft_skill: false
    },
    {
        id: 13,
        name: "Angular",
        soft_skill: false
    },
    {
        id: 14,
        name: "ReactJS",
        soft_skill: false
    }
]

export const personSkills = [
    {
        name: "Rustt",
        level: 1,
        softSkill: 1,
        id: 11
    },
    {
        name: "Tomada de decisão",
        level: 5,
        softSkill: 1,
        id: 10
    },
    {
        name: "Autogestão",
        level: 1,
        softSkill: 1,
        id: 4
    },
    {
        name: "Solução de problemas",
        level: 4,
        softSkill: 1,
        id: 7
    },
    {
        name: "Negociação",
        level: 4,
        softSkill: 1,
        id: 3
    },
    {
        name: "ReactJS",
        level: 3,
        softSkill: 0,
        id: 14
    }
]