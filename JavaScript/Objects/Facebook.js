/* Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/
var facebookProfile = {
                        name: "Andriya",
                        friends: 120,
                        messages: ["Nice","Wow!!","How are you","Good Job!"],
                        postMessage: function (message){
                            facebookProfile.messages.push(message);
                            return facebookProfile.messages;
                        },
                        deleteMessage: function (index){
                            facebookProfile.messages.splice(index, 1);
                            return facebookProfile.messages;
                        },
                        addFriend: function(){
                            facebookProfile.friends +=  1;
                            return facebookProfile.friends;
                        },
                       removeFriend: function(){
                            facebookProfile.friends -= 1; 
                            return facebookProfile.friends;
                        }
    
                    };
console.log(facebookProfile.postMessage("Hello!")); 
console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());