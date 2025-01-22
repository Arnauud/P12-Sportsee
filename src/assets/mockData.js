export const USER_MAIN_DATA = [
    {
        id: 39,
        userInfos: {
            firstName: 'Arnaud',
            lastName: 'Bourgin',
            age: 29,
        },
        todayScore: 0.85,
        keyData: {
            calorieCount: 2900,
            proteinCount: 160,
            carbohydrateCount: 310,
            lipidCount: 45
        }
    },
    {
        id: 27,
        userInfos: {
            firstName: 'Jordan',
            lastName: 'Lopez',
            age: 33,
        },
        todayScore: 0.45,
        keyData: {
            calorieCount: 2100,
            proteinCount: 100,
            carbohydrateCount: 180,
            lipidCount: 90
        }
    }
];

export const USER_ACTIVITY = [
    {
        userId: 39,
        sessions: [
            { day: '2022-08-01', kilogram: 78, calories: 250 },
            { day: '2022-08-02', kilogram: 78, calories: 200 },
            { day: '2022-08-03', kilogram: 79, calories: 300 },
            { day: '2022-08-04', kilogram: 79, calories: 270 },
            { day: '2022-08-05', kilogram: 78, calories: 190 },
            { day: '2022-08-06', kilogram: 77, calories: 180 },
            { day: '2022-08-07', kilogram: 77, calories: 400 }
        ]
    },
    {
        userId: 27,
        sessions: [
            { day: '2022-08-01', kilogram: 68, calories: 260 },
            { day: '2022-08-02', kilogram: 67, calories: 210 },
            { day: '2022-08-03', kilogram: 68, calories: 320 },
            { day: '2022-08-04', kilogram: 68, calories: 450 },
            { day: '2022-08-05', kilogram: 67, calories: 170 },
            { day: '2022-08-06', kilogram: 67, calories: 190 },
            { day: '2022-08-07', kilogram: 67, calories: 380 }
        ]
    }
];

export const USER_AVERAGE_SESSIONS = [
    {
        userId: 39,
        sessions: [
            { day: 1, sessionLength: 35 },
            { day: 2, sessionLength: 40 },
            { day: 3, sessionLength: 55 },
            { day: 4, sessionLength: 45 },
            { day: 5, sessionLength: 25 },
            { day: 6, sessionLength: 20 },
            { day: 7, sessionLength: 60 }
        ]
    },
    {
        userId: 27,
        sessions: [
            { day: 1, sessionLength: 25 },
            { day: 2, sessionLength: 35 },
            { day: 3, sessionLength: 50 },
            { day: 4, sessionLength: 35 },
            { day: 5, sessionLength: 30 },
            { day: 6, sessionLength: 45 },
            { day: 7, sessionLength: 55 }
        ]
    }
];

export const USER_PERFORMANCE = [
    {
        userId: 39,
        kind: {
            1: 'endurance',
            2: 'energy',
            3: 'cardio',
            4: 'intensity',
            5: 'speed',
            6: 'strength',
        },
        data: [
            { value: 90, kind: 1 },
            { value: 130, kind: 2 },
            { value: 150, kind: 3 },
            { value: 70, kind: 4 },
            { value: 210, kind: 5 },
            { value: 100, kind: 6 }
        ]
    },
    {
        userId: 27,
        kind: {
            1: 'endurance',
            2: 'energy',
            3: 'cardio',
            4: 'intensity',
            5: 'speed',
            6: 'strength',
        },
        data: [
            { value: 180, kind: 1 },
            { value: 220, kind: 2 },
            { value: 110, kind: 3 },
            { value: 90, kind: 4 },
            { value: 240, kind: 5 },
            { value: 120, kind: 6 }
        ]
    }
];

