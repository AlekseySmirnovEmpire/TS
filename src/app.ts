class User {
    role?: 'admin' | 'user';

    constructor(private name: string) {
    }
}

function createUser(user: User) {
    switch (user.role) {
        case 'admin':
            const a = 2;
            break;
        case 'user':
            return true;
    }
}

interface ICheck {
    [check: string]: boolean;
}

const c: ICheck = {};
const d = c['drive'];