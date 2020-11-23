import { v4 as uuidv4 } from 'uuid';
import CoreBeans from '../../config/CoreBeans';
import Runnable from '../../interface/Runnable';
import User from '../../model/User';
import UserService from '../../services/UserService';

export default class CountOneToHundredAsGuest implements Runnable {
    userService: UserService;

    constructor(container: any) {
        this.userService = container[CoreBeans.USER_SERVICE];
    }

    run() {
        const temp: User = {
            id: '',
            username: `guest-${uuidv4()}`,
            email: '',
            firstName: '',
            lastName: '',
        }
        this.userService.create(temp);
        for(let i=1; i<=100; i++) {
            console.log(`${temp.username} counts ${i}`);    
        }
        this.userService.delete(temp.username);
    }
}