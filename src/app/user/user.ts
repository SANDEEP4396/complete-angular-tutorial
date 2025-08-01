import {
  Component,
  computed,
  signal,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserType } from './userType.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //FYI: This @ is known as decorator, it is used to define metadata for the class. Widely used in Angular to define components, directives, pipes, etc.
  // This makes the avatar property available for binding in the template which can be used to set  from .html file. This is known as property binding.
  //This is one way to pass data from parent component to child component in Angular. Uppercase Input is a decorator that marks a class field as an input property, which can receive data from a parent component.
  // @Input({ required: true }) avatar: string;
  // @Input({ required: true }) name: string;
  // @Input({ required: true }) id: string;
  @Input({ required: true }) user!: UserType;

  //Option 2: use lowercase input, this is a more recent feature in Angular, it is used to define an input property that can be bound to a value from the parent component.
  // Read Only signals. Not widely used yet, but a good practice to use input for properties that are required.
  // avatar = input.required<string>();
  // name = input.required<string>();

  //  imagePath = computed(() =>  {return 'assets/users/' + this.avatar();});

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  get userName() {
    return this.user.name;
  }

  //FYI to output that the user was selected, we can use an output property.
  // @Output() userSelected = new EventEmitter<string>();
  @Output() selectedUser = new EventEmitter<string>();
  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }

  //Other way of using output, this is a more recent feature in Angular, it is used to define an output property that can emit events to the parent component.
  userSelected = output<string>();
  onUserSelected() {
    this.userSelected.emit(this.user.id);
  }

  @Input({ required: true }) selected!: boolean;
  
}

export class DemoClickableUser {
  //FYI: This is one way of updating the state of the component, we can use a random user from the dummy users array.
  // This is a simple example of how to use a random user from the dummy users array
  selectedUser = DUMMY_USERS[randomIndex];

  get userName() {
    return this.selectedUser.name;
  }

  /**
   * FYI: This method is known as state management, it allows us to change the state of the component
   * when the user clicks on the button, we can change the selected user.
   * Angular uses zone.js to manage the state of the application.
   * This method is called when the user clicks on the button.
   */
  onSelectUser() {
    // Logic to handle user selection can be added here
    console.log('User selected:', this.selectedUser.name);
    this.selectedUser =
      DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }

  //OPTION 2: Using signals to notify angular about the state change and required UI update
  /**
   * A signal is an object that stores a value and notifies subscribers when the value changes, Ex: when [randomIndex] changes it will notify.
   */
  dynamicUser = signal(DUMMY_USERS[randomIndex]);

  onDynamicSelectUser() {
    // Logic to handle dynamic user selection can be added here
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.dynamicUser.set(DUMMY_USERS[randomIndex]);
    console.log('Dynamic User selected:', this.dynamicUser().name);
  }

  /**
   * This method returns the path of the image based on the selected user. Option 1
   */
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  /**
   * This method returns the path of the image based on the dynamic user. Option 2
   * changes to the dynamicUser signal will trigger a re-evaluation of this computed property.
   * This is a more efficient way to handle dynamic data in Angular. If there are no changes to the dynamicUser signal,
   * this computed property will not be re-evaluated.
   */
  dynamicImagePath = computed(
    () => 'assets/users/' + this.dynamicUser().avatar
  );

  get dynamicUserName() {
    return this.dynamicUser().name;
  }
}
